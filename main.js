canvas = document.getElementById("whiteBoard");
ctx = canvas.getContext("2d");
color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 7;
ctx.arc(150, 200, 100, 0, 90);
ctx.stroke();
color = "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 7;
ctx.arc(400, 200, 100, 0, 90);
ctx.stroke();
color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 7;
ctx.arc(650, 200, 100, 0, 90);
ctx.stroke();
color = "gold";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 7;
ctx.arc(275, 325, 100, 0, 90);
ctx.stroke();
color = "green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 7;
ctx.arc(525, 325, 100, 0, 90);
ctx.stroke();
