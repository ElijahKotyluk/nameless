export default function render(vnode, parent) {

  let dom

  if (typeof vnode === 'string') {
    dom = document.createTextNode(vnode)
    parent.appendChild(dom)

  } else if (typeof vnode.nodeName === 'string') {
    dom = document.createElement(vnode.nodeName)
    setAttrs(dom.vnode.props)
    parent.appendChild(dom)

    for (let i = 0; i < vnode.children.length; i++) {
      render(vnode.children[i], dom)
    }

  } else if (typeof vnode.nodeName === 'function') {
    let fn = vnode.nodeName
    let innerVnode = fn.prototype.render()
    render(innerVnode, parent)
  }
}


function setAttrs(dom, props) {
    const propKeys = Object.keys(props)
    propKeys.forEach(key => {
        const value = props[key]

        if(key == "className") {
            dom.setAttribute("class", value)
            return
        }

        if(key == "style") {
            if(typeof value == "string") {
                dom.style.cssText = value
            }

            if(typeof value == "object") {
                for (let i in value) {
                    dom.style[i] =  value[i]
                }
            }
            return

        }

        if(key[0] == "o" && key[1] == "n") {
            const capture = (key.indexOf("Capture") != -1)
            dom.addEventListener(key.substring(2).toLowerCase(), capture)
            return
        }

        dom.setAttribute(key, value)
    })
}
