import { expect } from 'chai';
import Page from 'pages/Page';
import RootAppPage from 'pages/root.app.page';
import WelcomeAppPage from 'pages/welcome.app.page';

class CreatePictoAppPage extends Page {
  /**
   * define elements
   */
  get pageH6() {
    return $('h6=Create tile');
  }
  get folder() {
    return $('=Folder');
  }
  get button() {
    return $('=Button');
  }

  get nameInput() {
    return $('//*[@name="name"]');
  }

  get labelInput() {
    return $('#label');
  }

  get vocalizationInput() {
    return $('#vocalization');
  }
  get saveButton() {
    return $('span=Save');
  }
  /**
   * define or overwrite page methods
   */
  public open() {
    super.open('https://app.cboard.io/');
    WelcomeAppPage.loginUser('anything@cboard.io', '1122');
    RootAppPage.unblockSettings();
    RootAppPage.clickOnCreateTiles();
    expect(this.pageH6.isDisplayed()).to.be.true;
  }

  reload() {
    super.reload();
  }
  createPicto(label, vocalization, type = 'button') {
    this.labelInput.setValue(label);
    this.vocalizationInput.setValue(vocalization);
    this.saveButton.click();
  }
}

export default new CreatePictoAppPage();
