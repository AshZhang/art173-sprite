const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const BG_COLOR = [191, 224, 245];
let onion;
let onionAnim;

function preload() {
  const onionSpritesheet = loadSpriteSheet("img/onion.png", 64, 64, 6);
  onionAnim = loadAnimation(onionSpritesheet);
  onion = createSprite(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, 64, 64);
  onion.moveSpeed = 5;
}

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  onion.addAnimation("move", onionAnim);
  onion.addImage("still", loadImage("img/onion_still.png"));
  onion.setDefaultCollider();
}

function update(object) {
  if (keyDown("up") || keyDown("down") || keyDown("left") || keyDown("right")) {
    if (keyDown("up")) {
      object.addSpeed(2, 270);
    }
    if (keyDown("down")) {
      object.addSpeed(2, 90);
    }
    if (keyDown("left")) {
      object.addSpeed(2, 180);
      object.mirrorX(-1);
    }
    if (keyDown("right")) {
      object.addSpeed(2, 0);
      object.mirrorX(1);
    }
  } else {
    object.setSpeed(0);
  }
  drawObject(object);
}

function drawObject(object) {
  if (object.getSpeed() > 0.0001) {
    object.changeAnimation("move");
  } else {
    object.changeImage("still");
  }
  onion.limitSpeed(onion.moveSpeed);
  drawSprite(object);
}

function draw() {
  background(BG_COLOR);
  update(onion);
}
