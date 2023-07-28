// changng CSS with JS
function colorChangea() {
    document.querySelector("#changeCSSjs").style.backgroundColor='red'
}; // creates a function that changes the background color of the element that is called to a different value.

var btna = document.querySelector('#red');
// creates a new variable that is equal to the element with an id of red. Thus, making them interchangeable.

btna.onclick = colorChangea;
// executes function

function colorChangeb() {
    document.querySelector("#changeCSSjs").style.backgroundColor='blue'
};
var btnb = document.querySelector('#blue');
btnb.onclick = colorChangeb;