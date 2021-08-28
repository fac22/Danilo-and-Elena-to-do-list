function equal(actual, expected) {
    if (actual === expected) {
      console.info(`Pass: Expected ${expected} and received ${actual}`);
    } else {
      console.error(`Fail: Expected ${expected} but received ${actual} instead`);
    }
  }
  
  function equalArrays(actual, expected) {
    if (actual.length !== expected.length) {
      console.error(`Fail: Expected ${expected} but received ${actual} instead`);
    } else {
      actual.forEach((a) => {
        expected.forEach((e) => {
          if (a !== e) {
            console.error(
              `Fail: Expected ${expected} but received ${actual} instead`
            );
          }
        });
      });
      console.info(`Pass: Expected ${expected} and received ${actual}`);
    }
  }
  
  function notEqual(actual, expected) {
    if (actual !== expected) {
      console.info(`Pass: ${expected} is different to ${actual}`);
    } else {
      console.error(`Fail: ${expected} is the same as ${actual}`);
    }
  }
  
  function test(name, testFunction) {
    console.group(name);
    testFunction();
    console.groupEnd(name);
  }