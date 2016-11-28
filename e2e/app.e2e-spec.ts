import { WilkipediaPage } from './app.po';

describe('wilkipedia App', function() {
  let page: WilkipediaPage;

  beforeEach(() => {
    page = new WilkipediaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
