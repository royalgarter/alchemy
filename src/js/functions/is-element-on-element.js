const isElementOnElement = (target, element) => {
  return (target.x >= element.x - element.width && target.x <= element.x + element.width)
    && (target.y + 30 >= element.y && target.y + 30 <= element.y + element.height)
}

export default isElementOnElement;