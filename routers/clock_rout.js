const express = require('express');
const router = express.Router();
module.exports = router;

router.post("/Entry/:emp_id",(req,res)=>{
    let {day,Entry_time} = req.body;
    let Query = `INSERT INTO employees_clock(Employee_id,day,Entry_time) `;
    Query += `VALUES('${req.params.emp_id}','${day}','${Entry_time}')`;
    db_pool.query(Query,function (err,rows,fields,){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"OK",Last_Id:rows.insertId});
        }
    })
});
router.post("/Exit/:id",(req,res)=>{
    let {Exit_time} = req.body;
    let Query = `UPDATE employees_clock `;
    Query += `SET Exit_time = '${Exit_time}' WHERE id = ${req.params.id}`;
    db_pool.query(Query,function (err,rows,fields,){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"OK"});
        }
    })
});

router.delete("/Delete/:id",(req,res)=>{
    let Query = `DELETE FROM employees_clock  WHERE id = ${req.params.id}`;
    db_pool.query(Query,function (err,rows,fields,){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"OK"});
        }
    })
});
router.get("/List",(req, res) => {
    let addQuery = `SELECT * FROM employees_clock `;
    db_pool.query(addQuery,function (err,rows,fields){
        if (err) res.status(500).json({message: err});
        else res.status(200).json({rows:rows});
    })
});
