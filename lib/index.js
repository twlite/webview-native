// @ts-check
const { Window } = require("./binding");

class WebView {
    constructor() {
        this.width = 480;
        this.height = 720;
        this.title = "Node WebView Native";
        this.resizable = false;
        this.debugMode = false;
        this.content = "<h1>Hello Node.js WebView</h1>";
        this.htmlMode = true;
    }

    /**
     * Set width of the window
     * @param {number} w Width value
     */
    setWidth(w) {
        this.width = w;
        return this;
    }

    /**
     * Set height of the window
     * @param {number} h Height value
     */
    setHeight(h) {
        this.height = h;
        return this;
    }

    /**
     * Set window title
     * @param {string} title The title
     */
    setTitle(title) {
        this.title = title;
        return this;
    }

    /**
     * Set debug mode
     * @param {boolean} m The debug mode
     */
    setDebugMode(m) {
        this.debugMode = Boolean(m);
        return this;
    }

    /**
     * Set resizable mode
     * @param {boolean} m The resizable mode
     */
    setResizable(m) {
        this.resizable = Boolean(m);
        return this;
    }

    /**
     * Set contents for the webview window
     * @param {string} content The webview content to set
     * @param {"html" | "url"} [mode = "html"] Render mode for this content
     */
    setContent(content, mode = "html") {
        this.htmlMode = mode === "html";
        this.content = `${content}`;
        return this;
    }

    /**
     * Build webview window
     */
    build() {
        const win = new Window({
            content: this.content,
            height: this.height,
            debug: Boolean(this.debugMode),
            renderAsHtml: Boolean(this.htmlMode),
            resizable: Boolean(this.resizable),
            title: this.title,
            width: this.width
        });

        return win;
    }
}

module.exports = { WebView, Window };
