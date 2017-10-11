function listRestaurants(restaurants) {
	for (i in restaurants.list) {
		var show = restaurants.list[i];
		/*document.write("Restaurant Name: " + show.name + "<br>" + "Restaurant Type: " + show.type + "<br>" + "Established In: " + show.established + "<br>" + "<br>");*/
		$("#secondPara").append("Restaurant Name: " + show.name + "<br>" + "Restaurant Type: " + show.type + "<br>" + "Established In: " + show.established + "<br>" + "<br>");
	}
		/*var myJSON = JSON.stringify(restaurants.list);
		document.getElementById("secondPara").innerHTML = myJSON;*/
}

function restaurantListings() {
	return {
		"list" : [
			{
				"name" : "T.G.I. Friday's",
				"type" : "American/Casual Dining",
				"established" : 1965,
			},
			
			{
				"name" : "Applebee's",
				"type" : "American/Casual Dining",
				"established" : 1980,
			},
			
			{
				"name" : "Taco Bell",
				"type" : "Mexican-inspired/Fast-Food",
				"established" : 1962,
			},
			
			{
				"name" : "McDonald's",
				"type" : "American/Fast-Food",
				"established" : 1955,
			},
		
		]
	};
}

$(document).ready(function() {
	$("#firstPara").click(function() {
		$(this).hide();
		var restaurants = restaurantListings();
		listRestaurants(restaurants);
	});
});







