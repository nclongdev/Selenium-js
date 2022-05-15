const { Builder, By, Key, until, locateWith } = require("selenium-webdriver");

module.exports = async (driver) => {
  try {
    // const driver = await new Builder().forBrowser("chrome").build();
    let newRepoButton = await driver.findElement(
      By.css(
        ".dashboard-sidebar > #dashboard-repos-container > #repos-container .octicon"
      )
    );
    return newRepoButton;
  } catch (e) {
    return;
  }
};
