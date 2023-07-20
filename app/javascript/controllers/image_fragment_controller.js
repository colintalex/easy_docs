import { Controller } from "@hotwired/stimulus";
import { navigator } from "@hotwired/turbo";


export default class extends Controller {
  CW_ROTATE_MAP = {
    '0': '90',
    '90': '180',
    '180': '270',
    '270': '0',
  };
  CCW_ROTATE_MAP = {
    '0': '270',
    '90': '0',
    '180': '90',
    '270': '180',
  };
  floatRight(event) {
    event.preventDefault();
    let form_id = this.element.dataset.formId;
    let form = document.getElementById(form_id);
    form.querySelector("#parent_classes").value =
      form.querySelector("#parent_classes").value.replaceAll(/text-\w+/g, "").trim() +
      " text-end";
    form.querySelector('input[type="submit"]').click();
  }
  floatLeft(event) {
    event.preventDefault();
    let form_id = this.element.dataset.formId;
    let form = document.getElementById(form_id);
    form.querySelector("#parent_classes").value =
      form.querySelector("#parent_classes").value.replaceAll(/text-\w+/g, "").trim() +
      " text-start";
    form.querySelector('input[type="submit"]').click();
  }
  floatCenter(event) {
    event.preventDefault();
    let form_id = this.element.dataset.formId;
    let form = document.getElementById(form_id);
    form.querySelector("#parent_classes").value =
      form.querySelector("#parent_classes").value.replaceAll(/text-\w+/g, "").trim() +
      " text-center";
    form.querySelector('input[type="submit"]').click();
  }
  roundedImage(event){
    event.preventDefault();
    let radius_percent = event.target.dataset["percent"];
    let form_id = this.element.dataset.formId;
    let form = document.getElementById(form_id);
    let clean_value = form.querySelector("#classes").value.replaceAll(/rounded-\d+/g, "").trim();
    form.querySelector("#classes").value = `${clean_value} rounded-${radius_percent}`;
    form.querySelector('input[type="submit"]').click();
  }
  reflect(event){
    event.preventDefault();
    let form_id = this.element.dataset.formId;
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
  rotateCW(event){
    event.preventDefault();
    let form_id = this.element.dataset.formId;
    let form = document.getElementById(form_id);
    let myclass = form.querySelector("input#classes").value;
    let currently_rotated = /rotate-\d+/.test(myclass);
    
    if (currently_rotated){
      let current_rotate_deg = myclass.match(/rotate-(\d+)/)[1];
      let new_deg = this.CW_ROTATE_MAP[current_rotate_deg];
      let clean_value = form
        .querySelector("#classes")
        .value.replaceAll(/rotate-\d+/g, "")
        .trim();
      form.querySelector("#classes").value = `${clean_value} rotate-${new_deg}`;
    }else{
      let clean_value = form
        .querySelector("#classes")
        .value.replaceAll(/rotate-\d+/g, "")
        .trim();
        form.querySelector("#classes").value = `${clean_value} rotate-90`;
    }
    form.querySelector('input[type="submit"]').click();
  }
  rotateCCW(event){
    event.preventDefault();
    let form_id = this.element.dataset.formId;
    let form = document.getElementById(form_id);
    let myclass = form.querySelector("input#classes").value;
    let currently_rotated = /rotate-\d+/.test(myclass);
    
    if (currently_rotated){
      let current_rotate_deg = myclass.match(/rotate-(\d+)/)[1];
      let new_deg = this.CCW_ROTATE_MAP[current_rotate_deg];
      let clean_value = form
        .querySelector("#classes")
        .value.replaceAll(/rotate-\d+/g, "")
        .trim();
      form.querySelector("#classes").value = `${clean_value} rotate-${new_deg}`;
    }else{
      let clean_value = form
        .querySelector("#classes")
        .value.replaceAll(/rotate-\d+/g, "")
        .trim();
        form.querySelector("#classes").value = `${clean_value} rotate-270`;
    }
    form.querySelector('input[type="submit"]').click();
  }
}