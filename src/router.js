import Vue from 'vue';
import Router from 'vue-router';
import Events from '@/views/Events.vue';
//import EventCreation from "@/views/EventCreation.vue";
import Event from '@/views/Event.vue';
import User from '@/views/User.vue';
import NotFoundComponent from './views/404.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Events',
      component: Events
    },
    {
      path: '/event/create',
      name: 'EventCreation',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ '@/views/EventCreation.vue')
    },
    {
      path: '/event/1',
      name: 'Event',
      component: Event
    },
    {
      path: '/users/:username',
      name: 'user',
      component: User,
      props: true
    },
    {
      path: '*',
      components: NotFoundComponent
    }
  ]
});
