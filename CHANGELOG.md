# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.4] - 2020-08-20

### Changed

* Removed one level of overloads for `patchState`/`onChanges` methods to prevent `error TS2589: Type instantiation is excessively deep and possibly infinite.` error when using `rxjs-observable-store` with TypeScript versions above `3.9.x`.

## [3.0.3] - 2020-06-30

### Changed

* Update `author` in `package.json`.

## [3.0.2] - 2020-06-30

### Added

* Build CommonJS and ESM versions of rxjs-observable-store package.

## [3.0.1] - 2020-06-29

### Changed

* Changed all references from https://jurebajt.com to https://georgebyte.com.

## [3.0.0] - 2020-06-29

### Added

* Added `onChanges` method to `Store`.

### Changed

* Built the rxjs-observable-store package with TypeScript version 3.6.5.

## [2.0.4] - 2019-12-03

### Changed

* Downgraded TypeScript version to 3.5.3.

## [2.0.3] - 2019-12-03

### Changed

* Downgraded TypeScript version to 3.6.3.

## [2.0.2] - 2019-12-03

### Changed

* Updated dependencies.

## [2.0.1] - 2019-09-09

### Changed

* Updated README to include TypeScript version requirement.

## 2.0.0 - 2019-09-09

### Added

* Added `patchState` method to `Store`.
* Added CHANGELOG file.

### Changed

* Improved unit tests' coverage.
* Updated npm dependencies.
* Updated README with API documentation and better usage example.

[3.0.4]: https://github.com/georgebyte/rxjs-observable-store/compare/v3.0.3...v3.0.4
[3.0.3]: https://github.com/georgebyte/rxjs-observable-store/compare/v3.0.2...v3.0.3
[3.0.2]: https://github.com/georgebyte/rxjs-observable-store/compare/v3.0.1...v3.0.2
[3.0.1]: https://github.com/georgebyte/rxjs-observable-store/compare/v3.0.0...v3.0.1
[3.0.0]: https://github.com/georgebyte/rxjs-observable-store/compare/v2.0.4...v3.0.0
[2.0.4]: https://github.com/georgebyte/rxjs-observable-store/compare/v2.0.3...v2.0.4
[2.0.3]: https://github.com/georgebyte/rxjs-observable-store/compare/v2.0.2...v2.0.3
[2.0.2]: https://github.com/georgebyte/rxjs-observable-store/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/georgebyte/rxjs-observable-store/compare/v2.0.0...v2.0.1
