import FavoriteMenuIdb from '../data/favoriteMenu-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

/* eslint-disable no-underscore-dangle */
const LikeButtonInitiator = {
  async Infinity({ likeButtonContainer, Menu }) {
    this._likeButtonContainer = likeButtonContainer;
    this._Menu = Menu;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._menu;

    if (await this._isMenuExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isMenuExist(id) {
    const menu = await FavoriteMenuIdb.getMenu(id);
    return !!menu;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteMenuIdb.putMenu(this._menu);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteMenuIdb.deleteMenu(this._menu.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
