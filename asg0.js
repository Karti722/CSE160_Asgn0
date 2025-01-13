function drawVector(v, color) {
    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }
    var ctx = canvas.getContext('2d');
    ctx.beginPath();

    let x = v.elements[0] * 20;
    let y = v.elements[1] * 20;

    ctx.moveTo(200, 200);
    ctx.lineTo(200 + x, 200 - y);
    ctx.strokeStyle = color;

    ctx.stroke();
}

function handleDrawEvent(event) {

    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }

    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let v1_x = document.getElementById("v1_x").value;
    let v1_y = document.getElementById("v1_y").value;
    
    let v2_x = document.getElementById("v2_x").value;
    let v2_y = document.getElementById("v2_y").value;

    if (isNaN(v1_x) || isNaN(v1_y) || isNaN(v2_x) || isNaN(v2_y)) {
        console.log("Invalid input values!");
        return;
    }

    // Create new vectors using the input values and draw it
    let v1 = new Vector3([v1_x, v1_y, 0]);
    let v2 = new Vector3([v2_x, v2_y, 0]);
    drawVector(v1, "red");
    drawVector(v2, "blue");
    event.preventDefault();
}

function handleDrawOperationEvent(event) {

    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }

    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let v1_x = document.getElementById("v1_x").value;
    let v1_y = document.getElementById("v1_y").value;
    
    let v2_x = document.getElementById("v2_x").value;
    let v2_y = document.getElementById("v2_y").value;

    if (isNaN(v1_x) || isNaN(v1_y) || isNaN(v2_x) || isNaN(v2_y)) {
        console.log("Invalid input values!");
        return;
    }

    // Draw the two vectors using the input values and draw it
    let v1 = new Vector3([v1_x, v1_y, 0]);
    let v2 = new Vector3([v2_x, v2_y, 0]); 
    drawVector(v1, "red");
    drawVector(v2, "blue");
   
    let v3 = new Vector3([v1_x, v1_y, 0]);
    op = document.getElementById("operation").value;
    scalar = document.getElementById("scalar").value;

    console.log(op);
    if (op == "addition") {
        v3.add(v2);
        drawVector(v3, "green");
    }
    else if (op == "subtraction") {
        v3.sub(v2);
        drawVector(v3, "green");
    }
    else if (op == "multiply") {
        if (!scalar) {
            console.log("NEED SCALAR!");
            return;
        }
        v1.mul(scalar);
        v2.mul(scalar);
        drawVector(v1, "green");
        drawVector(v2, "green");
    }
    else if (op == "divide") {
        if (!scalar) {
            console.log("NEED SCALAR!");
            return;
        }
        v1.div(scalar);
        v2.div(scalar);
        drawVector(v1, "green");
        drawVector(v2, "green");
    }


    event.preventDefault();

}

function main() {
    // Retrieve <canvas> element
    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }

    var ctx = canvas.getContext('2d');

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", handleDrawEvent);

    let secondSubmit = document.getElementById("secondSubmit");
    secondSubmit.addEventListener("click", handleDrawOperationEvent);
}
