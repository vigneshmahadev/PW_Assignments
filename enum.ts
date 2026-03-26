enum Environment {
  local = `LOCAL`,
  dev = `DEVELOPMENT`,
  stage = `STAGING`,
  prod = `PRODUCTION`,
}

function runTests(env: Environment): void {
  console.log(`The test is running against ${env} environment.`);
}

runTests(Environment.dev);
runTests(Environment.prod);
