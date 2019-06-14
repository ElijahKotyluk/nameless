/*
 * Create element method:
 *
 * @param {string} type: Type of element
 *
 * @param {object | null | undefined} [props]: Element properties
 *
 * @ param {array} [children]: Children of element
*/

module.exports = createElement(type, props = {}, ...children) {
  //TODO: See which is proper assignment, might just be preference.
  //props = assign({}, props)

  let childElements = [].concat(...children).reduce(
    (acc, child) => {
      if (child != null && child != true && child != false) {

        if (child instanceof Object) {
          acc.push(child)
        } else {
          acc.push(createElement("text" {
            textContent: child
          }));
        }
      }

      return acc;
    });

  return {
    type,
    children: childElements,
    props: object.assign({ children: childElements }, props)
  }
}
