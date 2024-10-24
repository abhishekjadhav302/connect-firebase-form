const firebaseConfig = {
  apiKey: "AIzaSyCu83fLtRJE5jEIu0hP3mAiL_bW8k5vxxs",
  authDomain: "connect-firebase-form.firebaseapp.com",
  databaseURL: "https://connect-firebase-form-default-rtdb.firebaseio.com",
  projectId: "connect-firebase-form",
  storageBucket: "connect-firebase-form.appspot.com",
  messagingSenderId: "947355488873",
  appId: "1:947355488873:web:e89dc8ae6184f3aca448f8",
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var contactFormDB = firebase.database().ref("connect-firebase-form");

document
  .getElementById("connect-firebase")
  .addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var messageCont = getElementVal("msgContent");

  // console.log(name, emailid, messageCont);
  saveInfireDB(name, emailid, messageCont);

  //enable alert
  // .alert -- coz we use class in here
  document.querySelector(".alert").style.display = "block";

  //remove the alert message
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // for resetting the form
  document.getElementById("connect-firebase").reset();
}

const saveInfireDB = (name, emailid, messageCont) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    //can take any key name
    name: name,
    emailid: emailid,
    messageCont: messageCont,
  });
};

// i have created reuseable code for get id as a parameter from name, email and message
const getElementVal = (id) => {
  return document.getElementById(id).value;
};
