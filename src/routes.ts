import {LeftoversController} from "./controller/LeftoversController";

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
}];