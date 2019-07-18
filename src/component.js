import render from '../render'

export default class Component {
    constructor(props) {
        this.props = props
    }

    setState(state) {
        setTimeout(() => {
            this.state = state
            const vnode = this.render()
            let oldDom = getDOM(this)
            render(vnode, oldDom.parentNode, this, oldDom)
        }, 0)
    }
}


function getDOM(component) {
    let rendered = component.__rendered
    while (rendered instanceof Component) { //判断对象是否是dom
        rendered = rendered.__rendered
    }
    return rendered
} 
