import { Controller } from "@hotwired/stimulus";
import { navigator } from "@hotwired/turbo";

import {
  show_change_fragment_menu,
  show_change_img_fragment_menu,
} from "../lib/change_fragment_menu";
import tocbot from "tocbot";

export default class extends Controller {
  fragment_type = "p";

  connect() {
    let classes = this.element.classList;
    if (classes.contains("h1")) {
      this.fragment_type = "h1";
    }
    if (classes.contains("h2")) {
      this.fragment_type = "h2";
    }
    if (classes.contains("h3")) {
      this.fragment_type = "h3";
    }
    if (classes.contains("p")) {
      this.fragment_type = "p";
    }
    if (classes.contains("pre")) {
      this.fragment_type = "pre";
    }
  }

  showMenu(event) {
    event.preventDefault();
    show_change_fragment_menu(this.element.querySelector(".change_frag_menu_btn"));
  }

  showImageMenu(event) {
    event.preventDefault();
    let form_id = this.element.querySelector("form").id;
    show_change_img_fragment_menu(this.element.querySelector(".change_frag_menu_btn"), form_id);
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
    this.element.querySelector("#element").value = element;
    this.element.querySelector("#meta").value = meta;

    this.element
      .querySelector(".change-fragment-form")
      .querySelector('input[type="submit"]')
      .click();
  }

  delete(event) {
    this.element
    .querySelector('.delete_link')
    .click();
    
    this.element.parentElement.parentElement.remove();
    tocbot.refresh();
  }
}
