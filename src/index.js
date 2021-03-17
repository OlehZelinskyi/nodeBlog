import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import router from './routes/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const { PORT, HOST } = process.env;

const app = express();
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

app.listen(parseInt(PORT, 10), HOST, () => console.log(`App is running at ${HOST}:${PORT}`));
