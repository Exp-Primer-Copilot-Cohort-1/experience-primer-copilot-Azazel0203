// Check if all required environment variables are set
const requiredEnvVariables = ['ENV_VAR1', 'ENV_VAR2']; // Add your required environment variables here

for (const envVar of requiredEnvVariables) {
    if (!process.env[envVar]) {
        console.error(`Missing required environment variable: ${envVar}`);
        process.exit(1);
    }
}

// Check if 'Create web server' is included in comments.js
const fs = require('fs');

fs.readFile('comments.js', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading comments.js:', err);
        process.exit(1);
    }

    if (!data.includes('Create web server')) {
        console.error("Missing 'Create web server' in comments.js");
        process.exit(1);
    }

    // If all checks pass, start the server
    const http = require('http');

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, world!');
    });

    server.listen(3000, 'localhost', () => {
        console.log('Server running at http://localhost:3000/');
    });
});
