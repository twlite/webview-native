extern crate webview;

use webview::{ Content, WebView };
use napi::{Status, Error, Result};

#[napi]
pub struct Window {
    webview: WebView
}

#[napi(object)]
pub struct WebViewInit {
    pub width: i32,
    pub height: i32,
    pub resizable: bool,
    pub debug: bool,
    pub title: String,
    pub content: String,
    pub render_as_html: bool
}

#[napi]
impl Window {
    #[napi(constructor)]
    pub fn new(options: WebViewInit) -> Self {
        let engine = WebView::new(
                options.title,
                create_webview_content(options.content, options.render_as_html),
                options.width,
                options.height,
                options.resizable,
                options.debug
            ).map_err(|e| {
                Error::new(Status::GenericFailure, format!("Failed to initialize webview: {}", e))
            }).unwrap();
        
        Window {
            webview: engine
        }
    }

    #[napi]
    pub fn set_title(&self, title: String) -> Result<()> {
        self.webview.set_title(title).map_err(|e| {
            Error::new(Status::GenericFailure, format!("Failed to set title: {}", e))
        })
    }

    #[napi]
    pub fn evaluate(&self, js: String) -> Result<()> {
        self.webview.eval(js).map_err(|e| {
            Error::new(Status::GenericFailure, format!("Failed to evaluate script: {}", e))
        })
    }

    #[napi(js_name="injectCSS")]
    pub fn inject_css(&self, css: String) -> Result<()> {
        self.webview.inject_css(css).map_err(|e| {
            Error::new(Status::GenericFailure, format!("Failed to inject css: {}", e))
        })
    }

    #[napi]
    pub fn exit(&self) {
        self.webview.exit();
    }

    #[napi]
    pub fn run(&self, sync: bool) {
        if sync {
            self.webview.join();
        } else {
            self.webview.loop_once(sync);
        }
    }
}

fn create_webview_content(c: String, u: bool) -> Content<String> {
    if u {
        Content::Html(c)
    } else {
        Content::Url(c)
    }
}