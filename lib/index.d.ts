import { Window } from "./binding";

export class WebView {
    public width: number;
    public height: number;
    public title: string;
    public resizable: boolean;
    public debugMode: boolean;
    public content: string;
    public htmlMode: boolean;

    public setWidth(w: number): this;
    public setHeight(h: number): this;
    public setTitle(title: string): this;
    public setDebugMode(m: boolean): this;
    public setResizable(m: boolean): this;
    public setContent(content: string, mode?: "html" | "url"): this;
    public build(): Window;
}

export { Window };
