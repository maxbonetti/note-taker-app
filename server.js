//~~~~~Globals~~~~~//
const express = require('express');
const path = require('path');
const apiRoutes = require('./Develop/routes/apiRoutes');
const htmlRoutes = require('./Develop/routes/htmlRoutes');

const app = express();
const PORT = 3001;
//~~~~~MiddleWare~~~~~//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

//~~~~~Listen to PORT~~~~~//
app.listen(PORT, () => console.log(`Server is operating at http://localhost:${PORT}`));