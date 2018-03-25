var alldastuff = {
    "Subway": {
	"Sandwiches": {
	    "Black Forest Ham": 8.95,
	    "Chick and Bacon Ranch Melt": 7.75,
	    "Cold Cut Combo": 5.50,
	    "Italian B.M.T.": 6.75,
	    "Meatball Marinara": 5.50,
	    "Oven Roasted Chicken": 6.75,
	    "Roast Beef": 7.75,
	    "Rotisserie-Style Chicken": 977.35,
	    "Spicy Italian": 5.50,
	    "Steak and Cheese": 7.75,
	    "Subway Club": 7.75,
	    "Sweet Onion Chicken Teriyaki": 7.75,
	    "Classic Tuna": 6.75,
	    "Turkey Breast": 6.75,
	    "Veggie Delite": 5.50
	},
	"Extras": {
	    "deluxe": 2.00,
	    "extra_cheese": 1.50,
	    "bacon": 10.00,
	    "pepperoni": 1.50,
	    "guac": 25.00,
	    "double": 1.50
	}
    }
};

var total = 0;

function checkingstuff() {

    for (i in alldastuff["Subway"]["Extras"]) {
	//alert(document.getElementById(i).checked);
    	if (document.getElementById(i).checked) {
	    //alert("found" + i);
	//    alert(alldastuff["Subway"]["Extras"][i]);
    	    total = total + alldastuff["Subway"]["Extras"][i];
    	}
	//alert(i);
    }
    alert("Total price is " + total);
}

