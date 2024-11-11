import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  ref,
  child,
  get,
  set,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDGbaiaJvG3jq4ZVXwBdonyGLiqN1PAmCg",
  authDomain: "jsi18-a0048.firebaseapp.com",
  databaseURL: "https://jsi18-a0048-default-rtdb.firebaseio.com",
  projectId: "jsi18-a0048",
  storageBucket: "jsi18-a0048.firebasestorage.app",
  messagingSenderId: "604749649184",
  appId: "1:604749649184:web:9c9884aaecfdef14253345",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

let id = document.getElementById("id");
let firstName = document.getElementById("fName");
let lastName = document.getElementById("lName");
let dept = document.getElementById("dept");
let swim = document.getElementById("swim");

let addBtn = document.getElementById("add");
let retBtn = document.getElementById("ret");
let updBtn = document.getElementById("up");
let delBtn = document.getElementById("del");

function addData() {
  set(ref(db, "EmployeeSet/" + id.value), {
    id: Number(id.value),
    nameofEmployee: {
      firstName: firstName.value,
      lastName: lastName.value,
    },
    department: dept.value,
    swim: swim.value == "yes",
  })
    .then(() => {
      alert("Data Added Successfully");
    })
    .catch((error) => {
      alert("Unsuccessful");
      console.log(error);
    });
}

function retData() {
  set(ref(db, "EmployeeSet/" + id.value), {
    id: Number(id.value),
    nameofEmployee: {
      firstName: firstName.value,
      lastName: lastName.value,
    },
    department: dept.value,
    swim: swim.value == "yes",
  })
    .then(() => {
      alert("Data Added Successfully");
    })
    .catch((error) => {
      alert("Unsuccessful");
      console.log(error);
    });
}

function updateData() {
  update(ref(db, "EmployeeSet/" + id.value), {
    nameofEmployee: {
      firstName: firstName.value,
      lastName: lastName.value,
    },
    department: dept.value,
    swim: swim.value == "yes",
  })
    .then(() => {
      alert("Updated Successfully");
    })
    .catch((error) => {
      alert("Unsuccessful");
      console.log(error);
    });
}

function deleteData() {
  remove(ref(db, "EmployeeSet/" + id.value))
    .then(() => {
      alert("Deleted Successfully");
    })
    .catch((error) => {
      alert("Unsuccessful");
      console.log(error);
    });
}

addBtn.addEventListener("click", addData);
retBtn.addEventListener("click", retData);
updBtn.addEventListener("click", updateData);
delBtn.addEventListener("click", deleteData);
