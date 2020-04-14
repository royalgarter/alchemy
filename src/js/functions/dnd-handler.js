import ELEMENTS from "../Elements/elements";
import ElementNode from "../ElementNode/element-node";
import isElementOnDesk from "./is-element-on-desk";
import isElementOnElement from "./is-element-on-element";

const dndHandler = (e, type, library, desk) => {
  e.preventDefault();
  const id = e.target.dataset.id;
  if (!id) return;
  const isOnDesk = type === "desk";
  const newItem = e.target.cloneNode(true);
  if (isOnDesk) e.target.remove();
  newItem.style.position = 'absolute';
  newItem.style.zIndex = 9999;
  if (!isOnDesk) newItem.dataset._id = new Date().getTime();
  document.querySelector(".desk").appendChild(newItem);

  moveAt(e.pageX, e.pageY);
  document.addEventListener('mousemove', onMouseMove);
  newItem.addEventListener('mouseup', onMouseUp);

  function moveAt(pageX, pageY) {
    newItem.style.left = pageX - newItem.offsetWidth / 2 + 'px';
    newItem.style.top = pageY - newItem.offsetHeight / 2 + 'px';
  }

  function onMouseMove(e) {
    moveAt(e.pageX, e.pageY);
  }

  function onMouseUp(e) {
    const targetProps = {
      node: e.target,
      x: e.target.offsetLeft,
      y: e.target.offsetTop,
      width: e.target.offsetWidth,
      height: e.target.offsetHeight,
      _id: e.target.dataset._id
    };
    const deskProps = {
      x: desk.node.offsetLeft,
      y: desk.node.offsetTop,
      width: desk.node.offsetWidth,
      height: desk.node.offsetHeight,
    };

    document.removeEventListener('mousemove', onMouseMove);
    newItem.removeEventListener('mouseup', onMouseUp);

    if ( !isElementOnDesk(targetProps, deskProps) ) {
      newItem.remove();
      desk.updateList();
      return
    }

    desk.updateList();

    desk.list.some((e) => {
      const elementProps = {
        node: e,
        x: e.offsetLeft,
        y: e.offsetTop,
        width: e.offsetWidth,
        height: e.offsetHeight,
        id: e.dataset.id,
        _id: e.dataset._id
      };
      if (targetProps._id !== elementProps._id && isElementOnElement(targetProps, elementProps) ) {
        let elementId = [id, elementProps.id].sort().join("");
        if (ELEMENTS.isElementExists(elementId)) {
          library.add(elementId);
          elementProps.node.remove();
          targetProps.node.remove();

          new ElementNode(ELEMENTS.getElementById(elementId), desk.node, elementProps).appendElement();
        }
      }
    });
  }
};

export default dndHandler;