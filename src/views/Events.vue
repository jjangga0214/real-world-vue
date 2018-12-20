<template>
  <div>
    <h1>Events</h1>
    <EventCard></EventCard>
    <router-link :to="{ name: 'Event', params: { id: 1 } }">#1</router-link>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
export default {
  components: {
    EventCard
  }
};
</script>

<style scoped></style>
