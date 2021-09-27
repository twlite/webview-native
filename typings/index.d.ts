declare module "webview-native" {
    interface WebViewInitOptions {
        /** The Window title */
        title?: string;
        /** The page content, either html or url */
        content?: string;
        /** Set this to true if you are trying to load url */
        isContentURL?: boolean;
        /** window height */
        height?: number;
        /** window width */
        width?: number;
        /** Debug mode */
        debug?: boolean;
    }

    class WebView {
        /**
         * The module version
         */
        public static version: string;
        /**
         * Creates webview instance
         * @param initOptions Options to initialize webview
         */
        public constructor(initOptions?: WebViewInitOptions);
        /**
         * Creates webview window
         */
        public createWindow(): void;
    }

    export { WebView, WebViewInitOptions };
}