var WIDTH;
var HEIGHT;

var FPS = 60;
var render_delay = 1000 / FPS;

var ctx;

function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function circle(x,y,r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
}

function rect(x,y,w,h,color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fill();
}

function line(sx,sy,ex,ey,color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(sx,sy);
  ctx.lineTo(ex,ey);
  ctx.stroke();
}

function text(x,y,text,align,baseline,size) {
  ctx.font = "bold " + size + "px Emulogic";
  ctx.textAlign = align;
  ctx.textBaseline = baseline;
  ctx.fillText(text,x,y);
}

function image(img,x,y) {
  ctx.drawImage(img,x,y);
}
