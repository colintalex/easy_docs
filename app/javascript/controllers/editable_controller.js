import { Controller } from "@hotwired/stimulus"
import { turndownService } from "../lib/turndown_service"

import rangy from "rangy";
import "rangy/lib/rangy-textrange";
import {
  show_format_selection_menu,
} from "../lib/context_menus";
import tocbot from "tocbot";


export default class extends Controller {
  click(event) {
    let img_el = this.element.querySelector("img");
    if (!img_el){
      this.element.setAttribute("contenteditable", "true")
      this.element.focus()
    }
  }

  blur(event) {
    if (this.element.hasAttribute('contenteditable')){
      this.element.removeAttribute("contenteditable");
    }

    this.saveFragment();
  }

  keyDown(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      this.element.removeAttribute("contenteditable");
    }
  }

  saveFragment() {
    // Convert the element this controller is attached to
    let img_el = this.element.querySelector("img");
    
    if(img_el){
      // TODO: Update fragment model to accomodate for custom classes, we are 'hotwiring' it here with just an image.
      let data       = arrayFrom(img_el.classList).filter((x) => x != "fragment-image").join(' ');
      let parentData = arrayFrom(img_el.parentElement.classList).filter((x) => x != "fragment-image").join(' ');
      this.element.querySelector('#classes').value = data;
      this.element.querySelector("#parent_classes").value = parentData;
    }else{
      let markdown = turndownService().turndown(this.element)
      this.element.querySelector("#data").value = markdown;
    }

    this.element.querySelector("form").requestSubmit();
    tocbot.refresh();
  }

  mouseDown(event) {
    rangy.getSelection().removeAllRanges()
  }

  mouseUp(event) {
    // get the current selection from window
    let selection = rangy.getSelection();
    // we can return early when the selection is collapsed
    if (selection.isCollapsed) { return }
    // Trim whitespace from the selection
    selection.trim()
    // show format selection menu
    show_format_selection_menu(this.element)
  }
}