import TheMenuDbSource from '../../data/themenudb-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createMenuDetailTemplate } from '../templates/template-creator';

const Detail = {
  async afterRender(id) {
    // Fungsi ini akan dipanggil setelah render()
    const menu = await TheMenuDbSource.detailMenu(id);
    // TODO: tampilkan menu di dalam DOM
    const menusContainer = document.querySelector('#contentO');
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
