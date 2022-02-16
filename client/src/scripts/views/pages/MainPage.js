import TheMenuDbSource from '../../data/themenudb-source';
import { createMenuItemTemplate } from '../templates/template-creator';
import config from '../../globals/config';
import renderGrid from "./renderGrid";
import detail from "./detail";

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
        menu.type = "category";
        // eslint-disable-next-line no-param-reassign
        menu.backdrop_path = `${config.BASE_IMAGE_URL}menu/${menu.id}.jpg`;
      }else {menu.type = "single";}

      menusContainer.innerHTML += createMenuItemTemplate(menu);
    });
  },

   async assignClick (criteri) {
    // Fungsi ini akan dipanggil setelah render()
    const menus = await TheMenuDbSource.criteriaMenus(criteri);
    // TODO: tampilkan menus di dalam DOM
    menus.forEach((menu) => {
      const button = document.getElementById(`but_${menu.id}`);
        // eslint-disable-next-line no-param-reassign
      if (button.value === 'category') {

        button.addEventListener('click', async () => {
          await renderGrid.render(menu.key, menu.title);
          await renderGrid.assignClick(menu.key);
        });
      }else{
        button.addEventListener('click', () => {
          detail.afterRender(menu.id);
        });
      }
    });
  },

};

export default MainPage;
