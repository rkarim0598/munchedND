/*
document.getElementById("Login").addEventListener("click", function() {
  login();
});

document.getElementById("Create").addEventListener("click", function() {
  checkPassword();
});
*/
function login() { // gets value from netID and pw textbox and checks if valid
  var netID = document.getElementById("netID").value;
  var pw = document.getElementById("pw").value;
  checkUser(netID, pw);
}


function checkUser(netID, pw) { // check if user exists/password is correct
  if (netID in JSON.parse(localStorage.getItem("InsecureAccounts"))) {
    if (JSON.parse(localStorage.getItem("InsecureAccounts"))[netID]["password"] == pw) {
			localStorage.LoggedIn = "TRUE";
			localStorage.User = netID;
			location.href = "index.html";
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
      if (!(id in JSON.parse(localStorage.getItem("InsecureAccounts")))) {
				var accounts = JSON.parse(localStorage.getItem("InsecureAccounts"));
				accounts[id] = {"password":pass1,
										"email":email,
										"phone":phone};
				localStorage.InsecureAccounts = JSON.stringify(accounts);
				alert("Account created!");
			}
			else {alert("netID " + id + " already has an account");}
    } else {
      alert("Passwords don't match");
    }
  } else if (pass1.length < 6) {
		alert("Please choose a password 6 characters long.");
	} else {
    alert("Missing a field.")
  }
}
