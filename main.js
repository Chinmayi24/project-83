var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var width = screen.width ;
var new_width = screen.width - 70;
var new_height = screen.height - 300;
var current_position_of_touch_x , current_position_of_touch_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    canvas.addEventListener("mousedown",myMousedown);
    function myMousedown(e) {
        mouseEvent="mousedown";
    }
    
    canvas.addEventListener("mouseleave",myMouseleave);
    function myMouseleave(e) {
        mouseEvent="mouseleave"; }
    
    canvas.addEventListener("mouseup",myMouseUp);
        function myMouseUp(e) {
            mouseEvent="mouseup";
        }
    
    canvas.addEventListener("mousemove" , myMouseMove);
    function myMouseMove(e) {
     current_position_of_x = e.clientX - canvas.offsetLeft ;
     current_position_of_y = e.clientY - canvas.offsetTop ;
    
     if (mouseEvent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth = width_line;
        
        console.log("Last position of x and y coordinates =");
        console.log("x=" + last_position_of_x + " y=" + last_position_of_y);
        ctx.moveTo(last_position_of_x , last_position_of_y);
    
        console.log("Current position of x and y coordinates =");
        console.log("x=" + current_position_of_x + " y=" + current_position_of_y);
        ctx.lineTo(current_position_of_x , current_position_of_y);
        ctx.stroke();
     }
        
        last_position_of_x = current_position_of_x;
        last_position_of_y = current_position_of_y;
    }

    if (width < 992)
    {
     document.getElementById("myCanvas").width = new_width;
     document.getElementById("myCanvas").height = new_height;
     document.body.style.overflow = "hidden";
    }

   
    function my_touchstart(e)
    {
        console.log("mytouchstart");
        last_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    }


    
    function my_touchmove(e)
    {
         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

    
