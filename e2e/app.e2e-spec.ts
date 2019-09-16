import { GestionPage } from './app.po';

describe('gestion App', function() {
  let page: GestionPage;

  beforeEach(() => {
    page = new GestionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
