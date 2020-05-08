"use strict"
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeName = document.querySelector('#coffee-name');


function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}
function autoFill() {
    coffeeName = document.querySelector('#coffee-name');
    console.log(coffeeName.value);
    updateCoffees();
}
function changeRoast() {
    roastSelection = document.querySelector('#roast-selection');
    updateCoffees();
}
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i += 1) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
function updateCoffees() {
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    var selectedName = coffeeName.value;
    coffees.forEach(function(coffee) {
        let coffeeLower = coffee.name.toLowerCase();
        let inputLower = selectedName.toLowerCase();
        if (coffee.roast === selectedRoast && coffeeLower.includes(inputLower)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees);