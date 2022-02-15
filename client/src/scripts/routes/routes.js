import MainPage from '../views/pages/MainPage';
import Detail from '../views/pages/detail';

const routes = {
  '/': MainPage, // default page
  '/detail/:id': Detail,
};

export default routes;
