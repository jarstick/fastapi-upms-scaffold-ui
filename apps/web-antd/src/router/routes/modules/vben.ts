import type { RouteRecordRaw } from 'vue-router';

import { IFrameView } from '#/layouts';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      badgeType: 'dot',
      icon: 'https://wu-clan.github.io/picx-images-hosting/logo/fba.png',
      order: 9998,
      title: '项目',
    },
    name: 'VbenProject',
    path: '/fba-admin',
    children: [
      {
        name: '接口文档',
        path: '/apifox',
        component: IFrameView,
        meta: {
          icon: 'simple-icons:apifox',
          iframeSrc:
            'https://apifox.com/apidoc/shared-28a93f02-730b-4f33-bb5e-4dad92058cc0',
          title: '接口文档',
        },
      },
    ],
  },
  {
    name: 'VbenAbout',
    path: '/about',
    component: () => import('#/views/_core/about/index.vue'),
    meta: {
      icon: 'lucide:copyright',
      title: '关于项目',
      order: 9999,
    },
  },
];

export default routes;
