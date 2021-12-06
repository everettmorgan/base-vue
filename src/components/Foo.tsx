import { Options, Vue } from 'vue-class-component';
import './Foo.css';

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

  render() {
    return (
      <div>
        <button onClick={this.onClick}>clicked: {this.count}</button>
      </div>
    );
  }
}

export default Foo;
export { Foo };
