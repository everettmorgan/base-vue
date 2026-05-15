<template>
  <div>
    <p>{{ msg }}</p>
    <button
      type="button"
      @click="onClick"
    >
      clicked: {{ count }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

defineOptions({
  name: 'DemoCounter',
});

interface Props {
  msg?: string;
}

defineProps<Props>();

const count = ref(0);

function onClick() {
  count.value += 1;
}
</script>

<style lang="scss" scoped src="./DemoCounter.scss"></style>
