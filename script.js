// Area of a circle: A = pi * r **

function getAreaOfCircle(radius) {
  return Math.PI * Math.pow(radius, 2);
}
console.log(getAreaOfCircle(2));

//Circumference of a circle: C = 2 * pi * r

function getCircumferenceOfCircle(radius) {
  return 2 * Math.PI * radius;
}
console.log(getCircumferenceOfCircle(2));

//Area of a square: A = a**

function getAreaOfSquare(side) {
  return side ** 2;
}
console.log(getAreaOfSquare(2));

//Area of a triangle:  A = hb * b / 2 (1/2 * base * height)

function getAreaOfTriangle(base, height) {
  return 0.5 * base * height;
}
console.log(getAreaOfTriangle(2, 3));
