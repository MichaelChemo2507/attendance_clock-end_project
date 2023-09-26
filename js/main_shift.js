let EmpNames = document.getElementById("empNames"),
entryBtn = document.getElementsByTagName("button")[0],
exitBtn = document.getElementsByTagName("button")[1];

getEmpId();

entryBtn.addEventListener("click", async ()=>{
    let response = await fetch(`http://localhost:3507/Clock/Entry/${EmpNames.value}`,{
        method:'POST',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify({
        })
    })
})
async function getEmpId(){
    let response = await fetch("http://localhost:3507/Employees/List");
    let data = await response.json();
    let NameList = "";
    for (const item of data) {
        NameList+=`<option value="${item.Employee_id}">${item.FirstName} ${item.LastName}</option>`;
    }
    EmpNames.innerHTML = NameList ;
}