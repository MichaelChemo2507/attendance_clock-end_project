let EmpNames = document.getElementById("empNames"),
   tableTbody = document.getElementsByTagName("tbody")[0];
getEmpId();
fetchAll();
let clockData=[];


EmpNames.addEventListener("input",sortFetch);
async function sortFetch(){
    let clockRes = await fetch(`http://localhost:3507/Clock/List/${EmpNames.value}`);
    let data = await clockRes.json();
    clockData = data.rows;
    addRow();
}

function addRow() {
    let rows = "";
    for (let i of clockData) {
    console.log(i.id);
        rows += "<tr>";
        rows += `<td>${i.Employee_id }</td>`;
        rows += `<td>${FormatDate(i.Exit_time)}</td>`;
        rows += `<td>${FormatDate(i.Entry_time)}</td>`;
        rows += `<td>${i.LastName}</td>`;
        rows += `<td>${i.FirstName}</td>`;
        rows += `<td onclick="deleteLine(${i.id})"> Delete </td>`;
        rows += "</tr>";
    }
    tableTbody.innerHTML = rows;
}
function FormatDate(date) {
    let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
    return (date === null) ? null : new Date(date).toLocaleDateString('en-US', options);
}
async function fetchAll(){
    let response = await fetch(`http://localhost:3507/Clock/List/0`)
    let data = await response.json();
    clockData = data.rows;
    addRow();
}
async function deleteLine(index) {
    let response = await fetch(`http://localhost:3507/Clock/Delete/${index}`,{
        method:'DELETE',
    });
    sortFetch();
}
async function getEmpId(){
    let response = await fetch("http://localhost:3507/Employees/List");
    let data = await response.json();
    let NameList = `<option value="0"> all employees </option>`;
    for (const item of data.rows) {
        NameList+=`<option value="${item.Employee_id}">${item.FirstName} ${item.LastName}</option>`;
    }
    EmpNames.innerHTML = NameList ;
}