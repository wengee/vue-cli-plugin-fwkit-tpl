<template lang="pug">
  div(v-if="isLogined")
    HomeView(v-if="isHomePage")
    routerView(v-else)
</template>

<script>
import { mapGetters } from 'vuex';
import HomeView from './home/index.vue';

export default {
  data() {
    return {
      check1: false,
    };
  },

  computed: {
    ...mapGetters(['isLogined']),

    isHomePage() {
      return this.$route.name === 'index';
    },
  },

  components: {
    HomeView,
  },
};
</script>
