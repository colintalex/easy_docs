// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
import "@fortawesome/fontawesome-free/js/all";
import tocbot from "tocbot";

tocbot.init({
  tocSelector: ".js-toc",
  contentSelector: ".fragments-container",
  headingSelector: "h1, h2, h3",
  scrollSmoothOffset: -150,
  hasInnerContainers: true,
  headingsOffset: 150,
});

document.documentElement.addEventListener("turbo:frame-render", function (e) {
  tocbot.refresh();
});

document.documentElement.addEventListener("turbo:load", function (e) {
  tocbot.refresh();
});

let scrollTop = 0;

addEventListener("turbo:click", ({ target }) => {
  if (target.hasAttribute("data-turbo-preserve-scroll")) {
    scrollTop = document.scrollingElement.scrollTop;
  }
});

addEventListener("turbo:load", () => {
  if (scrollTop) {
    document.scrollingElement.scrollTo(0, scrollTop);
  }

  scrollTop = 0;
});