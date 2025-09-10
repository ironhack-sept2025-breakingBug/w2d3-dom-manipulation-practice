
/****************************/
/* Find elements in the DOM */
/* **************************/


// by Id
const mainTitle = document.getElementById("main-title")
mainTitle.innerText = 'BreakingBug e-commerce'


// by class name
const infoCollection = document.getElementsByClassName("info")
const infoElementsArray = [...infoCollection]; // convert html collection to an array

infoElementsArray.forEach(function(element, i, arr){
    element.innerHTML = 'this is the new text'
    element.style.color = 'blue'
})


// by tag name
const allParagraphsHtmlCollection = document.getElementsByTagName("p")


// by css selectors....
//
// querySelector()
// querySelectorAll()

const first = document.querySelector("header h2")
const all = document.querySelectorAll("header h2") // returns a NodeList

all.forEach((elm, i, arr) => {
    elm.innerText = 'This is the new subtitle'
    elm.style.color = 'purple'
})


//
// context: document vs. element
//

const productsElm = document.getElementById("products")
const allParagraphsInProductsElm = productsElm.getElementsByTagName("p")

const allParagraphsInProductsElm_Alternative = document.querySelectorAll("#products p")



/**************/
/* Properties */
/**************/

// Read/Modify text content --> elm.innerText
const linkElm = document.getElementById("my-link")
linkElm.innerText = 'Learn more about us'


// Read/Modify html contents --> elm.innerHTML
const pikachuElm = document.getElementById("pikachu")
pikachuElm.innerHTML = `
    <div>
        <p>one<p>
        <p>two<p>
        <p>
            <a href="#">click here for more info</a>
        <p>
    </div>
`


// Read/Modify CSS --> elm.style
mainTitle.style.color = 'green' 
mainTitle.style.background = 'orange' 
mainTitle.style.padding = '20px' 
mainTitle.style.borderRadius = '20px';

// Read/Modify the id --> elm.id
// mainTitle.id = "this-is-the-new-id"

// Read/Modify class --> elm.className
// mainTitle.className = "cool-title header"


//
// elm.classList (provides methods to access class names)
//
// - elm.classList.remove("foo");
// - elm.classList.add("new-class")
// - elm.classList.toggle("active")

mainTitle.classList.add("cool-title")
mainTitle.classList.toggle("active")




/**************/
/* Attributes */
/**************/

// get: elm.getAttribute(attributeName);
const result = linkElm.getAttribute("href")
console.log(result);

// modify or create: elm.setAttribute(name, value);
linkElm.setAttribute("href", 'https://ironhack.com')
linkElm.setAttribute("target", '_blank')



/*********************/
/* Create a DOM node */
/*********************/

// step1: create the element
const newImg = document.createElement("img")

// step2: add content or modify (ex. innerHTML...)
newImg.setAttribute("src", "./images/pikachu.jpg")
newImg.setAttribute("alt", "pikachu smiling")

//step3: append to the dom: `parentElm.appendChild()`
const parentElm = document.getElementById("pikachu")
parentElm.appendChild(newImg)




/**************/
/**************/
/*   Events   */
/**************/
/**************/


/*

examples of events
  - mouse events (e.g. click, mouseover...)
  - keyboard events (e.g. keydown, keypress, keyup)
  - Document (DOMContentLoaded, ...)
  - Full list: https://www.w3schools.com/jsref/dom_obj_event.asp

*/

//
// elm.addEventListener(typeOfEvent, code)
//

const btn1 = document.getElementById("button-1")

btn1.addEventListener("click", () => {
    console.log("hurray, user clicked on button 1!")
})


//
// Append a paragraph every time the user clicks on a button
//

const btn3 = document.getElementById("add-paragraph")

btn3.addEventListener("click", () => {

    // step1: create the element
    const newP = document.createElement("p")

    // step2: add content or modify (ex. innerHTML...)
    newP.innerText = "This paragraph was created dynamically..."

    //step3: append to the dom: `parentElm.appendChild()`
    const container = document.getElementById("box-3")
    container.appendChild(newP)
})


//
// Detect spacebar + "event" object
//

document.addEventListener("keydown", (event) => {
    if(event.code === "Space") {
        console.log("user pressed space bar")
    } else {
        console.log("user pressed some other key...")
    }
    
})




/*************************************/
/* Attach event to multiple elements */
/*************************************/

const allBtn = document.querySelectorAll(".btn")

allBtn.forEach((element, i, arr) => {
    element.addEventListener("click", () => {
        console.log("click on a generic button...")
    })
})

