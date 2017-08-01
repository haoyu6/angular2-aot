import { AotPage } from './app.po';

describe('aot App', function() {
  let page: AotPage;

  beforeEach(() => {
    page = new AotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
