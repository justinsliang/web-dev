// window.onload = function () {
//     document.querySelector('h1').onmouseover = onMouseOver;
//     document.querySelector('h1').onmouseout = onMouseOut;
//     console.log(document.querySelectorAll('h1'));
//     for (let i of document.querySelectorAll('h1')) {
//         i.onmouseover = h1OnMouseOver;
//         i.onmouseout = h1OnMouseOut;
//     }
// }
// function onMouseOver() {
//     this.innerHTML = "HEY THERE LITTLE BOI";
//     this.style.color = "black";
//     this.style.backgroundColor = "white";
// }
// function onMouseOut() {
//     this.innerHTML = "Putin: Russia's Choice";
//     this.style.color = "rgb(0, 95, 48)";
//     this.style.backgroundColor = "rgb(255, 0, 0)";
// }


$(document).ready(function (){
    $('h1').hover(h1OnMouseEnter, h1OnMouseOut);
});



function h1OnMouseEnter() {
    $(this).css({ "background-color": "yellow", "color": "rgb(115, 255, 0)" });
    $(this).html( "HEY LITTLE BOIS");
}
function h1OnMouseOut() {
    $(this).css({ "background-color": "rgb(255, 0, 0", "color": "black" });
    $(this).html( "Putin: Russia's Choice" );
}