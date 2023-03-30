import { Controller } from "@hotwired/stimulus";
import $ from "jquery";

export default class extends Controller {
  showNewCard(event) {
    event.preventDefault();
    $("#form_wrapper").removeClass('hiddenn');
    $("#add_new_doc_btn").addClass('hiddenn');
  }
  cancelNewCard(event) {
    event.preventDefault();
    $("#form_wrapper").addClass('hiddenn');
    $("#add_new_doc_btn").removeClass('hiddenn');
  }

  save(event){
    event.preventDefault();
    this.element.parentElement.requestSubmit();
  }
}