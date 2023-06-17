import { Controller } from "@hotwired/stimulus";
import { Sortable } from "sortablejs";
import tocbot from "tocbot";

export default class extends Controller {
  connect() {
    this.sortable = Sortable.create(this.element, {
      direction: "vertical",
      swapThreshold: 0.5,
      invertSwap: true,
      animation: 150,
      handle: '.sortable-handle',
      onEnd: function(evt) {
        evt.item.querySelector("#position").value = evt.newIndex + 1;
        evt.item.querySelector("form").requestSubmit();
        tocbot.refresh();
      }
    });
  }
}
