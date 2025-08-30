<template>
  <div>
    <p>{{ msg }}</p>
    <button @click="onClick">clicked: {{ count }}</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface Props {
  msg?: string;
}
const props = defineProps<Props>();

console.log(props);

const count = ref<number>(0);

function onClick() {
  count.value += 1;
}
</script>

<style lang="scss" scoped src="./Foo.scss"></style>
