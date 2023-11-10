import express from 'express';
import cors from 'cors';

import connections from './database/connections.js';
import routes from './routes/routes.js';
import bodyParser from 'body-parser';




const app = express();

connections();

app.use(cors());

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes);


const PORT = 8000;
app.listen(PORT, () => {console.log("Server running successfully on PORT: ", PORT)})