<script type="text/javascript" src="index.js"></script>

var loggedin;
var user = "rmcinty3";
var obj = {
  "rmcinty3": {
    "password": "password",
    "email": "rmcinty3@nd.edu",
    "phone": "4062493755"
  },
  "rkarim": {
    "password": "6balls",
    "email": "rkarim@nd.edu",
    "phone": "2194404899"
  },
  "cwall": {
    "password": "neptune",
    "email": "cwall@nd.edu",
    "phone": "7326931566"
  },
  "kdigiorn": {
    "password": "notdelivery",
    "email": "kdigiorn@nd.edu",
    "phone": "2392167016"
  }
};
document.getElementById("Login").addEventListener("click", function() {
  login();
});

document.getElementById("Create").addEventListener("click", function() {
  checkPassword();
});

function login() { // gets value from netID and pw textbox and checks if valid
  var netID = document.getElementById("netID").value;
  var pw = document.getElementById("pw").value;
  checkUser(netID, pw);
}


function checkUser(netID, pw) { // check if user exists/password is correct
  if (netID in obj) {
    if (obj[netID]["password"] == pw) {
      alert("You are logged in.");
			user = obj[netID];
      loggedin = true;
    } else {
      alert("Incorrect netID or password 1");
    }
  } else {
    alert("Incorrect netID or password 2");
  }
}

function checkPassword() { // check if two passwords match
  // if (document.getElementById("newnetID")
  var id = document.getElementById("newnetid").value;
  var pass1 = document.getElementById("pass1").value;
  var pass2 = document.getElementById("pass2").value;
  var email = document.getElementById("newemail").value;
  var phone = document.getElementById("newphone").value;

  if (id != "" && email != "" && phone != "" && pass1.length >= 6) {
    if (pass1 == pass2) {
      obj[id] = pass1;
    } else {
      alert("Passwords don't match");
    }
  } else {
    alert("Please fill in netID field.")
  }
}
