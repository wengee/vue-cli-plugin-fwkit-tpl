<template lang="pug">
  #app
    router-view
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',

  data() {
    return {
      appClass: null,
    };
  },

  computed: {
    ...mapGetters(['isLogined']),
  },

  async created() {
    await this.$store.dispatch('initialize');
  },
};
</script>
