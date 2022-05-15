const { Builder, By, Key, until, locateWith } = require("selenium-webdriver");

const login = async (driver, mail, pass) => {
  try {
    await driver.get("https://github.com/");
    await driver.findElement(By.linkText("Sign in")).click();
    await driver.findElement(By.id("login_field")).sendKeys(mail);
    await driver.findElement(By.id("password")).sendKeys(pass);
    const submitButtonLocator = locateWith(By.tagName("input")).below(
      By.id("password")
    );
    const submitButton = await driver.findElement(submitButtonLocator);
    await submitButton.click();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  login,
};
