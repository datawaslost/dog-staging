
import foodList from '/js/foodList.json' assert {type: "json"};

import alternativeAndMisspellings from '/js/alternativeAndMisspellings.json' assert {type: "json"};

// defines html elements for click events and creates a handler for the listener event 
let searchBar = document.getElementById("user-search");
let searchButton = document.getElementById("search-btn");
searchBar.addEventListener('enter', search, false);
searchButton.addEventListener('click', search, false);
let popUp = document.getElementById("not-found-popup");


// Listens for Enter key press of search bar and click of search icon
function search(event) {

	console.log(foodList)
    let foodBeingSearched = searchBar.value.toLowerCase();
    event.preventDefault();
	
	// Checks if foodBeingSearched matches foods from foodList.json
    if (alternativeAndMisspellings[foodBeingSearched]) { 
		console.log('Valid search');
		window.location.href = "http://localhost:1313/dog/foods/" + alternativeAndMisspellings[foodBeingSearched];

	// Hides valid search card and shows invalid card in html, display a message with food that could not be food.
	} else {
		console.log('Invalid search');
		
		popUp.style.display = 'initial';
		setTimeout(function() {
			popUp.style.display = 'none';
		}, 2500);
		
	}
};
