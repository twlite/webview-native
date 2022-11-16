import test from "ava";

import { WebView, Window } from "../lib/index.js";

test("creates window", (t) => {
    const win = new WebView().build();
    t.is(win instanceof Window, true);
});
