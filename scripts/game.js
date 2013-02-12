var field_lines = [];

var scores = [];
var active_player = 0;
var player_direction = [1, -1];

function switch_player() {
  active_player ^= 1;
}

function next_level(player_no) {
  init_ball(player_no);
  init_paddle();

  active_player = player_no;
}

function draw_field() {
  image(qype_logo, field_lines[0] + 10, HEIGHT / 2 - 30);
  image(yelp_logo, field_lines[1] - 100 - 10, HEIGHT / 2 - 30);

  text(WIDTH / 2, (HEIGHT / 4) * 3, "Let's play together", "middle", 20);
}

function shot_ball() {
  ball.dx = 4 * player_direction[active_player];
  calculate_paddle_bounce(active_player);

  switch_player();
}

function ready_to_shot() {
  if (spacePressed) {
    reset_pressed_key();
    shot_ball();
  }
}

function ready_to_continue() {
  if (spacePressed) {
    reset_pressed_key();
  }
}

function update_paddle_height() {
  if (HEIGHT > 100 && paddle[active_player].height > 10)
    paddle[active_player].height -= 10;
}

function calculate_paddle_bounce(paddle_no) {
  ball.dy = 16 * ( ( (ball.y + ball.height / 2) - (paddle[paddle_no].y + paddle[paddle_no].height / 2) ) / paddle[paddle_no].height);
}

function check_collision(paddle_no) {
  // Move the ball differently based on where it hit the paddle
  if (ball.y + ball.height > paddle[paddle_no].y && ball.y < paddle[paddle_no].y + paddle[paddle_no].height) {
    ball.dx = -ball.dx;
    ball.skin ^= 1;
    calculate_paddle_bounce(paddle_no);

    switch_player();
    update_paddle_height();
  }
}

function collide_ball_and_paddle() {
  // Check paddle 1 collision with ball
  if (ball.x < paddle[0].x + paddle[0].width) {
    check_collision(0);
  }
  // Check paddle 2 collision with ball
  if (ball.x + ball.width > paddle[1].x) {
    check_collision(1);
  }
}

function check_ball_out() {
  if (ball.x < paddle[0].x + paddle[0].width / 2) {
    ++scores[1];
    next_level(0);
  }
  if (ball.x + ball.width > paddle[1].x + paddle[1].width / 2) {
    ++scores[0];
    next_level(1);
  }
}

function is_ball_moving() {
  return !(ball.dx == 0 && ball.dy == 0);
}

function draw() {
  clear();

  draw_field();
  print_score();
  ball.draw();
  paddle[0].draw();
  paddle[1].draw();

  ready_to_shot();

  ball.move();

  paddle[active_player].move();

  if (is_ball_moving()) {
    collide_ball_and_paddle();
    check_ball_out();
  }
}

function print_score() {
  text(WIDTH / 2 - 20, HEIGHT / 2, scores[0], "middle", 20);
  text(WIDTH / 2, HEIGHT / 2, ":", "middle", 20);
  text(WIDTH / 2 + 20, HEIGHT / 2, scores[1], "middle", 20);
}
