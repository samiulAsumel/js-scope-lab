function testBlockScope() {
  if (true) {
    var varInsideBlock = "I'm var, defined inside the block";
    let letInsideBlock = "I'm let, defined inside the block";
    console.log(varInsideBlock);
    console.log(letInsideBlock);
  }

  console.log(varInsideBlock); // var leaks out of the if-block, function-scoped
  console.log(letInsideBlock); // throws: let never leaves its block
}

testBlockScope();
