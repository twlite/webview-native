# webview-native

Native webview bindings for Node.js


## Installing webview-native

Installing webview-native requires a [supported version of Node and Rust](https://github.com/neon-bindings/neon#platform-support).

You can install the project with npm. In the project directory, run:

```sh
$ npm install webview-native
```

This fully installs the project, including installing any dependencies and running the build.

## Quick Example

```js
const WebView = require("webview-native");
const webview = new WebView({
    title: "Hello World",
    content: `
    <!DOCTYPE html>
    <html>
        <head>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                }

                body {
                    background-color: #2e2e2e;
                    color: #ffffff;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <h1>Hello from webview-native</h1>
        </body>
    </html>
    `
});

webview.createWindow();
```

### Preview
![](https://i.imgur.com/n7y13AA.png)