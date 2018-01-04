# antiweb

Have you seen messages like this?

> This website doesn't support Netscape 4.0

> This website only support Google Chrome

> This website doesn't support Linux system

Some websites forces us to use Windows and Chrome.
This is **WEB** which must not care about your OS, Browser, Location, etc.
This library is for fxxxing them by break javascript on Windows OS.


## Usage

Include this code snippet to your site:

```html
<script src="https://unpkg.com/anti-web" data-threshold="0.7"></script>
```

### Arguments

| argument | value | description | default |
|:-- |:-- |:-- |:-- |
| `data-threshold` | 0.0 ~ 1.0 | Threshold for breaking. 1 means break all | 0.7 |


## License

MIT license except this:

* Do not modify filtering Browser, OS part.
