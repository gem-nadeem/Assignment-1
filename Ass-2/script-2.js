showData();
  const forms = document.getElementById("myForm");
  forms.addEventListener('submit', (e) => {
    e.preventDefault();
    validation();
  });
  function validation() {
    var returnval = true;
    
    var nameVal = document.getElementById("name").value;
    var namelen = nameVal.length;
    var emailVal = document.getElementById("email").value;
    var mobnumber = document.getElementById("mno").value;
    var numberLen = mobnumber.length;
    // pattern for check aplhabates and spaces /^[A-Za-z\s]*$/
    var namePattern = /^[A-Za-z\s]*$/;
    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    
    /*  if (namePattern.test(nameVal)) {
      //alert("Please enter only letters and space!");
     // returnval = true;
    }
    else {
      alert("Please enter letters and space only in name!");
       returnval = false;
    }
    
    if(!(emailPattern.test(emailVal))){
      alert("Please enter a valid email address!");
      returnval = false;
    }
    if (numberLen != 10) {
      alert("Number should be of 10 digits!");
      returnval = false;
    }

   if(returnval == true){
     saveData();
   } */

   if(!(namePattern.test(nameVal)) &&  !(emailPattern.test(emailVal))  &&  numberLen != 10){
          alert("Please enter proper input!");
        returnval = false;
   }
   else if(!(namePattern.test(nameVal)) && !(emailPattern.test(emailVal)) ){
         alert("Please enter letters and space for name and proper email!");
           returnval = false;
   }
   else if(!(namePattern.test(nameVal)) && numberLen != 10){
    alert("Please enter letters and space for name and number should be 10 digits!");
           returnval = false;
   }
   else if (!(emailPattern.test(emailVal)) && numberLen != 10 ){
       
    alert("Please enter proper email and number should be 10 digits!");
           returnval = false;
   }
   else if(!(namePattern.test(nameVal))) {
        alert("Please enter only letters and space!");
         returnval = true;
    }
    else if(!(emailPattern.test(emailVal))){
      alert("Please enter a valid email address!");
      returnval = false;
    }
    else if(numberLen != 10) {
      alert("Number should be of 10 digits!");
      returnval = false;
    }
     
   if(returnval == true){
     saveData();
    // alert("Successfully data added!");
   }

}
  function saveData() {
    let name, email, mno;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;

    mno = document.getElementById("mno").value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

    user_records.push({
      "name": name,
      "email": email,
      "mno": mno
    })
    localStorage.setItem("users", JSON.stringify(user_records));

    showData();
  }

  function showData() {
    document.getElementById("showUsers").innerHTML = "";
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records) {
      for (let i = 0; i < user_records.length; i++) {
        let addDiv = document.createElement('div');
        addDiv.className = "row";
        addDiv.innerHTML = '  <div class="col-sm-4" style="padding: 10px;">' + user_records[i].name + '</div><div class="col-sm-4" style="padding: 10px;">' + user_records[i].email + '</div><div class="col-sm-4" style="padding: 10px;">' + user_records[i].mno + '</div>';
        document.getElementById("showUsers").appendChild(addDiv);

      }
    }
  }