import CONFIG from './config';

const API_ENDPOINT = {
  Menus: `${CONFIG.BASE_URL}menus/`,
  DETAIL: (id) => `${CONFIG.LIST_URL}$${id}`,
};

export default API_ENDPOINT;
