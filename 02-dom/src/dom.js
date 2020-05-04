// What do I need to do?

// Using css create a page that looks like the page shown. It can look better but no worse
// use “border: solid;” on the <div> so you can see where the <div> is
// add a click event to the <div> using a “addEventListener” in the JavaScript
// show on the console the parameter passed to the event listener 
    // Don't know how to do this
// notice that depending on where you click on the <div> you get different targets 
// add an event on the show button that displays all the “Children” of the <ol> tag
// add an event on the add button that will add a <li> tag to the end of the list
// play lots; try adding to the start; try a delete

// add a click event to the <div> using a “addEventListener” in the JavaScript

document.getElementById("dom").addEventListener("click", myfunction);

function myfunction () {
    console.log("Hi");
}

// add an event on the show button that displays all the “Children” of the <ol> tag

document.getElementById("showChild").addEventListener("click", showChildren)

function showChildren () {
    console.log(document.getElementById("showChild").childNodes);

}

