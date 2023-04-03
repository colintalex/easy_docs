import { Controller } from "@hotwired/stimulus";
import { Sortable } from "sortablejs";

export default class extends Controller {
  connect() {
    this.sortable = Sortable.create(this.element, {
      direction: "vertical",
      swapThreshold: 0.5,
      invertSwap: true,
      animation: 150,
      onEnd: this.moved.bind(this),
      handle: '.handle',
      onStart: function (evt) {
      }
    });
  }

  moved(event) {
    event.item.querySelector("#position").value = event.newIndex + 1;
    console.log(event.item.querySelector("form"));
    event.item.querySelector("form").requestSubmit();
  }
}
