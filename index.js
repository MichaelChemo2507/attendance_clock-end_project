const express = require('express');
const port = 3507;
const app = express();
app.use(express.json());

const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

let db_M = require('./database');
global.db_pool = db_M.pool;

const emp_rtr = require('./routers/emp_rout');
app.use('/Employees',emp_rtr);
const clock_rtr = require('./routers/clock_rout');
app.use('/Clock',clock_rtr);
const front_rtr = require('./routers/FE_R');
app.use('/Front',front_rtr);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "css")));
app.use(express.static(path.join(__dirname, "js")));
app.set("view engine","ejs");

app.listen(port, () => {
    console.log(` employees - http://localhost:${port}/front/Emp\n clock - http://localhost:${port}/front/shift\n table - http://localhost:${port}/front/table`);
});