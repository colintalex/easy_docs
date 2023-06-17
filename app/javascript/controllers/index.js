// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import AddDocController from "./add_doc_controller"
application.register("add-doc", AddDocController)

import AddFragmentController from "./add_fragment_controller"
application.register("add-fragment", AddFragmentController)

import ChangeFragmentController from "./change_fragment_controller"
application.register("change-fragment", ChangeFragmentController)

import EditableController from "./editable_controller"
application.register("editable", EditableController)

import FormatController from "./format_controller"
application.register("format", FormatController)

import SortableController from "./sortable_controller"
application.register("sortable", SortableController)
