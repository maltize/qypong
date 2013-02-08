var ball;
var paddle = [];
var qype_logo, yelp_logo;

function init() {
  ctx = $('#canvas')[0].getContext("2d");
  WIDTH = $("#canvas").width();
  HEIGHT = $("#canvas").height();

  init_field_lines();
  init_ball(active_player);
  init_paddle();
  init_score();
  init_images();

  return setInterval(draw, render_delay);
}

function init_field_lines() {
  field_lines = [WIDTH / 4, (WIDTH / 4) * 3];
}

function init_ball(player_no) {
  ball = new Ball(player_no == 0 ? 0 + 20 : WIDTH - paddle[0].width - 20, HEIGHT / 2 - 20 / 2, 20, 20, 10);

  ball.imgs[0] = new Image();
  ball.imgs[0].src = 'images/qype-ball.png';

  ball.imgs[1] = new Image();
  ball.imgs[1].src = 'images/yelp-ball.png';
}

function init_paddle() {
  paddle[0] = new Paddle(0, HEIGHT / 2 - 100 / 2, 100, 20);
  paddle[0].color = '#06b8e4';
  paddle[1] = new Paddle(WIDTH - 20, paddle[0].y, 100, 20);
}

function init_score() {
  scores[0] = 0;
  scores[1] = 0;
}

function init_images() {
  qype_logo = new Image();
  qype_logo.src = 'images/qype-logo.png';

  yelp_logo = new Image();
  yelp_logo.src = 'images/yelp-logo.png';
}