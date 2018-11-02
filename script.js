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

//mouth
//ctx.arcTo(x1, y1, x2, y2, radius); -> adds a circular arc to the current path. It is commonly used for making rounded corners.

/*
ctx.beginPath();
ctx.moveTo(x1, y1); //start point
ctx.arcTo(x2, y2, x3, y3, radius); //point where angle is made ~ end point
ctx.lineTo(x3, y3); //end point
ctx.stroke();
*/

//ctx.arc(x,y,radius,strtAngle,endAngle,(antiClockwise))

ctx.beginPath();
ctx.arc(250, 250 +30, 150, 0, Math.PI);//line is there, but invisible
ctx.closePath(); //no closePath with rounding corner?
ctx.fillStyle = "#664d23";
ctx.fill();

ctx.beginPath();
ctx.moveTo(250 -150, 250 +30); //start point
ctx.arcTo(250 -150, (250+30) -10, (250-150) +10, (250+30) -10, 10); //point where angle is made ~ end point
ctx.lineTo(250+150 -10, (250+30) -10); //end point
ctx.arcTo(250+150, (250+30) -10, (250+150), (250+30) +10, 10);
ctx.closePath();
ctx.fillStyle = "#664d23";
ctx.fill();