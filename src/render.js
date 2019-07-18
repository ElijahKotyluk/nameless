/*
 * Render method:
 *
 * @param { string || fn } vnode: Node to be rendered.
 * @param { object } parent: Parent node of node being rendered.
*/

export default function render(vnode, parent, component, oldDom) {

  // dom var;
  let dom;

  // if our passed vnode's value is a 'String' value =>
  // we create a text node using the passed vnode param and
  // and assign our newly created text node to our dom variable
  // then we append the assigned dom variable as a child of the passed parent param;
  //
  // else if the vnode's nodeName property's value is a string =>
  //
  if (typeof vnode == 'string' || typeof vnode == 'number') {
    dom = document.createTextNode(vnode);
    component && (component.__rendered = dom);
    parent.appendChild(dom);

    if (oldDom) {
      parent.replaceChild(dom, oldDom);
    } else {
      parent.appendChild(dom);
    }

  } else if (typeof vnode.nodeName == 'string') {
    dom = document.createElement(vnode.nodeName);
    component && (component.__rendered = dom);

    setAttrs(dom, vnode.props);
    parent.appendChild(dom);

    for (let i = 0; i < vnode.children.length; i++) {
      render(vnode.children[i], dom, null, null);
    }

  } else if (typeof vnode.nodeName == 'function') {
    let fn = vnode.nodeName;
    
    let instance = new func(vnode.props);
    comp && (comp.__rendered = instance);

    let innerVnode = inst.render(instance);
    render(innerVnode, parent, instance, oldDom);
  }
}


function setAttrs(dom, props) {
    const propKeys = Object.keys(props);
    
    propKeys.forEach(key => {
        const value = props[key];

        if(key == "className") {
            dom.setAttribute("class", value);
            return;
        }

        if(key == "style") {
            if(typeof value == "string") {
                dom.style.cssText = value;
            }

            if(typeof value == "object") {
                for (let i in value) {
                    dom.style[i] =  value[i];
                }
            }
            return;

        }

        if(key[0] == "o" && key[1] == "n") {
            const capture = (key.indexOf("Capture") != -1);
            dom.addEventListener(key.substring(2).toLowerCase(), value, capture);
            return;
        }

        dom.setAttribute(key, value);
    })
}
