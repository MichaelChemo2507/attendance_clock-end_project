let tableTbody = document.getElementsByTagName("tbody")[0];
let listArr = [];

fetchText();
addRow();


async function fetchText() {
    let response = await fetch("http://localhost:3507/Employees/List");
    let Data = await response.json();
    listArr = Data.rows;
    addRow();
}
function addRow() {
    let rows = "";
    for (let i of listArr) {

        rows += "<tr>";
        rows += `<td id="update" onclick=updateLine(${i.Employee_id})><input form="empForm" type="submit" value="Edit"> </td>`;
        rows += `<td>${i.Employee_id }</td>`;
        rows += `<td>${i.FirstName}</td>`;
        rows += `<td>${i.LastName}</td>`;
        rows += `<td onclick="deleteLine(${i.Employee_id})"> Delete </td>`;
        rows += "</tr>";
    }
    tableTbody.innerHTML = rows;
}
async function deleteLine(index) {
    let response = await fetch(`http://localhost:3507/Employees/Delete/${index}`,{
        method:'DELETE',
    });
    fetchText()
}
function updateLine(index) {
    document.getElementById("empForm").action = `http://localhost:3507/Employees/Update/${index}`;
    fetchText();
}

