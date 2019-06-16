/*
 * Create element method:
 *
 * @param {string} type: Type of element
 *
 * @param {object | null | undefined} [props]: Element properties
 *
 * @ param {array} [children]: Children of element
*/

export function createElement(type, props, ...children) {
  props = assign({}, props)

  let childElements = [].concat(...children).reduce(
    (acc, child) => {
      if (child != null && child != true && child != false) {

        if (child instanceof Object) {
          acc.push(child)
        } else {
          acc.push(createElement("text", {
            textContent: child
          }));
        }
      }

      return acc;
    });

  return {
    type,
    children: childElements,
    props: props || {}
  }
}
