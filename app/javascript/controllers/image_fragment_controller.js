import { Controller } from "@hotwired/stimulus";
import { navigator } from "@hotwired/turbo";


export default class extends Controller {
  floatRight(event) {
    event.preventDefault();
    let form_id = this.element.parentElement.parentElement.dataset.formId;
    let form = document.getElementById(form_id);
    form.querySelector("#parent_classes").value = "text-end";
    form.querySelector('input[type="submit"]').click();
  }
  floatLeft(event) {
    event.preventDefault();
    let form_id = this.element.parentElement.parentElement.dataset.formId;
    let form = document.getElementById(form_id);
    form.querySelector("#parent_classes").value = "text-start";
    form.querySelector('input[type="submit"]').click();
  }
  floatCenter(event) {
    event.preventDefault();
    let form_id = this.element.parentElement.parentElement.dataset.formId;
    let form = document.getElementById(form_id);
    form.querySelector("#parent_classes").value = "text-center";
    form.querySelector('input[type="submit"]').click();
  }
}