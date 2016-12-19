import { MisterEsportsPage } from './app.po';

describe('mister-esports App', function() {
  let page: MisterEsportsPage;

  beforeEach(() => {
    page = new MisterEsportsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
