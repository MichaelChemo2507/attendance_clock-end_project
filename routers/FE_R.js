const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/Emp',(req,res)=> {
    res.render("main_emp");
});