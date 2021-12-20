var a = 1;
function one() {
  var b = 2;
  {
    // block1
    let c = 3;
    console.log(a, b, c);
  }
  {
    // block2
    let c = 4;
    console.log(a, b, c);
  }
}
one();
