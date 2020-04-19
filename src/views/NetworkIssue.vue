<template>
  <div>
    <h1>Problem here</h1>
    <h3>
      It looks like there are network issues, press the back button and try
      again!
    </h3>
    <router-link :to="{ name: 'event-list' }"
      >Or return to the home page</router-link
    >
  </div>
</template>
