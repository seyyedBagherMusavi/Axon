import CONFIG from '../globals/config';
import NotificationHelper from './notification-helper';

/* eslint-disable no-underscore-dangle */
const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const menu = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `${menu.title} is on cinema!`,
      options: {
        body: menu.overview,
        image: `${CONFIG.BASE_IMAGE_URL + menu.poster_path}`,
      },
    });
  },
};
export default WebSocketInitiator;
