import { MorsenPage } from './app.po';

describe('morsen App', () => {
  let page: MorsenPage;

  beforeEach(() => {
    page = new MorsenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
