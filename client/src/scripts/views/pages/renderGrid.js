import TheMenuDbSource from '../../data/themenudb-source';
import { createMenuItemTemplate } from '../templates/template-creator';

const RenderGrid = {

  async afterRenderasd(criteria, title) {
    // Fungsi ini akan dipanggil setelah render()
    const menus = await TheMenuDbSource.criteriaMenus(criteria);
    // TODO: tampilkan menus di dalam DOM
    const menuContainer = document.querySelector('#contentO');
    const mainContainer = document.querySelector('#mainName');
    mainContainer.innerHTML = title;
    menuContainer.innerHTML = null;
    menus.forEach((menu) => {
      menuContainer.innerHTML += createMenuItemTemplate(menu);
    });
  },
};

export default RenderGrid;
