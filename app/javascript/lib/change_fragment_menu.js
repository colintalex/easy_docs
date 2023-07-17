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
function imgFragAlign(position){
  return `
    <a class="btn btn-primary" data-controller="image-fragment" data-action="mousedown->image-fragment#float${position}">
      ${position}
    </a>
    `
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
    return `
  <div class="change-img-fragment-menu">
    <div class="dropdown-content context-menu" data-form-id="${form_id}">
      <div class="btn-group">
      ${imgFragAlign("Left")}
      ${imgFragAlign("Center")}
      ${imgFragAlign("Right")}
      </div>
      <div class="dropdown-content-row">
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
    placement: "bottom",
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
    interactiveBorder: 100,
    hideOnClick: true,
    placement: "bottom",
    offset: [-0, 0],
    theme: "dark",
    onHidden: (instance) => {
      instance.destroy();
    },
  }).show();
}
