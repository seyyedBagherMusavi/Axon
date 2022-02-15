import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class TheMenuDbSource {
  static async menus() {
    const response = await fetch(API_ENDPOINT.Menus);
    const responseJson = await response.json();
    return responseJson;
  }

  static async criteriaMenus(criteria) {
    let response;
    if (criteria === 'menus') {
      response = await fetch(CONFIG.MENU_URL);
    } else {
      response = await fetch(`${CONFIG.BASE_URL}lists?key=${criteria}`);
    }
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailMenu(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default TheMenuDbSource;
