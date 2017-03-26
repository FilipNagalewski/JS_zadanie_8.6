function getTriangleArea(a, h) {
  var triangleArea;
  if (a > 0 && h > 0 && !isNaN(Number(a)) && !isNaN(Number(h))) {
    triangleArea = a*h/2,
    alert(triangleArea);
  } else {
    alert('Nieprawidłowe dane');
  }
  return triangleArea;
}

getTriangleArea(10,6);

var triangle1Area = getTriangleArea(8, 15);
var triangle2Area = getTriangleArea(4, f);
var triangle3Area = getTriangleArea(12, 4);
