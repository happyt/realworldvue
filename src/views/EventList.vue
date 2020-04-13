<template>
  <div>
    <h1>Events listing</h1>
    <EventCard />
    <router-link :to="{ name: 'event-show', params: { id: 'ian' } }"
      >Show Event</router-link
    >
    |
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'

export default {
  components: {
    EventCard
  }
}
</script>
