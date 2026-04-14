const fs = require('fs');
const path = require('path');

const defaultApiUrl = 'http://localhost:8080/';
const inputApiUrl = (process.env.NG_APP_API_URL || defaultApiUrl).trim();
const apiUrlWithProtocol = /^https?:\/\//i.test(inputApiUrl)
  ? inputApiUrl
  : `https://${inputApiUrl}`;
const normalizedApiUrl = apiUrlWithProtocol.endsWith('/') ? apiUrlWithProtocol : `${apiUrlWithProtocol}/`;

const envFilePath = path.join(__dirname, '..', 'src', 'assets', 'env.js');
const fileContent = `window.__env = window.__env || {};\nwindow.__env.BASIC_URL = ${JSON.stringify(normalizedApiUrl)};\n`;

fs.writeFileSync(envFilePath, fileContent, 'utf8');
console.log(`Generated ${envFilePath} with BASIC_URL=${normalizedApiUrl}`);
