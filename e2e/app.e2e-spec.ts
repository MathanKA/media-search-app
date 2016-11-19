import { MediaSearchPage } from './app.po';

describe('media-search App', function() {
  let page: MediaSearchPage;

  beforeEach(() => {
    page = new MediaSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
