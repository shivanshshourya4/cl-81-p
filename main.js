canvas = document.getElementById("canvas_my");
ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle ="blue" ;
ctx.linewidth = 1;
ctx.arc(250, 210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="black";
ctx.linewidth = 1;
ctx.arc(340, 210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="red";
ctx.linewidth = 1;
ctx.arc(430, 210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="yellow";
ctx.linewidth = 1;
ctx.arc(295, 240, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="green";
ctx.linewidth = 1;
ctx.arc(385, 240, 40, 0, 2*Math.PI);
ctx.stroke();
