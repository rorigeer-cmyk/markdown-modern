# markdown-it

[![Build Status](https://img.shields.io/travis/markdown-it/markdown-it/master.svg?style=flat)](https://travis-ci.org/markdown-it/markdown-it)
[![NPM version](https://img.shields.io/npm/v/markdown-it.svg?style=flat)](https://www.npmjs.org/package/markdown-it)

> Markdown parser done right. Fast and easy to extend.

__[Live demo](https://markdown-it.github.io)__

__v4.+ changed internals! Plugins need update.__

- Supports the CommonMark spec + syntax extensions + sugar (URL autolinking, typographer).
- Configurable syntax! You can add new rules and even replace existing ones.

1. Install via npm
2. Use in browser or Node.js
3. Extend with plugins

## Install

```bash
npm install markdown-it --save
```

**browser (CDN):**

- [jsDeliver CDN](http://www.jsdelivr.com/#!markdown-it)
- [cdnjs.com CDN](https://cdnjs.com/libraries/markdown-it)

## Usage

```js
var md = require('markdown-it')();
var result = md.render('# hello');
```

| Feature | Status |
|---------|--------|
| CommonMark | ✅ |
| GFM | ✅ |
| Plugins | ✅ |

![markdown-it logo](https://img.shields.io/npm/v/markdown-it.svg)

__**Bold**__ and __*bold italic*__ and __~~strikethrough~~__ text.

## Examples

By default all rules are enabled, but can be restricted by options. On plugin
load all it's rules are enabled automatically.

__Table of content__

1. [Install](#install)
2. [Usage](#usage)
3. [Examples](#examples)

By default all rules are enabled, but can be restricted by options. On plugin
load all it's rules are enabled automatically.

Inline `code` example.

> [!NOTE]
> This is a GitHub alert

* * *
