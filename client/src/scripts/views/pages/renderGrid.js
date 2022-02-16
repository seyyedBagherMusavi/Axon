import TheMenuDbSource from '../../data/themenudb-source';
import { createMenuItemTemplate } from '../templates/template-creator';
import detail from "./detail";
import {awrap} from "regenerator-runtime";

const RenderGrid = {

  async render(criteria, title) {
    // Fungsi ini akan dipanggil setelah render()
    const menus = await TheMenuDbSource.criteriaMenus(criteria);
    // TODO: tampilkan menus di dalam DOM
    const menuContainer = document.querySelector('#contentO');
    const mainContainer = document.querySelector('#mainName');
    mainContainer.innerHTML = title;
    menuContainer.innerHTML = null;
    menus.forEach((menu) => {
      menu.type = "single";
      menuContainer.innerHTML += createMenuItemTemplate(menu);
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
          await this.render(menu.key, menu.title);
          await this.assignClick(menu.key);
        });
      }else{
        button.addEventListener('click', () => {
          detail.afterRender(menu.id);
        });
      }
    });
  },
};

export default RenderGrid;
