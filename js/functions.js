const mainContent = document.querySelector(".main");
const portfolioContent = document.querySelector(".portfolio-content");
const projectContent = document.querySelector(".project-content");

import { portfolio } from "./data/portfolio-data.js";

export function importPortfolio() {
  function importPortfolio() {
    try {
      for (let i = 0; i < portfolio.length; i++) {
        const text = portfolio[i].descriptions.slice(0, 235);
        if (portfolio[i].completed === true) {
          portfolioContent.innerHTML += `
          <a href="details.html?id=${portfolio[i].id}" class="product-link">
          <div class="product-card">
          <div class="product-image">
            <img src="${portfolio[i].imgThumb}" />
          </div>
          <div class="breaker"></div>
          <div class="product-text">
            <h4>${portfolio[i].name}</h4>
            <p>${text}</p>
          </div>
        </div>
        </a>`;
        }
        console.log(portfolio[i].completed === true);
      }
    } catch (error) {
      portfolioContent.innerHTML = `Could not run the content`;
      console.log(error);
    }
  }

  importPortfolio();
}

export function importProject() {
  function importProject() {
    try {
      for (let i = 0; i < portfolio.length; i++) {
        if (portfolio[i].inProgress === true) {
          projectContent.innerHTML += `
            <div class="product-card">
            <div class="product-image">
              <img src="${portfolio[i].imgThumb}" />
            </div>
            <div class="breaker"></div>
            <div class="product-text">
              <h4>${portfolio[i].name}</h4>
              <p>${portfolio[i].descriptions}</p>
            </div>
          </div>`;
        }
      }
    } catch (error) {
      projectContent.innerHTML = `Could not run the content`;
      console.log(error);
    }
  }

  importProject();
}
