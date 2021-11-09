const express = require('express');

const server = express();
const renderer = require('vue-server-renderer').createRenderer();
const createApp = require('./App');

server.use('/asset', express.static('node_modules/vue/dist'));
server.use('/App.js', express.static('App.js'));

server.get('*', (request, res) => {
	const app = createApp();
	renderer.renderToString(app, (error, html) => {
		if (error) {
			res.status(500).end('Internal Server Error');
			return;
		}
		res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <body>
        ${html}
         <script src="/asset/vue.js"></script>
         <script src="/App.js"></script>
        </body>
      </html>
    `);
	});
});

server.listen(8080);
console.log('Listening at http://localhost:8080');
