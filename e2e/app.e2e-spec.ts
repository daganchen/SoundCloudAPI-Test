import { SoundCloudAPIPage } from './app.po';

describe('sound-cloud-api App', () => {
  let page: SoundCloudAPIPage;

  beforeEach(() => {
    page = new SoundCloudAPIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
