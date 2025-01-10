// DrawRectangle.js

function drawVector(v, color) {
    var canvas = document.getElementById('example');
    if (!canvas) {
    console.log('Failed to retrieve the <canvas> element');
    return;
    }
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    // ctx.moveTo(200, 200); 
    let x = v.elements[0] * 20 ;
    let y = v.elements[1] * 20;
    ctx.moveTo(200, 200);
    
    console.log("x = "+ x + ", y = " + y);

    ctx.fillStyle = color;
    ctx.lineTo(200+x,200-y);
    ctx.strokeStyle = color;
    ctx.stroke();
 }

function main() {
// Retrieve <canvas> element                                  <- (1)
var canvas = document.getElementById('example');
if (!canvas) {
console.log('Failed to retrieve the <canvas> element');
return;
}

// Get the rendering context for 2DCG                          <- (2)
var ctx = canvas.getContext('2d');

// Draw a blue rectangle                                       <- (3)
ctx.fillStyle = 'rgba(0, 0, 0, 0)'; // Set a blue color
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
// ctx.fillRect(120, 10, 150, 150); // Fill a rectangle with the color

let v1 = new Vector3([2.25, 2.25, 0]);
drawVector(v1, "red")
}