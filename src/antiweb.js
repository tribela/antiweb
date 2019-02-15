(function() {
    const _window = {};
    const _console = {};

    function breakText(factor) {
        document.body.querySelectorAll('*').forEach(
            elem => {
                for (let node of elem.childNodes) {
                    if (node.nodeType === Node.TEXT_NODE) {
                        node.textContent = node.textContent.replace(/\S/mg, char => Math.random() < factor ? '\ufffd' : char);
                    }
                }
            });
    }

    function breakWindow(factor) {
        const keys = [
            'Infinity',
            'NaN',
            'undefined',
            'null',

            'eval',
            'uneval',
            'isFinite',
            'isNaN',
            'parseFloat',
            'parseInt',
            'decodeURI',
            'decodeURIComponent',
            'encodeURI',
            'encodeURIComponent',
            'escape',
            'unescape',
            'setTimeout',
            'setInterval',

            'Object',
            'Function',
            'Boolean',
            'Symbol',
            'Error',
            'EvalError',
            'InternalError',
            'RangeError',
            'ReferenceError',
            'SyntaxError',
            'TypeError',
            'URIError',

            'Number',
            'Math',
            'Date',

            'String',
            'RegExp',

            'Array',
            'Int8Array',
            'Uint8Array',
            'Uint8ClampedArray',
            'Int16Array',
            'Uint16Array',
            'Int32Array',
            'Uint32Array',
            'Float32Array',
            'Float64Array',

            'Map',
            'Set',
            'WeakMap',
            'WeakSet',

            'SIMD',

            'ArrayBuffer',
            'SharedArrayBuffer',
            'Atomics',
            'DataView',
            'JSON',

            'Promise',
            'Generator',
            'GeneratorFunction',
            'AsyncFunction',

            'Reflect',
            'Proxy',

            'Intl',

            'WebAssembly',
        ];

        const _Math = Math;
        for (let key of keys) {
            _window[key] = window[key];
            if (_Math.random() < factor) {
                delete window[key];
            }
        }

    }

    function breakConsole(factor) {
        if (factor <= 0) return;

        for (let key of ['log', 'debug', 'error', 'info']) {
            _console[key] = console[key];
            delete console[key];
        }
    }

    function breakClick(factor) {
        document.addEventListener('click', (event) => {
            if (_window.Math.random() < factor) {
                event.preventDefault();
            }
        });
    }

    function breakElement(factor) {
        const keys = [
            'append',
            'appendChild',
            'insertBefore',
            'removeChild',
            'getAttribute',
            'setAttribute',
            'addEventListener',
            'removeEventListener',
        ];

        for (let key of keys) {
            if (_window.Math.random() < factor) {
                Element.prototype[key] = {};
            }
        }
    }

    const ua = navigator.userAgent;
    const threshold = parseFloat(document.currentScript.getAttribute('data-threshold')) || 0.7;
    const textThreshold = parseFloat(document.currentScript.getAttribute('data-text-threshold')) || threshold;
    // Windows && Chrome = Break
    const factor = (
        1
        * /Windows/.test(ua)
        * /Chrome/.test(ua)
    ) ? 1 : 0;
    if (factor) {
        console.log('Anti-web');
    }
    breakText(factor * textThreshold);
    breakWindow(factor * threshold);
    breakConsole(factor * threshold);
    breakClick(factor * threshold);
    breakElement(factor * threshold);

})();
