import TheMenuDbSource from '../../data/themenudb-source';
import renderGrid from '../pages/renderGrid';

const Menus = {
  async afterRender() {
    const menus = await TheMenuDbSource.menus();
    let x = '<ul>';
    // this._drawer.innerHTML = '<ul>';
    menus.forEach((menu) => {
      // eslint-disable-next-line no-shadow
      function createMenusItemTemplate(menu) {
        return `<li><button id=${menu.key}>
                              ${menu.title}
                    </button></li>`;
      }
      x += createMenusItemTemplate(menu);
    });
    x += '</ul>';
    return x;
  },

  assignClick: async function () {
    const menus = await TheMenuDbSource.menus();
    // this._drawer.innerHTML = '<ul>';
    menus.forEach((menu) => {
      const button = document.querySelector(`#${menu.key}`);
      button.addEventListener('click', () => {
        renderGrid.afterRenderasd(menu.key, menu.title);
      });
    });
  },
};

export default Menus;
