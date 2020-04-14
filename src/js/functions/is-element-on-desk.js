const isElementOnDesk = (target, desk) => {
  return !((target.x < desk.x + 4 || target.x + target.width > desk.x + desk.width - 4) ||
    (target.y < desk.y + 4 || target.y + target.height > desk.height - 4));
}

export default isElementOnDesk;