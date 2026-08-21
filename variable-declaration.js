function demoScope() {
  var functionScoped = 'I leak outside blocks';
  let blockScoped = 'I stay inside my block';

  if (true) {
    var functionScoped = 'I overwrote the outer one!';
    let blockScoped = 'I am a completely different variable!';
    console.log(functionScoped);
    console.log(blockScoped);
  }

  console.log(functionScoped); // var leaked out of the if-block and got overwritten
  console.log(blockScoped); // let stayed scoped to the function, untouched by the block's copy
}

demoScope();

const testConst = 'fixed';

try {
  testConst = 'changed'; // const bindings can't be reassigned, this throws
} catch (error) {
  console.log(error.message);
}
