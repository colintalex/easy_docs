// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
import "@fortawesome/fontawesome-free/js/all";
import tocbot from "tocbot";

tocbot.init({
  // Where to render the table of contents.
  tocSelector: ".js-toc",
  // Where to grab the headings to build the table of contents.
  contentSelector: ".fragments-container",
  // Which headings to grab inside of the contentSelector element.
  headingSelector: "h1, h2, h3",
  scrollSmoothOffset: 100,
  // For headings inside relative or absolute positioned containers within content.
  hasInnerContainers: true,
  headingsOffset: 150
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