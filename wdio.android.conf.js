import { config as androidConfig } from './wdio.ios.conf.js'

androidConfig.capabilities = [{
    // capabilities for local Appium web tests on an Android Emulator
    platformName: 'Android',
    browserName: 'Chrome',
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
}]

export const config = androidConfig;
