import "./styles/sass.sass";

import Library from "./js/Library/library";
import Save from "./js/Save/save";
import Menu from "./js/Menu/menu";
import Desk from "./js/Desk/desk";
import setDndHandler from "./js/functions/set-dnd-handler";

const save = new Save();
const library = new Library(save);
const desk = new Desk(library);

setDndHandler(library, desk);
new Menu(save, library);
