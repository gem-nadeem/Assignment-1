const HEADING = ["Name", "Age", "DOB", "Email", "Company"];
const details = [
    {"Name": "Nadeem", "Age": "22", "DOB": "02/05/1999", "Email": "nadeem@geminisolutions.com", "Company": "Gemini Solutions" },
    {"Name": "Akash", "Age": "28", "DOB": "12/10/1994", "Email": "akash@geminisolutions.com", "Company": "Gemini Solutions" },
    {"Name": "Vikas", "Age": "24", "DOB": "02/10/1998", "Email": "vikas@geminisolutions.com", "Company": "Gemini Solutions" },
    {"Name": "Zain", "Age": "24", "DOB": "20/12/1998", "Email": "zain@geminisolutions.com", "Company": "Gemini Solutions" },
    {"Name": "Joy", "Age": "32", "DOB": "06/05/1990", "Email": "joy@geminisolutions.com", "Company": "Gemini Solutions" }
];

function createTable(data){
    var table = document.createElement("table");
    var tbhead = document.createElement("thead");
    var tbbody = document.createElement("tbody");
    var tbrow = document.createElement("tr");
     table.style.border="1px solid black";
    table.style.width="100%";
    table.style.borderCollapse="collapse";
    HEADING.forEach((elements) => {
        let th = document.createElement("th");
        th.appendChild(document.createTextNode(elements));
        th.style.padding="10px";
        th.style.border="1px solid black";
        th.style.textAlign = "center";
        tbrow.appendChild(th);
        //th.style.backgroundColor = "";
    });
    tbhead.appendChild(tbrow);
    table.appendChild(tbhead);

    data.forEach((element) => {
        let tr = document.createElement("tr");
        for(let el in element){
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(element[el]));
            td.style.padding="10px";
            td.style.border="1px solid black";
            td.style.textAlign = "center";
            tr.appendChild(td);
            
            
        }
        
        tbbody.appendChild(tr);
    });
    table.appendChild(tbbody);
    return table;
}

window.onload=function(){
    document.getElementById("Table").appendChild(createTable(details));
    document.getElementById("Table").style.backgroundColor="teal";
    document.getElementById("Table").style.margin="100px";
    
  
}
