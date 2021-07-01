/* eslint-disable no-undef */
describe('Login', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have login screen', async () => {
    await expect(element(by.id('login-screen'))).toBeVisible();
  });

  it('Should be Login', async () => {
    await element(by.id('username-input')).typeText('Testing');
    await element(by.id('password-input')).typeText('Demotest');
    await element(by.id('login-btn')).tap();
    await expect(element(by.id('welcome-to-home'))).toBeVisible();
  });
  it('Should be add Goals', async () => {
    await element(by.id('username-input')).typeText('Testing');
    await element(by.id('password-input')).typeText('Demotest');
    await element(by.id('login-btn')).tap();
    await expect(element(by.id('welcome-to-home'))).toBeVisible();
    await element(by.id('add-new-goal')).tap();
    await element(by.id('course-goal')).typeText('Learn Detox');
    await element(by.id('add-btn')).tap();
    await expect(element(by.id('welcome-to-home'))).toBeVisible();
    await element(by.id('add-new-goal')).tap();
    await element(by.id('course-goal')).typeText('Learn React Native');
    await element(by.id('add-btn')).tap();
    await expect(element(by.id('welcome-to-home'))).toBeVisible();
    await element(by.id('add-new-goal')).tap();
    await element(by.id('course-goal')).typeText('Learn Redux loop');
    await element(by.id('add-btn')).tap();
    await expect(element(by.id('welcome-to-home'))).toBeVisible();
    await element(by.id('add-new-goal')).tap();
    await element(by.id('cancel-btn')).tap();
    await expect(element(by.id('welcome-to-home'))).toBeVisible();
  });
  it('Should be deleting after adding', async () => {
    await element(by.id('username-input')).typeText('Testing');
    await element(by.id('password-input')).typeText('Demotest');
    await element(by.id('login-btn')).tap();
    await expect(element(by.id('welcome-to-home'))).toBeVisible();
    await element(by.id('add-new-goal')).tap();
    await element(by.id('course-goal')).typeText('Learn Detox');
    await element(by.id('add-btn')).tap();
    await expect(element(by.id('welcome-to-home'))).toBeVisible();
    await element(by.id('add-new-goal')).tap();
    await element(by.id('course-goal')).typeText('Learn React Native');
    await element(by.id('add-btn')).tap();
    await expect(element(by.id('welcome-to-home'))).toBeVisible();
    await element(by.id('add-new-goal')).tap();
    await element(by.id('course-goal')).typeText('Learn Redux loop');
    await element(by.id('add-btn')).tap();
    await expect(element(by.id('welcome-to-home'))).toBeVisible();
    await element(by.text('Learn Detox')).tap();
    await element(by.text('Learn React Native')).tap();
    await element(by.text('Learn Redux loop')).tap();
    await expect(element(by.id('welcome-to-home'))).toBeVisible();
  });
  it('Should be logout', async () => {
    await element(by.id('username-input')).typeText('Testing');
    await element(by.id('password-input')).typeText('Demotest');
    await element(by.id('login-btn')).tap();
    await expect(element(by.id('welcome-to-home'))).toBeVisible();
    await element(by.id('logout')).tap();
    await expect(element(by.id('login-screen'))).toBeVisible();
  });
});
