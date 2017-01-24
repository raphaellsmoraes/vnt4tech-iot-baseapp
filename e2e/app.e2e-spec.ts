import { Vnt4techIotBaseappPage } from './app.po';

describe('vnt4tech-iot-baseapp App', function() {
  let page: Vnt4techIotBaseappPage;

  beforeEach(() => {
    page = new Vnt4techIotBaseappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
