<template>
  <div>
    <p>{{ msg }}</p>
    <button
      type="button"
      @click="counter.increment"
    >
      clicked: {{ counter.count }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter';

defineOptions({
  name: 'DemoCounter',
});

interface Props {
  msg?: string;
}

defineProps<Props>();

const counter = useCounterStore();
</script>

<style lang="scss" scoped src="./DemoCounter.scss"></style>
