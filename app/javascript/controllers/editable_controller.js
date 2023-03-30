import { Controller } from "@hotwired/stimulus"
import { turndownService } from "../lib/turndown_service"

import rangy from "rangy";
import "rangy/lib/rangy-textrange";
import { show_format_selection_menu } from "../lib/context_menus";


export default class extends Controller {
  click(event) {
    this.element.setAttribute("contenteditable", "true")
    this.element.focus()
  }

  blur(event) {
    if (this.element.hasAttribute('contenteditable')){
      this.element.removeAttribute("contenteditable");
    }

    this.save();
  }

  keyDown(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      this.element.removeAttribute("contenteditable");
    }
  }

  save() {
    // Convert the element this controller is attached to
    let markdown = turndownService().turndown(this.element)

    // // Dynamically fill out the form data and submit
    this.element.querySelector("#data").value = markdown
    this.element.querySelector("form").requestSubmit()
  }

  mouseDown(event) {
    rangy.getSelection().removeAllRanges()
  }

  mouseUp(event) {
    // get the current selection from window
    let selection = rangy.getSelection()

    // we can return early when the selection is collapsed
    if (selection.isCollapsed) { return }

    // Trim whitespace from the selection
    selection.trim()

    // show format selection menu
    show_format_selection_menu(this.element)
  }  
}