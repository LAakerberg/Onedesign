const mainContent = document.querySelector(".main");
const projectContent = document.querySelector(".project-content");

import { importPortfolio, importProject } from "../js/functions.js";

importPortfolio();
importProject();

/* const results = portfolio.filter((element) => {
  return element.completed === true;
}); */
