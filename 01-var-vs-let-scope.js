function testVarScope() {
  if (true) {
    // var ignores block boundaries, it's scoped to the whole function.
    var x = "I'm in var";
  }
  console.log(x); // still visible here, even though x was declared inside the if-block
}

function testLetScope() {
  if (true) {
    // let is confined to the { } it's declared in.
    let y = "I'm in let";
  }
  console.log(y); // throws ReferenceError, y never existed outside the if-block
}

testVarScope();
testLetScope();
