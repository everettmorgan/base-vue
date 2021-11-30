<template>
  <Foo/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Foo from './components/Foo.vue';

@Options({
  components: {
    Foo,
  },
})

class App extends Vue {

}

export default App;
</script>

<style>

</style>
