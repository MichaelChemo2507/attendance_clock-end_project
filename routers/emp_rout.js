const express = require('express');
const router = express.Router();
module.exports = router;

router.post("/Add",(req,res)=>{
    let {Employee_name} = req.body;
    let Query = `INSERT INTO employees(Employee_name) `;
    Query += `VALUES('${Employee_name}')`;
    db_pool.query(Query,function (err,rows,fields,){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"OK",Last_Id:rows.insertId});
        }
    })
});
router.post("/Update/:id",(req ,res)=>{
    let {Employee_name} = req.body;

    let Query = `UPDATE employees SET Employee_name = '${Employee_name}' WHERE Employee_id = ${req.params.id}`;
    db_pool.query(Query,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"OK"});
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