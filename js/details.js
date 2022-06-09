let title = document.querySelector("title");
const mainContent = document.querySelector(".main");
const portfolioSpecific = document.querySelector(".portfolio-spec");
const projectContent = document.querySelector(".project-content");
const portfolioTitle = document.querySelector("#title");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

import { portfolio } from "./data/portfolio-data.js";

const url = "details.html?id=" + id;

title.innerHTML = `Onedesign | ${portfolio[id].name}`;

portfolioTitle.innerHTML += `${portfolio[id].title}`;

portfolioSpecific.innerHTML += `

            <div class="product-big">
            <div class="product-bigimage">
              <img src="${portfolio[id].imgHigh}" alt="Picture of the project ${portfolio[id].name}"/>
            </div>
            <div class="breaker"></div>
            <div class="product-bigtext">
              <h3>${portfolio[id].name}</h3>
              <p>${portfolio[id].descriptions}</p>
            </div>
            <div class="">
            <li><a href="${portfolio[id].urlGithub}" class="product-link" target="_blank"><img src="assets/GitHub-Mark-32px.png" class="github" /></a><p>Github</p></li>
            <li><a href="${portfolio[id].url}" class="product-link" target="_blank"><span class="material-icons icon">web</span></a><p>Homepage</p></li>
            </div>
          </div>
`;

console.log(portfolio[id].name);
console.log(portfolio[id].name);
console.log(id);
