const express = require('express');
const router = express.Router();
module.exports = router;

router.post("/Entry/:emp_id",(req,res)=>{
    let id = req.params.emp_id ;
    let Query = `INSERT INTO employees_clock(Employee_id,Entry_time)`;
    Query += `SELECT Employee_id,CURRENT_TIMESTAMP FROM employees`;
    Query += ` WHERE Employee_id = ${id} AND NOT EXISTS (SELECT * FROM employees_clock WHERE Employee_id = ${id} AND Exit_time IS NULL)`;
    db_pool.query(Query,function (err,rows,fields,){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"OK",Last_Id:rows.insertId});
        }
    })
});
router.post("/Exit/:id",(req,res)=>{
    let Query = `UPDATE employees_clock `;
    Query += `SET Exit_time = CURRENT_TIMESTAMP WHERE Employee_id = ${req.params.id} AND Exit_time IS NULL`;
    db_pool.query(Query,function (err,rows,fields,){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"OK",Last_Id:rows.insertId});
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

router.get("/List/:id",(req, res) => {
    let id=req.params.id;
    let addQuery = `SELECT C.id, C.Employee_id, E.FirstName, E.LastName, C.Entry_time, C.Exit_time`;
    addQuery += ` FROM employees_clock C JOIN employees E`;
    addQuery += ` ON C.Employee_id = E.Employee_id`;
    if(id>0)addQuery += ` WHERE E.Employee_id = ${id}`;
    db_pool.query(addQuery,function (err,rows,fields){
        if (err) res.status(500).json({message: err});
        else res.status(200).json({rows:rows});
    })
});

