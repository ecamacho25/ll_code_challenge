const { After, Before } = require("cucumber");

Before(async function() {
});

After(async function() {
  await browser.restart();
});