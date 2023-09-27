let EmpNames = document.getElementById("empNames"),
entryBtn = document.getElementsByTagName("button")[0],
exitBtn = document.getElementsByTagName("button")[1];


getEmpId();

entryBtn.addEventListener("click", async ()=>{
const date = new Date();
    let currentDate =   `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    let response = await fetch(`http://localhost:3507/Clock/Entry/${EmpNames.value}`,{
        method:'POST',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify({
            Entry_time:currentDate
        })
    })
})

exitBtn.addEventListener("click", async ()=>{
    const date = new Date();
    let currentDate =   `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    let response = await fetch(`http://localhost:3507/Clock/Exit/${EmpNames.value}`,{
        method:'POST',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify({
            Exit_time:currentDate
        })
    })
})



async function getEmpId(){
    let response = await fetch("http://localhost:3507/Employees/List");
    let data = await response.json();
    let NameList = "";
    for (const item of data.rows) {
        NameList+=`<option value="${item.Employee_id}">${item.FirstName} ${item.LastName}</option>`;
    }
    EmpNames.innerHTML = NameList ;
}