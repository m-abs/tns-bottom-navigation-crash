import Vue from "nativescript-vue";
import LoginFrame from "./frames/LoginFrame";
import * as trace from '@nativescript/core/trace';

trace.setCategories(trace.categories.All);
trace.enable();

new Vue({
    render: h => h("Frame", [h(LoginFrame)])
}).$start();
