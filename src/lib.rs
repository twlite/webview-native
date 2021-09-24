use neon::prelude::*;
use web_view::*;

fn create_window(mut cx: FunctionContext) -> JsResult<JsUndefined> {
    let title = cx.argument::<JsString>(0)?.value(&mut cx);
    let is_url = cx.argument::<JsBoolean>(1)?.value(&mut cx);
    let source = cx.argument::<JsString>(2)?.value(&mut cx);
    let width = cx.argument::<JsNumber>(3)?.value(&mut cx);
    let height = cx.argument::<JsNumber>(4)?.value(&mut cx);

    web_view::builder()
        .title(&title)
        .content(if is_url { Content::Url(&source) } else { Content::Html(&source) })
        .size(width.round().rem_euclid(2f64.powi(32)) as u32 as i32, height.round().rem_euclid(2f64.powi(32)) as u32 as i32)
        .debug(true)
        .user_data(())
        .invoke_handler(|_webview, _arg| Ok(()))
        .run()
        .unwrap();

    Ok(cx.undefined())
}

#[neon::main]
fn main(mut cx: ModuleContext) -> NeonResult<()> {
    cx.export_function("createWindow", create_window)?;
    Ok(())
}
