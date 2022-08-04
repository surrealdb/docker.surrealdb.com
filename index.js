const fs = require('fs');

const SCRIPT = fs.readFileSync('./docker-compose.yml', 'utf8');

exports.main = async (event) => {
	
	return {
		status: '200',
		statusDescription: 'OK',
		headers: {
			'cache-control': [{
				key: 'Cache-Control',
				value: 'max-age=60'
			}],
			'content-type': [{
				key: 'Content-Type',
				value: 'text/yaml'
			}]
		},
		body: SCRIPT,
	};
	
};
