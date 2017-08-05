import { Ng4RouterPocPage } from './app.po';

describe('ng4-router-poc App', () => {
  let page: Ng4RouterPocPage;

  beforeEach(() => {
    page = new Ng4RouterPocPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
