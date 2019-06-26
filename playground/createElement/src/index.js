import createElement from '../../../src/createElement'
import render from '../../../src/render'

console.log('render', render)
const root = document.getElementById('root')

class Component{}

class HelloWorld extends Component {
    render() {
        return <div style={{ color: 'blue' }}>Hello World</div>
    }
}

render(<HelloWorld/>, document.getElementById("root"))
