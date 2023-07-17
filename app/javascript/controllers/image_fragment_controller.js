import { Controller } from "@hotwired/stimulus";
import { navigator } from "@hotwired/turbo";


export default class extends Controller {
  floatRight(event) {
    event.preventDefault();
    let form_id = this.element.parentElement.parentElement.dataset.formId;
    let form = document.getElementById(form_id);
    form.querySelector("#parent_classes").value =
      form.querySelector("#parent_classes").value.replaceAll(/text-\w+/g, "").trim() +
      " text-end"; //TODO: what if we have more than one
    form.querySelector('input[type="submit"]').click();
  }
  floatLeft(event) {
    event.preventDefault();
    let form_id = this.element.parentElement.parentElement.dataset.formId;
    let form = document.getElementById(form_id);
    form.querySelector("#parent_classes").value =
      form.querySelector("#parent_classes").value.replaceAll(/text-\w+/g, "").trim() +
      " text-start"; //TODO: what if we have more than one
    form.querySelector('input[type="submit"]').click();
  }
  floatCenter(event) {
    event.preventDefault();
    let form_id = this.element.parentElement.parentElement.dataset.formId;
    let form = document.getElementById(form_id);
    form.querySelector("#parent_classes").value =
      form.querySelector("#parent_classes").value.replaceAll(/text-\w+/g, "").trim() +
      " text-center"; //TODO: what if we have more than one
    form.querySelector('input[type="submit"]').click();
  }
}