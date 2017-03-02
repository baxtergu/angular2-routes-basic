import { Angular2RoutesBasicPage } from './app.po';

describe('angular2-routes-basic App', () => {
  let page: Angular2RoutesBasicPage;

  beforeEach(() => {
    page = new Angular2RoutesBasicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
