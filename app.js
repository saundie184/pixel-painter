// It boils down to this: A user selects a color and clicks on pixels to paint them with the selected color.
//
// Here's the order of steps that I would implement:
//
// Get 10 or so small divs on the screen
// Add an event listener to each so that when I click on a pixel it turns red
// Add a color palette div with 2 colors(red and purple)which allows the user
//to set the current "paintbrush" color instead of it always being set to red

// Add the rest of the standard rainbow colors to the color palette
// Add enough divs to fill up the entire screen
//------------

//Color Palette
// var palette = document.getElementsByClassName('row1');

document.getElementById('red').style['backgroundColor'] = '#C03546';
document.getElementById('orange').style['background-color'] = '#F26D5B';
document.getElementById('yellow').style['background-color'] = '#F6EA8C';
document.getElementById('purple').style['background-color'] = '#492540';
document.getElementById('pink').style['background-color'] = '#FF004D';
document.getElementById('lightGreen').style['background-color'] = '#79F8BB';
document.getElementById('seaFoam').style['background-color'] = '#60BEB3';
document.getElementById('turquoise').style['background-color'] = '#155674';
document.getElementById('marroon').style['background-color'] = '#9D0B28';
document.getElementById('indigo').style['background-color'] = '#942E88';
document.getElementById('white').style['background-color'] = 'white';

var resetBtn = document.querySelector('button');
//The color that is selected is show in this box:
var choosen = document.getElementsByClassName('active')[0] //plural returns an array

var brushcolor = '#C03546';
window.addEventListener('click', function(event) {
  // console.log(event.target);
  var itemClicked = event.target;

  if (itemClicked.className === 'square') {
    itemClicked.style['background-color'] = brushcolor;
  } else if (itemClicked.className === 'pal') {
    //this is where we update the choosen
    brushcolor = itemClicked.style['background-color'];
    choosen.style['background-color'] = brushcolor;
  }
});
//if this button is clicked, change all square elements background-color to white
resetBtn.addEventListener('click', function() {
  var canvas = document.getElementsByClassName('square');
  for (var i = 0; i < 840; i++) {
    canvas[i].style['background-color'] = 'white';
  }
});

//if event target class is square, set box BG color to brushcolor
//else if event target class is pal, set brushcolor to BG color




//-----

// Object.keys(box).forEach(function (elem, index) {
//   box[index].addEventListener('click', function(event) {
//     event.target.style['background-color'] = color
//   })
// });


//----



// function redPixels(){
//   for(var i = 0; i < num; i++){
//     box[i].addEventListener('click', function(){
//       box[i].style['background-color'] = 'red'
//     });
//   }
// }




//when there is a click in one div, apply the style to the next div clicked
// var canvas = document.getElementsByClassName('row2')
// console.log()

//set global variable that stores the mouste

//create the color variable to update
//the pixel choosen


// function paintbrush(){
//   paletteRed.addEventListener('click', function(event){
//     event.target.style['background-color'] = 'red';
//   });
//
// }





//
// First test; Add an event listener to listen when I click
// var row2 = document.getElementById('rowTwo');
//
// row2.addEventListener('click', function(event){
//   event.target.style['background-color'] = 'red';
// });
