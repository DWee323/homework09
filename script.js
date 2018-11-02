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
ctx.fillStyle = "#ffde67"; //off mustard
ctx.fill();

//eye, left
ctx.beginPath();
circle(250 -95, 250 -60, 35);
ctx.fillStyle = "#664d23"; //brown
ctx.fill();

//eye, right
ctx.beginPath();
circle(250 +95, 250 -60, 35);
ctx.fillStyle = "#664d23";
ctx.fill();

// mouth, goddamnit
//CanvasRenderingContext2D.arcTo(): adds a circular arc to the current path. It is commonly used for making rounded corners.
//ctx.arcTo(x1, y1, x2, y2, radius); ()
//ctx.arc(x,y,radius,strtAngle,endAngle,(antiClockwise))
ctx.beginPath();
ctx.moveTo(150, 20);
ctx.arcTo(150,100, 50,20, 30);
ctx.lineTo(50, 20);
ctx.stroke();