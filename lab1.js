function testVarScope() {
  if (true) {
    var x = "I'm in var";
  }
  console.log(x);
}

function testLetScope() {
  if (true) {
    let y = "I'm in let";
  }
  console.log(y);
}

testVarScope();
testLetScope();
