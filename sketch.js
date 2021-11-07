const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 

var Engine, world, body;

var backdorop;
var striker, aim, showAim, aimAngle, aimPower;
var ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10;

var wall1, wall2, wall3, wall4;
var charge;
window.score;

function preload(){
  backdorop = loadImage("sprites/pool_Board.png");
  aim = loadImage("sprites/arrow.png")
}

function setup() {
  createCanvas(1000,700);

  Engine = Engine.create();
  world = Engine.world;

  Engine.world.gravity.y =0;

  striker = new Striker(200, 350);

  ball1 = new Ball(600,350,255,60,60,1);
  ball2 = new Ball(645,325,60,255,60,2);
  ball3 = new Ball(645,375,60,60,255,3);
  ball4 = new Ball(690,300,60,255,60,5);
  ball5 = new Ball(690,350,255,255,60,5);
  ball6 = new Ball(690,400,255,60,255,6);
  ball7 = new Ball(735,275,60,60,60,7);
  ball8 = new Ball(735,325,100,)
  ball9 = new Ball()
  ball10 = new Ball()
}