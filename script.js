//to Ali: many of the parameter values are kept as mathematic equation (e.g. 250-80+10, instead of 180) to conserve certain anchor points and values - were there more time, I would think of making variables or functions to store these values for easier modification and understanding of code, but I got to get to school now...

let canvas = document.querySelector("#emoji");
let ctx = canvas.getContext("2d");

const circle = (x,y,radius) => {
    ctx.arc(x,y,radius,0, 2*Math.PI);
};

//face outline
ctx.beginPath();
circle(250, 250, 230); //lowest point of face is (250,480): to match tongue bottom
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

//mouth, body
ctx.beginPath();
ctx.arc(250, 250 +30, 150, 0, Math.PI);
ctx.closePath(); //Question: no closePath with rounding corner?
ctx.fillStyle = "#664d23";
ctx.fill();

//mouth, top, rounded corners
//ctx.arcTo(x1, y1, x2, y2, radius); -> adds a circular arc to the current path. It is commonly used for making rounded corners.
ctx.beginPath();
ctx.moveTo(250 -150, 250 +30);
ctx.arcTo(250 -150, (250+30) -10, (250-150) +10, (250+30) -10, 10);
ctx.lineTo(250+150 -10, (250+30) -10);
ctx.arcTo(250+150, (250+30) -10, (250+150), (250+30) +10, 10);
ctx.closePath();
ctx.fillStyle = "#664d23";
ctx.fill();

//tongue, bottom round part
ctx.beginPath();
ctx.arc(250, 480-80, 80, 0, Math.PI);
ctx.closePath();
ctx.fillStyle = "#f86e7d"; //lighter pink
ctx.fill();

//tongue, upper rectangular, rounded corners
ctx.beginPath();
ctx.moveTo(250 -80, 400);
ctx.lineTo(250 -80, 320 +10);
ctx.arcTo(250 -80, 320, 250-80 +10, 320, 10); 
ctx.lineTo(250+80 -10, 320);
ctx.arcTo(250+80, 320, 250+80, 320+10, 10);
ctx.lineTo(250+80, 400);
ctx.closePath();
ctx.fillStyle = "#f86e7d";
ctx.fill();

//tongue, center line (triangle)
ctx.beginPath();
ctx.moveTo(250-10, 320);
ctx.lineTo(250+10, 320); 
ctx.lineTo(250, 450);
ctx.closePath();
ctx.fillStyle = "#e3586c";//darker pink
ctx.fill();