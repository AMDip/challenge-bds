# Automation Framework with WebdriverIO and Cucumber

* Set up the capabilities for Android(Emulator sample)
```bash
capabilities: [{
        platformName: 'Android', 
        "appium:device-name": 'Pixel 4 API 30(R)',
        "appium:platformVersion": "11.0",
        "appium:automationName": "UIAutomator2",
        "appium:app": androidAppPath,
        // "appium:appWaitActivity": "com.swaglabsmobileapp.MainActivity"(For OLD swaglabs app)
    }]
```
* Set up the capabilities for Android(Emulator sample)
```bash
capabilities: [{
        platformName: 'IOS',
        "appium:device-name": 'iPhone 13 Pro Max',
        "appium:platformVersion": "16.0",
        "appium:automationName": "XCUItest",
        "appium:app": iosAppPath,   
    }]
```

* Install Appium in your project
```bash
    npm install --save-dev appium@next
```

* Check if the drivers are still available, if not install them again:
```bash 
appium driver list
```
```bash 
appium driver install xcuitest
appium driver install uiautomator2
```

* Run your scripts using
```bash
npx wdio
```

## Setup WebDriverIO
if you want to run this project:

1- Install all the system requirements

2- Clone the project

3- Run: npm i

4- Download the android app and place it under app/android or app/IOS

5- npx wdio
