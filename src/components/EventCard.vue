<template>
  <router-link
    :to="{ name: 'Event', params: { id: event.id } }"
    class="event-link"
  >
    <div class="event-card -shadow">
      <span class="eyebrow">{{ event.time }} on {{ event.date }}</span>
      <h2>{{ event.title }}</h2>
      <BaseIcon name="users"></BaseIcon>
      <span>{{ event.attendees.length }} attending</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'EventCard',
  data() {
    return {
      event: {
        id: 1,
        title: 'Event Card',
        date: 'Today',
        time: 'Right Now',
        location: 'Here',
        attendees: [
          {
            id: 1,
            name: 'jjangga0214'
          },
          {
            id: 2,
            name: 'maru'
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}

.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
