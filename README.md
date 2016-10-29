<h3 align="center">
	<img width="380" src="https://github.com/DeviantJS/angular-seed-ultimate/blob/master/.github/assets/webpack-multi-logo.png" alt="Angular2 Seed Ultimate">
	<br>
</h3>

## Angular2 Seed Ultimate
Reactive Angular2 Multi-Platform Seed with tooling for Web, Mobile & Desktop Platforms **powered by** [Webpack2](https://webpack.github.io).

#### What's inside Pandora's Box?:
- [Angular2](https://github.com/angular/angular): Angular is a development platform for building mobile and desktop web applications.
  - [ngrx/store](https://github.com/ngrx/store): RxJS powered state management, inspired by **Redux**.
  - [ng2-translate](https://github.com/ocombe/ng2-translate): An implementation of angular translate for Angular 2.
  - [angulartics2](https://github.com/angulartics/angulartics2): Vendor-agnostic analytics for Angular2 applications.
- [NativeScript](https://www.nativescript.org/): Cross platform mobile (w/ native UI) apps.
- [Webpack2](https://github.com/webpack/webpack): A bundler for javascript and friends.
  - [Tree Shaking](https://github.com/webpack/webpack/issues/2867): Keeping those deps tidy ( when it's not broken :/ )
  - [DLL Plugin](https://github.com/webpack/webpack/tree/master/examples/dll): for faster development builds.
  - [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html): a feature to inject updated modules into the active runtime.
  - [Http2 Aggressive Splitting](https://github.com/webpack/webpack/tree/master/examples/http2-aggressive-splitting): Because faster is better.

#### Supported Versions

Please check the [Supported Versions](https://github.com/DeviantJS/angular2-webpack-multiplatform/blob/master/.github/SUPPORTED_VERSIONS.md) documentation **prior** to leveraging the tools for your project or submitting issues.

#### Release Packages
- This is a set of `tools` to **facilitate** the development of Angular2 Multi-Platform applications. The `demo applications` will **NOT** be included in release packages.
- If you choose to attempt to modify & extend the `demo applications` **YOU ARE ON YOUR OWN**

##### Package Contents
- All of the core tools, utilities & configuration files
- Minimal Angular2 application, framework configs and test configs.
- Minimal NativeScript application, framework configs and test tools.
- Minimal Electron application, framework configs and test tools.

Again, the `demo applications` exist to test the tools can support the libraries listed below and validate the development experience / performance.
Using them as a general guide for config / best practices is fine but you are doing yourself a `disservice` by using them as a base for new applications.

Building from `Hello World` will save you time in the long run and you learn more when you don't `cmd+C`.