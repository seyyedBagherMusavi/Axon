import CONFIG from '../../globals/config';

const createMenuDetailTemplate = (menu) => `
  <h2 class="menu__title">${menu.title}</h2>
  <img class="menu__poster" src="${menu.backdrop_path}" alt="${menu.title}" />
  <div class="menu__info">
  <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${menu.tagline}</p>
    <h4>Release Date</h4>
    <p>${menu.release_date}</p>
    <h4>Duration</h4>
    <p>${menu.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${menu.vote_average}</p>
  </div>
  <div class="menu__overview">
    <h3>Overview</h3>
    <p>${menu.overview}</p>
  </div>
`;

const createMenuItemTemplate = (menu) => `
  <div class="menu-item">
    <div class="menu-item__header">
        <img class="menu-item__header__poster" alt="${menu.title}"
            src="${menu.backdrop_path ? menu.backdrop_path : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="menu-item__header__rating">
            <p>⭐️<span class="menu-item__header__rating__score">${menu.vote_average}</span></p>
        </div>
    </div>
    <div class="menu-item__content">
        <h3><li><button id='but_${menu.id}' value=${menu.type}><h1 class="app-bar__brand">
                              ${menu.title}</h1>
                    </button></li>
</h3>
        <p>${menu.overview}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this menu" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

export {
  createMenuItemTemplate,
  createMenuDetailTemplate,
  createLikeButtonTemplate,
};
