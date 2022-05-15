import pytest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
import service as Service


def test_driver_manager_chrome():
    service = ChromeService(executable_path=ChromeDriverManager().install())

    driver = webdriver.Chrome(service=service)

    driver.quit()

# test_driver_manager_chrome()

service = Service(executable_path="/Users/nclongkk/.wdm/drivers/chromedriver/mac64_m1/101.0.4951.41/chromedriver")
driver = webdriver.Chrome(service=service)