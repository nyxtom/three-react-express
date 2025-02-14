import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';
import path from 'path';

import { webConfig } from './config';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/**
 * Simple health endpoint
 */
app.get('/health', (_, res) => {
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.send('Server is running 🚀');
});

/**
 * Serve static files
 */
if (process.env.NODE_ENV && process.env.NODE_ENV !== 'local') {
  const indexFile = path.join(
    path.join(__dirname, '../client/dist/index.html')
  );
  const indexHtml = fs
    .readFileSync(indexFile, { encoding: 'utf8' })
    .replace(
      /<script><!-- ENV --><\/script>/,
      `<script type="module">window.env=${JSON.stringify(webConfig)}</script>`
    );
  app.use(
    '/',
    express.static(path.join(__dirname, '../client/dist'), { index: false })
  );
  app.get(/^(?!\/monitor|\/api.*$).*/, (_, res) => {
    res.send(indexHtml);
  });
}

/**
 * Listen for traffic
 */
async function setup() {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} 🚀`);
  });
}

setup();
