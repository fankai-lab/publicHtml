let Module = {};
window.Module = Module;
let wasmLoader = async function (config) {
    if (!config.el || typeof config.el != "object") {
        throw new Error("挂载元素不能为空");
    }
    let canvas = document.createElement("canvas");
    canvas.id = "qtcanvas";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.cursor = "default";
    canvas.setAttribute("contenteditable", true);
    canvas.oncontextmenu = function (e) {
        e.preventDefault();
    };
    config.el.appendChild(canvas);
    config.canvas = canvas;
    if (config.path === undefined) {
        config.path = "assets";
    }
    if (config.path.length > 0 && !config.path.endsWith("/")) {
        config.path = config.path.concat("/");
    }

    loadEmscriptenModule("SSmap");

    function fetchResource(filePath) {
        let fullPath = config.path + filePath;
        return fetch(fullPath).then(function (response) {
            if (response.ok) {
                return response;
            }
        });
    }

    function fetchText(filePath) {
        return fetchResource(filePath).then(function (response) {
            return response.text();
        });
    }

    function fetchThenCompileWasm(response) {
        return response.arrayBuffer().then(function (data) {
            return WebAssembly.compile(data);
        });
    }

    function fetchCompileWasm(filePath) {
        return fetchResource(filePath).then(function (response) {
            if (typeof WebAssembly.compileStreaming !== "undefined") {
                return WebAssembly.compileStreaming(response).catch(
                    function () {
                        return fetchThenCompileWasm(response);
                    }
                );
            } else {
                return fetchThenCompileWasm(response);
            }
        });
    }

    async function loadEmscriptenModule(applicationName) {
        let msg = "Error: ";
        if (typeof WebAssembly === "undefined") {
            msg += "WebAssembly is not supported";
            printError(msg);
            return;
        }
        if (!webGLSupported()) {
            msg += "WebGL is not supported";
            printError(msg);
            return;
        }

        let emscriptenModuleSource = await fetchText(applicationName + ".js");
        let wasmModule = await fetchCompileWasm(applicationName + ".wasm");
        try {
            completeLoadEmscriptenModule(emscriptenModuleSource, wasmModule);
        } catch (error) {
            msg += error.message;
            printError(msg);
        }
    }

    function completeLoadEmscriptenModule(emscriptenModuleSource, wasmModule) {
        Module.instantiateWasm = function (imports, successCallback) {
            WebAssembly.instantiate(wasmModule, imports).then(function (
                instance
            ) {
                successCallback(instance, wasmModule);
            });
            return {};
        };
        Module.locateFile =
            Module.locateFile ||
            function (filename) {
                return config.path + filename;
            };
        Module.print =
            Module.print ||
            function (text) {
                if (config.stdoutEnabled) console.log(text);
            };
        Module.printErr =
            Module.printErr ||
            function (text) {
                if (
                    text.startsWith !== undefined &&
                    text.startsWith("bad name in getProcAddress:")
                ) {
                    return;
                }
                if (config.stderrEnabled) console.log(text);
            };

        Module.mainScriptUrlOrBlob = new Blob([emscriptenModuleSource], {
            type: "text/javascript",
        });
        Module.qtCanvasElements = [config.canvas];
        self.eval(emscriptenModuleSource);
    }

    function printError(text) {
        let span = document.createElement("span");
        span.innerText = text;
        span.style.cssText = `
            position: absolute;
            left: 50%;
            top: 2.5em;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            line-height: 1.5;
        `;
        config.el.appendChild(span);
        console.error(text);
    }

    function webGLSupported() {
        // We expect that WebGL is supported if WebAssembly is; however
        // the GPU may be blacklisted.
        try {
            var canvas = document.createElement("canvas");
            return !!(
                window.WebGLRenderingContext &&
                (canvas.getContext("webgl") ||
                    canvas.getContext("experimental-webgl"))
            );
        } catch (e) {
            return false;
        }
    }

    let GlobalViewer = await new Promise((revsole) => {
        window.initScene = function () {
            window.GlobalViewer.canvasEl = canvas;
            revsole([SSmap, window.GlobalViewer]);
        };
    });
    return GlobalViewer;
};

export default wasmLoader;
