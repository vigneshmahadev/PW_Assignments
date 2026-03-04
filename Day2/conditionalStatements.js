function launchBrowser(browser) {
  if (browser.toLowerCase() === "chrome") {
    console.log(`Running on: 'CHROME'`);
  } else if (browser.toLowerCase() === "firefox") {
    console.log(`Running on: 'FIREFOX'`);
  } else {
    console.log(`Running on: 'OTHER_BROWSER'`);
  }
}

function runTests(type) {
  switch (type.toLowerCase()) {
    case "smoke":
      console.log(`Running: Smoke test`);
      break;
    case "sanity":
      console.log(`Running: Sanity test`);
      break;
    case "regression":
      console.log(`Running: Regression test`);
      break;
    default:
      console.log(`Running: Smoke test`);
  }
}

launchBrowser("Chrome");
runTests("sanity");
launchBrowser("edge");
runTests("cvbirs");
