import { UbicashFrontendWebPage } from './app.po';

describe('ubicash-frontend-web App', () => {
  let page: UbicashFrontendWebPage;

  beforeEach(() => {
    page = new UbicashFrontendWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
