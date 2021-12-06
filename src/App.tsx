import { Options, Vue } from 'vue-class-component';
import Foo from './components/Foo';

@Options({
  components: {
    Foo,
  },
})

class App extends Vue {
  render() {
    return (
      <Foo/>
    );
  }
}

export default App;
