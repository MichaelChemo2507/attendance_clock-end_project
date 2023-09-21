const express = require('express');
const port = 3507;
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: false}));

let db_M = require('./database');
global.db_pool = db_M.pool;

const emp_rtr = require('./routers/emp_rout');
app.use('/Employees', emp_rtr);


app.listen(port, () => {
    console.log(`Now listening on port http://localhost:${port}`);
});