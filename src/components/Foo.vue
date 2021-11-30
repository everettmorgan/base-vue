<template>
  <div>
    <button @click.stop="onClick">clicked: {{ count }}</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
})

class Foo extends Vue {
  count: number = 0;

  onClick() {
    this.count += 1;
  }
}

export default Foo;
</script>

<style scoped>

</style>
