import { browser, element, by } from 'protractor';

export class Vnt4techIotBaseappPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
