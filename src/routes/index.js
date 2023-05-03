// Layouts
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// public Routes
const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    path: '/search',
    component: Search,
    layout: null,
  },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly,
  },
];

// private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
