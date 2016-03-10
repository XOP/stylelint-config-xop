# stylelint-config-xop

Configuration for [Stylelint](https://github.com/stylelint/stylelint) with SCSS syntax.

Compliant with [version 4.4.0](https://github.com/stylelint/stylelint/releases/tag/4.4.0).


## Why

The configuration was build in order to support [CSS Codeguide](https://github.com/XOP/css-codeguide).

> ... code guide is designed for experienced developers in the first place, but hopefully could be a great source of knowledge for the beginners.
> Basically this documentation is about how to work in team with 250+ style files and feel comfortable about that ...

Please notice, that some codestyle rules are not supported yet.  
Refer to [this issue](https://github.com/stylelint/stylelint/issues/866) to stay tuned.


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
