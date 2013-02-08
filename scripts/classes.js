function Ball(x, y, height, width, radius){
  this.x = x;
  this.y = y;
  this.dx = 0;
  this.dy = 0;
  this.height = height;
  this.width = width;
  this.radius = radius;
  this.imgs = [];
  this.skin = 0;

  this.move = function() {
    if (this.x + this.width > WIDTH || this.x < 0)
      this.dx = -this.dx;
    if (this.y + this.height > HEIGHT || this.y < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
  }

  this.draw = function() {
    // rect(this.x, this.y, this.width, this.height);
    image(this.imgs[this.skin], this.x, this.y);
  }
}

function Paddle(x, y, height, width){
  this.x = x;
  this.y = y;
  this.height = height;
  this.width = width;
  this.color = '#000000';

  this.move = function() {
    if (upDown) {
      if (!is_ball_moving() && this.y + this.height <= ball.y + ball.radius)
        return;
      if (this.y > 0)
        this.y -= 4;
    } else if (downDown) {
      if (!is_ball_moving() && this.y >= ball.y + ball.height - ball.radius)
        return;
      if (this.y + this.height < HEIGHT)
        this.y += 4;
    }
  }

  this.draw = function() {
    rect(this.x, this.y, this.width, this.height, this.color);
  }
}
