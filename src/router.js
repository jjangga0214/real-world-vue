import Vue from 'vue';
import Router from 'vue-router';
import Events from '@/views/Events.vue';
//import EventCreation from "@/views/EventCreation.vue";
import Event from '@/views/Event.vue';
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
      path: '/event/:id',
      name: 'Event',
      component: Event,
      props: true
    },
    {
      path: '*',
      components: NotFoundComponent
    }
  ]
});
