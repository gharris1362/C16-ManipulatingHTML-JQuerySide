$("body").ready(function() {

//STEP 1
let step1Div = $("<div></div>")
let btn = $("<button>Click Here For nice message</button>")
btn.click(function() {
    alert("nice")
})

step1Div.append(btn)
$("body").append(step1Div)

//STEP 2
let step2Div = $("<div></div>")


let btn2 = $("<button>Say Message</button>");
let text = $("<textarea></textarea>")

step2Div.append(text)
step2Div.append(btn2)

btn2.click(function() {
    alert(text.val())
})


$("body").append(step2Div)

//STEP 3
let step3Div = $("<div></div>")
step3Div.css({
    "height": "400px",
    "width": "400px",
    // "border": "1px solid black"
})

let img = $("<img src='./garfield.png'></img>")
img.css({
    "height":"400px",
    "width":"2000px",

})

step3Div.mouseover(function() {
    for(i = 0; i < 10; i++) {
    step3Div.append(img)
    }
})

step3Div.mouseout(function() {
    img.remove()
})


$("body").append(step3Div)



//STEP 4
let newText = $("<p>Golly gosh i sure do hate Mondays</p>")
newText.click(function() {
   
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let rgbCol = `rgb(${r},${g},${b})`
       

    newText.css({
        "color": rgbCol
    })
})
$("body").append(newText)

//STEP 5
let step5button = $("<button>Say My Name</button>");
let step5Div = $("<div></div>")
step5button.click(function() {
    let span = $("<span>Garfield</span>");
    step5Div.append(span)

})

$("body").append(step5button)
$("body").append(step5Div)


//STEP 6
friendArr = ['Garfield', 'John', "Odie", "Nurmel", "Samantha", "Steve", "steve2", "Theresa", "Rogerliz"]

let step6Btn = $("<button>Garfield</button>")
let ul = $("<ul></ul>");
$("body").append(step6Btn)
$("body").append(ul)


let counter = 0;


step6Btn.click(function() {
    if (counter < friendArr.length) {
let li = $("<li>" + friendArr[counter] + "</li>")
ul.append(li)
counter++
    } else {
        alert("no garfs left")
    }
})

})