import('package/internal/file.js').catch((error) => {
	console.log('Fail: Single slash import:', error.code);
});

import('package//internal/file.js').then(() => {
	console.log('Success: Double slash import');
});
