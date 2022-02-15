import TheMenuDbSource from '../../data/themenudb-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createMenuDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <div id="menu" class="menu"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const menu = await TheMenuDbSource.detailMenu(url.id);
    // TODO: tampilkan menu di dalam DOM
    const menusContainer = document.querySelector('#menu');
    menusContainer.innerHTML = createMenuDetailTemplate(menu);

    LikeButtonInitiator.Infinity({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      menu: {
        id: menu.id,
        title: menu.title,
        overview: menu.overview,
        backdrop_path: menu.backdrop_path,
        vote_average: menu.vote_average,
      },
    });
  },
};

export default Detail;
