import { Ng2ComponentsPage } from './app.po';

describe('ng2-components App', () => {
  let page: Ng2ComponentsPage;

  beforeEach(() => {
    page = new Ng2ComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
