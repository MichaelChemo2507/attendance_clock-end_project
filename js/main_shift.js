let EmpNames = document.getElementById("empNames"),
entryBtn = document.getElementsByTagName("button")[0],
exitBtn = document.getElementsByTagName("button")[1];


getEmpId();

entryBtn.addEventListener("click", async ()=>{
  let response = await fetch(`http://localhost:3507/Clock/Entry/${EmpNames.value}`,{
        method:'POST'
    })
    let data = await response.json();
  if (data.Last_Id > 0) alert('start a shift')
  else if (data.Last_Id === 0) alert('you\'r in the system')
})

exitBtn.addEventListener("click", async ()=>{
    let response = await fetch(`http://localhost:3507/Clock/Exit/${EmpNames.value}`,{
        method:'POST'
    })
    alert('you\'r not in the system')
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