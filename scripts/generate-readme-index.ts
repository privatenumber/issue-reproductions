import fs from 'fs/promises';
import path from 'path';
import commentMark from 'comment-mark';

const getSubDirectories = async (directoryPath: string) => {
	const files = await fs.readdir(directoryPath);

	const stats = await Promise.all(files.map(async (fileName) => {
		const filePath = path.join(directoryPath, fileName);
		const stat = await fs.stat(filePath);
		if (stat.isDirectory()) {
			return filePath;
		}
	}));

	return stats.filter(Boolean) as string[];
};

async function getReproductions() {
	const orgPaths = await getSubDirectories(reproductionsDirectory);
	const repoPaths = (await Promise.all(orgPaths.map(getSubDirectories))).flat();
	const issuePaths = (await Promise.all(repoPaths.map(getSubDirectories))).flat();

	return issuePaths.map((reproPath) => {
		const [org, repo, issue] = path.relative(reproductionsDirectory, reproPath).split('/');
		return {
			reproPath,
			org,
			repo,
			issue,
		};
	});
}

const reproductionsDirectory = './reproductions';

(async () => {
	const reproductions = await getReproductions();
	const bugIndex = reproductions.map(
		({
			reproPath, org, repo, issue,
		}) => `- [${org}/${repo}](https://github.com/${org}/${repo}) • [Issue #${issue}](https://github.com/${org}/${repo}/issues/${issue}) — [Reproduction](${reproPath})`,
	).join('\n');

	let readme = await fs.readFile('./README.md', 'utf-8');

	readme = commentMark(readme, {
		bugIndex,
	});

	await fs.writeFile('./README.md', readme);
})();
