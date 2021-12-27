let addName = document.getElementById("name");
let addMail = document.getElementById("mail");
let addPass = document.getElementById("pass");
let addBtn = document.getElementById("add__btn");

function admin() {
   let userName = document.getElementById("name").value;
   let userPass = document.getElementById("pass").value;

   if (userName != "" && userPass != "") {
      localStorage.setItem("userName", userName);
      localStorage.setItem("userPass", userPass);
   }
}

addBtn.addEventListener("click", (e) => {
   if (addName.value == "" || addMail.value == "" || addPass.value == "") {
      return alert("Oops! It's empty here(");
   }
   else {
      alert(`Hello ${addName.value}`);
   }
   let notes = localStorage.getItem("notes");
   if (notes == null) {
      noteObj = [];
   } else {
      noteObj = JSON.parse(notes);
   }
   let myObj = {
      name: addName.value,
      mail: addMail.value,
      password: addPass.value
   }

   noteObj.push(myObj);

   localStorage.setItem("notes", JSON.stringify(noteObj));
   addMail.value = "";
   addName.value = "";
   addPass.value = "";

   showNotes();
})
//show
function showNotes() {
   let notes = localStorage.getItem("notes");
   if (notes == null) {
      noteObj = [];
   } else {
      noteObj = JSON.parse(notes);
   }

   let html = "";
   noteObj.forEach(function (element, index) {
      html += `
        <div id="note">
	<p class="note-counter">User ${index + 1}</p>
    <h3 class="note__title">Name: ${element.name}</h3>
    <h3 class="note__title">Mail: ${element.mail}</h3>
    <h3 class="note__title">Password: ${element.password}</h3>

	<button id="${index}" onclick="deleteNote(this.id)" class="note__btn">Delete</button> <button id="${index}" onclick="editNote(this.id)" class="note__btn edit__btn">Edit</button>
			<hr noshade="">		
				</div>
        `;


   });
   let noteElm = document.getElementById("notes");
   if (noteObj.length != 0) {
      noteElm.innerHTML = html;
   } else {
      noteElm.innerHTML = "Empty(";
   }
}
//delete
function deleteNote(index) {
   let confirmDel = confirm("You are deleting this person! Are you sure?");
   let notes = localStorage.getItem("notes");

   if (confirmDel == true) {
      let notes = localStorage.getItem("notes");
      if (notes == null) {
         noteObj = [];
      } else {
         noteObj = JSON.parse(notes);
      }
      noteObj.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(noteObj));
      showNotes();
   }
}

//edit
function editNote(index) {
   let notes = localStorage.getItem("notes");
   if (notes == null) {
      noteObj = [];
   } else {
      noteObj = JSON.parse(notes);
   }

   noteObj.findIndex((element, index) => {
      addName.value = element.name;
      addMail.value = element.mail;
      addPass.value = element.password;
   })
   noteObj.splice(index, 1);
   localStorage.setItem("notes", JSON.stringify(noteObj));
   showNotes();
}
showNotes();


function sign() {
   $("#mail").css({ "display": "none" });
   $("a").css({ "display": "none" });
   $("button").css({ "display": "none" });

   document.querySelector('h1').innerHTML = "Sign in";

   const productHTML = `
   <button id="add__btn" onclick="admin()"><a href="../Page1/index1.html">Submit</a></button><br>
   <a href="#" id="sign" onclick="reg()">Registration</a>`;

   document.getElementById("last").insertAdjacentHTML('afterbegin', productHTML);
}

function reg() {
   $("#mail").css({ "display": "block" });
   $("a").css({ "display": "none" });
   $("button").css({ "display": "none" });
   document.querySelector('h1').innerHTML = "Registration";

   const productHTML = `
   <button id="add__btn" onclick="admin()">Submit</button><br>
   <a href="#" onclick="sign()">sign in</a>`;

   document.getElementById("last").insertAdjacentHTML('afterbegin', productHTML);
}

//Проверка админа
if (localStorage.getItem('userName') == "Nurdaulet" && localStorage.getItem('userPass') == "021025") {
   alert("Hello master");
   $("section").css({ "display": "block" });
}