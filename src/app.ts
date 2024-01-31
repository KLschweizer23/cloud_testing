import express from 'express';

import personRouters from './routers/person_router';
import fileRouters from './routers/file_router';

const app = express();
app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static('public'));

app.use('/persons', personRouters);
app.use('/files', fileRouters);

export default app;