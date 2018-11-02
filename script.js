//https://github.com/karbassi/idx-528/tree/master/week-09/assignment

/*
The following tasks do not need to be done in order. I will review the final file.

The final file should just the code, no console.log calls, debug code, or commented out code unless notes to me.

Review the ***** Canvas API documents on MDN *****.

Take time and be efficient with your code.

Create a index.html and script.js like we did in class.

The following code will be in your script.js file.

Using the Canvas API, draw the following image.
*/


let canvas = document.querySelector("#emoji");
let ctx = canvas.getContext("2d");

const circle = (x,y,radius) => {
    ctx.arc(x,y,radius,0, 2*Math.PI);
};

//face outline
ctx.beginPath();
circle(250, 250, 230);
ctx.fillStyle = "#ffde67";
ctx.fill();

//eyes