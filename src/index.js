/* Nameless constructor: */

const Nameless = (function () {

  /* Create component */
  function createComponent(type, attributes = {}, ...children) {
    const childElements = [].concat(...children).map(
      child => {
        if (child != null && child != true && child != false) {
          return child instanceof Object
            ? child
            : createComponent("text", {
              textContent: child
            })
        }
      });
    return {
      type,
      children: childElements,
      props: object.assign({ children: childElements }, attributes)
    }
  }

  return createComponent
}());
