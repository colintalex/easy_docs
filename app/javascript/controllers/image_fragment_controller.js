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
  roundedImage(event){
    event.preventDefault();
    let radius_percent = event.target.dataset["percent"];
    let form_id = this.element.parentElement.parentElement.dataset.formId;
    let form = document.getElementById(form_id);
    let clean_value = form.querySelector("#classes").value.replaceAll(/rounded-\d+/g, "").trim();
    form.querySelector("#classes").value = `${clean_value} rounded-${radius_percent}`;
    form.querySelector('input[type="submit"]').click();
  }
  reflect(event){
    event.preventDefault();
    let form_id = this.element.parentElement.dataset.formId;
    let form = document.getElementById(form_id);
    let myclass = form.querySelector("input#classes").value;
    let currently_reflected = myclass.includes("reflect-vertically");
    if (currently_reflected){
      let clean_value = myclass.replaceAll("reflect-vertically", "").trim();
      form.querySelector("input#classes").value = clean_value;
    }else{
      form.querySelector("#classes").value = `${myclass} reflect-vertically`;
    }
    form.querySelector('input[type="submit"]').click();
  }
}