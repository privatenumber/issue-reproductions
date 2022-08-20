
import('package/internal/file.js').catch(() => {
	console.log('Fail: Single slash import');
});

import('package//internal/file.js').then(() => {
	console.log('Success: Double slash import');
});
