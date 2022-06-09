let title = document.querySelector("title");
const mainContent = document.querySelector(".main");
const portfolioSpecific = document.querySelector(".portfolio-spec");
const projectContent = document.querySelector(".project-content");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

import { portfolio } from "./data/portfolio-data.js";

const url = "details.html?id=" + id;

title.innerHTML = `Onedesign | ${portfolio[id].name}`;

portfolioSpecific.innerHTML += `

            <div class="product-big">
            <div class="product-bigimage">
              <img src="${portfolio[id].imgHigh}" />
            </div>
            <div class="breaker"></div>
            <div class="product-bigtext">
              <h3>${portfolio[id].name}</h3>
              <p>${portfolio[id].descriptions}</p>
            </div>
          </div>
`;

console.log(portfolio[id].name);
console.log(portfolio[id].name);
console.log(id);
