# parcel-optimizer-react-use-client
Parcel optimizer plugin to allow use client directives in React Components


[Parcel](https://parceljs.org/) is a great tool for building libraries and applications.
It is fast, easy to use and has a lot of features out of the box.
But, when trying to use it to bundle a [React](https://reactjs.org/) component library I found that when I attempted to make the components compatible with server components it broke 'use client' directives in my components.

This plugin is a workaround to allow the use of 'use client' directives in React components when using Parcel.


## Installation

```bash
npm install --save-dev parcel-optimizer-react-use-client
```

Next, add the plugin to your `.parcelrc` file in the `optimizers` section:
```json
{
  "extends": "@parcel/config-default",
  "optimizers": {
    "*.js, *.mjs, *.cjs": ["...", "parcel-optimizer-react-use-client"]
  }
}
```

## Usage

Parcel will automatically use the plugin when bundling your project. You don't need to do anything else.


## The Issue
* When using Parcel to bundle a React component library, the 'use client' directive in components isn't set to the 1st line of the file which is required.
* This is a common issues for people trying to use Parcel to bundle React components that are compatible with server components/[Next.js](https://nextjs.org/) components.
Saw a few people were having this [issue](https://github.com/parcel-bundler/parcel/issues/9050) and thought I'd share my workaround.


## Support
If you find this plugin useful, feel free to [donate on Ko-fi](https://ko-fi.com/slamerz) ☕️
