import { Controller } from "@hotwired/stimulus";
import { show_change_fragment_menu } from "../lib/change_fragment_menu";

export default class extends Controller {
  showMenu(event) {
    event.preventDefault();
    show_change_fragment_menu(this.element.querySelector("button"));
  }

  h1(event) {
    event.preventDefault();
    this.change_to("h1");
  }

  h2(event) {
    event.preventDefault();
    this.change_to("h2");
  }

  h3(event) {
    event.preventDefault();
    this.change_to("h3");
  }

  paragraph(event) {
    event.preventDefault();
    this.change_to("p");
  }

  pre(event) {
    event.preventDefault();
    var language = prompt("Language", "plain");
    if (language == null) {
      language = "plain";
    }
    this.change_to("pre", language);
  }

  change_to(element, meta = "") {
    this.element.querySelector("#fragment_element").value = element;
    this.element.querySelector("#fragment_meta").value = meta;
    this.element.querySelector("form").requestSubmit();
  }
}
