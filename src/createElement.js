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

    // iterate through children;
    for(let i = 0; i < children.length; i++){
        // If current index of children is a Boolean, Undefined, or Null continue to next iteration:
        if (typeof children[i] === 'boolean' || children[i] === undefined || children === null) continue

        // If current index of children is an Array =>
        // concatenate the current index with childElements;
        // else => push the current index into childElements;
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
