var lpox, lpoy;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
    
color = "black";
width_of_line = 2;
var width = screen.width;
console.log(width)
canvas_width = screen.width - 70;
canvas_height = screen.height - 300;

if(width < 992){
    document.getElementById("myCanvas").width = canvas_width;
    document.getElementById("myCanvas").height = canvas_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
    
function my_touchstart(e)
{
    console.log("my_touchstart")
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    lpox = e.touches[0].clientX - canvas.offsetLeft;
    lpoy = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    console.log("my_touchmove")
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
        
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + lpox + "y = " + lpoy);
    ctx.moveTo(lpox, lpoy);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    lpox = current_position_of_touch_x; 
    lpoy = current_position_of_touch_y;
}
function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


