# stylelint-config-xop

Configuration for [Stylelint](https://github.com/stylelint/stylelint) with SCSS syntax.

Current configuration is compliant with [version 4.4.0](https://github.com/stylelint/stylelint/releases/tag/4.4.0).


## Install

```bash
$ npm install --save-dev stylelint-config-xop
```


## Usage

In your `.stylelintrc` or `config.json`:

```json
{
  "extends": "stylelint-config-xop",
  "rules": {

  }
}
```

[More info](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md) in official docs.


## All others

You can run tests and check if current version of Stylelint is compliant with the current config:

```bash
$ npm test
```

Put your `*.scss` in `/examples` folder and lint them along with the present files:

```bash
$ npm run lint
```


## [License (MIT)](LICENSE)
