import express from 'express';
import path from 'path';

import routes from './routes';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});