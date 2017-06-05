import { TestMoniuchPage } from './app.po';

describe('test-moniuch App', () => {
  let page: TestMoniuchPage;

  beforeEach(() => {
    page = new TestMoniuchPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
