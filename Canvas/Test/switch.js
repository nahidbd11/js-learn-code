let x = 30;
let i = 7,
  j = 10,
  k = 40;

switch (true) {
  case i >x:
    case j > x:
        console.log("i,j greater than x");
        break;
    case k < x:
        console.log("this statement should be false");
        break;
  default:
    console.log("only k  is greater than x");
}
