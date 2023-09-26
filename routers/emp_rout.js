const express = require('express');
const router = express.Router();
module.exports = router;

router.post("/Add",(req,res)=>{
    let {FirstName,	LastName} = req.body;
    let Query = `INSERT INTO employees(FirstName,LastName) `;
    Query += `VALUES('${FirstName}','${LastName}')`;
    db_pool.query(Query,function (err,rows,fields,){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.redirect('http://localhost:3507/Front/Emp');
        }
    })
});
router.post("/Update/:id",(req ,res)=>{
    let {FirstName,LastName} = req.body;

    let Query = `UPDATE employees SET FirstName = '${FirstName}', `;
        Query += `LastName = '${LastName}' WHERE Employee_id = ${req.params.id}`;
    db_pool.query(Query,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.redirect('http://localhost:3507/Front/Emp');
        }
    })
})
router.delete("/Delete/:id",(req, res) => {
    let query = `DELETE FROM employees WHERE Employee_id = ${req.params.id}`;
    db_pool.query(query,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"OK"});
        }
    })

});

router.get("/List",(req, res) => {
    let addQuery = `SELECT * FROM employees `;
    db_pool.query(addQuery,function (err,rows,fields){
        if (err) res.status(500).json({message: err});
        else res.status(200).json({rows:rows});
    })
});