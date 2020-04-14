import dndHandler from "./dnd-handler";

const setDndHandler = (library, desk) => {
  library.node.addEventListener("mousedown", (e) => dndHandler(e, "library", library, desk));
  desk.node.addEventListener("mousedown", (e) => dndHandler(e, "desk", library, desk));
}

export default setDndHandler;