import Vue from 'vue';
import Router from 'vue-router';
import IndexView from './views/index.vue';

Vue.use(Router);

// function createRouteConfig(path, view, opts = {}) {
//   let options = opts;
//   let viewFile = view || path;
//   if (typeof view === 'object') {
//     options = view;
//     viewFile = path;
//   }

//   options.path = `/${path}`;
//   options.name = options.name || path.replace(/\//g, '-');
//   options.meta = options.meta || {};
//   options.meta.menu = options.meta.menu || options.menu || options.name;
//   options.meta.access = options.meta.access || options.access;
//   options.component = () => import(`@/views/${viewFile}.vue`);
//   return options;
// }

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
      children: [
      ],
    },
    { path: '*', redirect: '/404' },
  ],
});

router.beforeEach((to, from, next) => {
  next();
});

router.afterEach(() => {
});

export default router;
