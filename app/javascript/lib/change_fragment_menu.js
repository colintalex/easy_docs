import { post } from "jquery";
import tippy from "tippy.js";

const change_fragment_h1 = `
<a class="dropdown-item" data-action="mousedown->change-fragment#h1">
  <span class="has-text-weight-bold">Heading 1</span>
</a>
`;

const change_fragment_h2 = `
<a class="dropdown-item" data-action="mousedown->change-fragment#h2">
  <span class="has-text-weight-semibold">Heading 2</span>
</a>
`;

const change_fragment_h3 = `
<a class="dropdown-item" data-action="mousedown->change-fragment#h3">
  Heading 3
</a>
`;

const change_fragment_p = `
<a class="dropdown-item" data-action="mousedown->change-fragment#paragraph">
  Paragraph
</a>
`;

const change_fragment_pre = `
<a class="dropdown-item" data-action="mousedown->change-fragment#pre">
  Code Block
</a>
`;

const change_fragment_delete = `
<a class="dropdown-item has-text-danger" data-action="mousedown->change-fragment#delete">
  Delete
</a>
`;

const img_frag_right = `
<a class="btn btn-primary" data-controller="image-fragment" data-action="mousedown->image-fragment#floatRight">
  Right
</a>
`;

const img_frag_left = `
<a class="btn btn-primary" data-controller="image-fragment" data-action="mousedown->image-fragment#floatLeft">
  Left
</a>
`;

const img_frag_center = `
<a class="btn btn-primary" data-controller="image-fragment" data-action="mousedown->image-fragment#floatCenter">
  Center
</a>
`;
function imgFragAlign(position, current_classes, form_id) {
  const MAPPING = {
    "text-start": "Left",
    "text-center": "Center",
    "text-end": "Right"
  };

  let reg_matches = current_classes.match(/\btext-\w+\b/g);
  let active = reg_matches != null && MAPPING[reg_matches] == position ? "active" : "";
  return `
    <a class="btn menu-btn ${active}" data-form-id="${form_id}"data-action="mousedown->image-fragment#float${position}">
      ${position}
    </a>
    `;
}

function imgFragRoundedBorderPx(percent, current_classes, form_id){
  let reg_matches = current_classes.match(/\brounded-\w+\b/g);
  let active = reg_matches != null && reg_matches[0].includes(percent) ? "active" : "";

  return `
    <a class="btn menu-btn ${active}" data-percent="${percent}" data-form-id="${form_id}"data-action="mousedown->image-fragment#roundedImage">
      ${percent}px
    </a>
  `;
}

function change_fragment_menu() {
  return `
  <div class="change-fragment-menu">
    <div class="dropdown-content context-menu">
      ${change_fragment_h1}
      ${change_fragment_h2}
      ${change_fragment_h3}
      ${change_fragment_p}
      ${change_fragment_pre}
      <hr class="dropdown-divider">
      ${change_fragment_delete}
    </div>
  </div>
  `;
}

function change_img_fragment_menu(form_id) {
    let current_classes = document
      .getElementById(form_id)
      .querySelector("#classes").value;
    let parent_classes = document
      .getElementById(form_id)
      .querySelector("#parent_classes").value;

    return `
  <div class="change-img-fragment-menu">
    <div class="dropdown-content context-menu" data-controller="image-fragment" data-form-id="${form_id}">
      <div class="btn-group">
      ${imgFragAlign("Left", parent_classes, form_id)}
      ${imgFragAlign("Center", parent_classes, form_id)}
      ${imgFragAlign("Right", parent_classes, form_id)}
      </div>
      <div class="btn-group">
      ${imgFragRoundedBorderPx(0, current_classes, form_id)}
      ${imgFragRoundedBorderPx(16, current_classes, form_id)}
      ${imgFragRoundedBorderPx(24, current_classes, form_id)}
      ${imgFragRoundedBorderPx(36, current_classes, form_id)}
      </div>
      <div class="btn-group">
        <a class="btn menu-btn" data-form-id="${form_id}" href="#" data-action="mousedown->image-fragment#rotateCW">Rotate CW</a>
        <a class="btn menu-btn" data-form-id="${form_id}" href="#" data-action="mousedown->image-fragment#rotateCCW">Rotate CCW</a>
        <a class="btn menu-btn" data-form-id="${form_id}" href="#" data-action="mousedown->image-fragment#reflect">Flip</a>
      </div>
      <div class="btn-group">
      ${change_fragment_delete}
      </div>
    </div>
  </div>
  `;
}

export function show_change_fragment_menu(element) {
  return tippy(element, {
    allowHTML: true,
    content: change_fragment_menu(),
    interactive: true,
    interactiveBorder: 100,
    hideOnClick: true,
    placement: "left-start",
    offset: [-0, 0],
    theme: "dark",
    onHidden: (instance) => {
      instance.destroy();
    },
  }).show();
}

export function show_change_img_fragment_menu(element, form_id) {
  return tippy(element, {
    allowHTML: true,
    content: change_img_fragment_menu(form_id),
    interactive: true,
    interactiveBorder: 1050,
    hideOnClick: true,
    placement: "bottom",
    offset: [-0, 0],
    theme: "dark",
    onHidden: (instance) => {
      instance.destroy();
    },
  }).show();
}
