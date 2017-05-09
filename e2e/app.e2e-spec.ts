import { MaterialPlayerPage } from './app.po';

describe('material-player App', function() {
  let page: MaterialPlayerPage;

  beforeEach(() => {
    page = new MaterialPlayerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
