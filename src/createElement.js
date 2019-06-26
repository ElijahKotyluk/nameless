/*
 * Create element method:
 *
 * @param {string} type: Type of element
 * @param {object | null | undefined} [props]: Element properties
 * @ param {array} [children]: Children of element
*/

export default function createElement(type, props, ...children) {

    // {array}: Contains children of created element.
    let childElements = []

    for(let i = 0; i < children.length; i++){
        if (typeof children[i] === 'boolean' || children[i] === undefined || children === null) continue
        if(children[i] instanceof Array) {
            childElements = childElements.concat(children[i])
        } else {
            childElements.push(children[i])
        }
    }

    return {
        children: childElements,
        nodeName: type,
        props: props || {}
    }
}
