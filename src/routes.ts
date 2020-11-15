import {LeftoversController} from "./controller/LeftoversController";
import {GenresController} from "./controller/GenresController";

export const Routes = [{
    method: "get",
    route: "/leftovers",
    controller: LeftoversController,
    action: "all"
}, {
    method: "get",
    route: "/leftovers/:id",
    controller: LeftoversController,
    action: "one"
}, {
    method: "post",
    route: "/leftovers",
    controller: LeftoversController,
    action: "save"
}, {
    method: "patch",
    route: "/leftovers/:id",
    controller: LeftoversController,
    action: "fix"
}, {
    method: "delete",
    route: "/leftovers/:id",
    controller: LeftoversController,
    action: "remove"
},{
    method: "get",
    route: "/genres",
    controller: GenresController,
    action: "all"
}, {
    method: "get",
    route: "/genres/:id",
    controller: GenresController,
    action: "one"
}, {
    method: "post",
    route: "/genres",
    controller: GenresController,
    action: "save"
}, {
    method: "patch",
    route: "/genres/:id",
    controller: GenresController,
    action: "fix"
}, {
    method: "delete",
    route: "/genres/:id",
    controller: GenresController,
    action: "remove"
}];