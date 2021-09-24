const native = require("../dist/webviewjs.node");
const { version } = require("../package.json");

class WebView {
    static version = version;

    constructor(initOptions = {}) {
        this.options = {
            title: initOptions.title || "webview-js",
            content: initOptions.content || "",
            isContentURL: Boolean(initOptions.isContentURL || false),
            height: initOptions.height || 720,
            width: initOptions.width || 480
        };
    }

    createWindow() {
        native.createWindow(this.options.title, this.options.isContentURL, this.options.content, this.options.width, this.options.height);
    }
}

module.exports = WebView;