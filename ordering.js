var alldastuff = {
    "Subway": {
	"Sandwiches": {
	    "forest": 8.95,
	    "chicken_bacon": 7.75,
	    "cold_cut": 5.50,
	    "bmt": 6.75,
	    "meatball": 5.50,
	    "roasted_c": 6.75,
	    "roast_beef": 7.75,
	    "rotisserie": 977.35,
	    "spicy": 5.50,
	    "steak": 7.75,
	    "subway": 7.75,
	    "sweet": 7.75,
	    "tuna": 6.75,
	    "turkey": 6.75,
	    "veggie": 5.50
	},
	"Extras": {
	    "deluxe": 2.00,
	    "extra_cheese": 1.50,
	    "bacon": 10.00,
	    //"pepperoni": 1.50,
	    "guac": 25.00,
	    "double": 1.50
	},
	"Bread": {
	    "Italian": 0,
	    "9-Grain": 0,
	    "Herbs": 0,
	    "Flatbread": 0,
	    "Monterey_Bread": 0,
	    "Multi": 0
	},
	"Toast": {
	    "not_toasted": 0,
	    "toasted": 0
	},
	"Cheese": {
	    "no_cheese": 0,
	    "cheddar": 0,
	    "Monterey_Cheese": 0,
	    "Pepper_Jack": 0,
	    "Provolone": 0,
	    "Shredded_Mozzarella": 0,
	    "American": 0
	},
	"Veggies": {
	    "lettuce": 0,
	    "spinach": 0,
	    "tomatoes": 0,
	    "cucumbers": 0,
	    "pickles": 0,
	    "green": 0,
	    "black": 0,
	    "red": 0,
	    "jalepenos": 0,
	    "banana": 0
	},
	"Condiments": {
	    "mayo": 0,
	    "light": 0,
	    "yellow": 0,
	    "honey": 0,
	    "dell": 0,
	    "chipotle": 0,
	    "sweet_onion": 0,
	    "ranch": 0,
	    "oil": 0,
	    "wine": 0,
	    "sriracha": 0,
	    "vinegarette": 0,
	    "caesar": 0,
	    "thousand": 0,
	    "cranberry": 0,
	    "salt": 0,
	    "pepper": 0,
	    "oregano": 0,
	    "grated": 0
	}
    }
};

var total = 0;
var strtotal = "";
var order = "";
var ordered = 0;
var shipcost = 5;

function checkingstuff() {
    //var shipcost = 5;

    for (i in alldastuff["Subway"]["Sandwiches"]) {
	if (document.getElementById(i).checked) {
	    total = total + alldastuff["Subway"]["Sandwiches"][i];
	}
    }
    //alert("before checking extras");
    checkingextras();
    //alert("before constructorder");
    constructOrder();
    //total = total + shipcost;

    if (total != 0) {
	strtotal = "$" + total;
	ordered = 1;
	alert("Your order: \n" + order + "\n\n" +
	      "Estimated Delivery cost:  $" + shipcost + "\n" +
              "-----------------------------------------------\n" +
	      "Your total price:  " + strtotal );
    }
    else { // total is 0
	alert("Be sure to select a main food option!")
    }
}

function chugOut() {
    if (ordered == 1) {
	total = total + shipcost;
	strtotal = "$" + total;
	alert("Your order: \n" + order + "\n\n" +
	      "Delivery cost:  $" + shipcost + "\n" +
              "-----------------------------------------------\n" +
	      "Your total price:  " + strtotal );
    }
    else {
	alert("You haven't added anything!");
    }
}

function checkingextras() {
    for (i in alldastuff["Subway"]["Extras"]) {
	if (document.getElementById(i).checked) {
	    total = total + alldastuff["Subway"]["Extras"][i];
    	}
    }
}

function constructOrder() {
    //alert("hi");
    var concating = "";
    var stuffs = document.getElementsByTagName("input");

  //  /*
    for (var i = 0; i < stuffs.length; i++) {
	var currid = stuffs[i].id;
	if (currid != "") {
	    //alert(currid);
	    //alert(stuffs[i].value);
	    var myobj = document.getElementById(currid);
	    //alert("before inner conditions: " + myobj.value);
	    if (myobj.checked) {
		for (k in alldastuff["Subway"]) {
		    //alert("type: " + k);
		    for (j in alldastuff["Subway"][k]) {
			//alert("other: " + j + " vs " + currid);
			if (currid == j) {
			    //alert(k + " " + myobj.value + "\n");
			    order = order + k + " " + myobj.value + ": $" + alldastuff["Subway"][k][currid] + "\n";
			}
		    }
		}
	    }
	}
    }// */
    /*
    for (var i = 0; i < stuffs.length; i++) {
	var currid = stuffs[i].id;
	if (currid != "") {
	    var myobj = document.getElementById(currid);
	    if (myobj.checked) {
		alert(myobj.value + "\n");
	    }
	}
    }
*/
}
	/*
	    if (document.getElementById(currid).checked) {

		alert(document.getElementById(currid).getClass() + ": " + document.getElementById(currid).value + '\n');
*/
