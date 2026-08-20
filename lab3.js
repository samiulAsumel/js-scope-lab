function testBlockScope() {
  if (true) {
    var varInsideBlock = "I'm var, defined inside the block";
    let letInsideBlock = "I'm let, defined inside the block";
    console.log(varInsideBlock);
    console.log(letInsideBlock);
  }

  console.log(varInsideBlock);
  console.log(letInsideBlock);
}

testBlockScope();
