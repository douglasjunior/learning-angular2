import { Angular2DirectivesPage } from './app.po';

describe('angular2-directives App', function() {
  let page: Angular2DirectivesPage;

  beforeEach(() => {
    page = new Angular2DirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
