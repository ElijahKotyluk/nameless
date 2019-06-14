
/* Create element method: */
module.exports = createElement(type, attributes = {}, ...children) {
  const childElements = [].concat(...children).map(
    child => {
      if (child != null && child != true && child != false) {
        return child instanceof Object
          ? child
          : createElement("text", {
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
