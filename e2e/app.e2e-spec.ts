import { MyNodeProjectPage } from './app.po';

describe('my-node-project App', () => {
  let page: MyNodeProjectPage;

  beforeEach(() => {
    page = new MyNodeProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
