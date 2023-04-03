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
  // For headings inside relative or absolute positioned containers within content.
  hasInnerContainers: true,
});