const express = require('express');
const port = 3507;
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: false}));


app.listen(port, () => {
    console.log(`Now listening on port http://localhost:${port}`);
});