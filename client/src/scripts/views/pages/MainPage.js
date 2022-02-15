import TheMenuDbSource from '../../data/themenudb-source';
import { createMenuItemTemplate } from '../templates/template-creator';
import config from '../../globals/config';

const MainPage = {
  async render() {
    return `
        <div class="content">
            <h2 id="mainName" class="content__heading">منو</h2>
            <div id="contentO" class="menus">

            </div>
        </div>
      `;
  },

  async afterRender(criteri) {
    // Fungsi ini akan dipanggil setelah render()
    const menus = await TheMenuDbSource.criteriaMenus(criteri);
    // TODO: tampilkan menus di dalam DOM
    const menusContainer = document.querySelector('#contentO');
    menus.forEach((menu) => {
      if (criteri === 'menus') {
        // eslint-disable-next-line no-param-reassign
        menu.backdrop_path = `${config.BASE_IMAGE_URL}menu/${menu.id}.jpg`;
      }
      menusContainer.innerHTML += createMenuItemTemplate(menu);
    });
  },
};

export default MainPage;
