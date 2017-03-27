function getTriangleArea(a, h) {
  var triangleArea;

  if (isNaN(Number(a)) || isNaN(Number(h))) {
    console.log('Nieprawidłowe dane');
    return;
  }

  if (a < 0 || h < 0) {
    console.log('Nieprawidłowe dane');
    return;
  }

  if (a > 0 && h > 0) {
    triangleArea = a*h/2;
    console.log(triangleArea);
    return triangleArea;
  }
}

getTriangleArea(10, 6);

var triangle1Area = getTriangleArea(8, 5);
var triangle2Area = getTriangleArea(4, 'f');
var triangle3Area = getTriangleArea(-2, 3);
