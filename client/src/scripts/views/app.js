/* eslint-disable no-underscore-dangle */
import DrawerInitiator from '../utils/drawer-initiator';
import Menus from './menus/menus';
import MainPage from './pages/MainPage';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const page = MainPage;
    this._drawer.innerHTML = await Menus.afterRender();
    await Menus.assignClick();
    this._content.innerHTML = await page.render();
    await page.afterRender('menus');
  }
}

export default App;
