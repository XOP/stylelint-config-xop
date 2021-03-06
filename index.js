var config = {
    "rules": {
        "at-rule-empty-line-before": [ "always", {
            except: [ "blockless-group", "first-nested" ],
            ignore: ["after-comment"]
        }],
        "at-rule-no-vendor-prefix": true,

        "block-closing-brace-newline-after": "always",
        "block-closing-brace-newline-before": "always",
        ////"block-closing-brace-space-after": "never",
        "block-closing-brace-space-before": "always-single-line",

        "block-opening-brace-newline-after": "always",
        ////"block-opening-brace-newline-before": "never",
        "block-opening-brace-space-after": "always-single-line",
        "block-opening-brace-space-before": "always",

        "color-hex-case": "lower",
        "color-hex-length": "short",
        ////"color-no-hex": true,
        "color-no-named": true,
        "color-no-invalid-hex": true,

        "comment-empty-line-before": [ "always", {
            except: ["first-nested"],
            ignore: ["stylelint-commands"]
        }],
        "comment-whitespace-inside": "always",

        ////"custom-media-pattern": string,
        ////"custom-property-no-outside-root": true,
        ////"custom-property-pattern": string,

        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-block-no-single-line": true,
        "declaration-block-semicolon-newline-after": "always",
        "declaration-block-semicolon-newline-before": "never-multi-line",
        ////"declaration-block-semicolon-space-after": "always-single-line",
        "declaration-block-semicolon-space-before": "never",
        ////"declaration-block-single-line-max-declarations": int,

        "declaration-colon-newline-after": "always-multi-line",
        "declaration-colon-space-after": "always-single-line",
        "declaration-colon-space-before": "never",
        ////"declaration-no-important": true,

        "font-family-name-quotes": "double-where-recommended",
        "font-weight-notation": "named",

        ////"function-blacklist": string|[],
        "function-calc-no-unspaced-operator": true,
        "function-comma-newline-after": "never-multi-line",
        "function-comma-newline-before": "never-multi-line",
        "function-comma-space-after": "always",
        "function-comma-space-before": "never",
        "function-linear-gradient-no-nonstandard-direction": true,
        ////"function-parentheses-newline-inside": "always-multi-line",
        "function-parentheses-space-inside": "never",
        "function-url-quotes": "double",
        ////"function-whitelist": string|[],
        "function-whitespace-after": "always",

        "indentation": 4,

        "max-empty-lines": 2,
        ////"max-line-length": int,

        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "media-feature-name-no-vendor-prefix": true,
        "media-feature-no-missing-punctuation": true,
        "media-feature-range-operator-space-after": "always",
        "media-feature-range-operator-space-before": "always",

        "media-query-list-comma-newline-after": "always-multi-line",
        "media-query-list-comma-newline-before": "never-multi-line",
        "media-query-list-comma-space-after": "always-single-line",
        "media-query-list-comma-space-before": "never-single-line",
        "media-query-parentheses-space-inside": "never",

        "no-duplicate-selectors": true,
        "no-eol-whitespace": true,
        ////"no-invalid-double-slash-comments": true,
        "no-missing-eof-newline": true,
        "no-unknown-animations": true,

        "number-leading-zero": "never",
        "number-max-precision": 2,
        "number-no-trailing-zeros": true,
        "number-zero-length-no-unit": true,

        ////"property-blacklist": [],
        "property-no-vendor-prefix": true,
        ////"property-unit-blacklist": {},
        ////"property-unit-whitelist": {},
        ////"property-value-blacklist": {},
        ////"property-value-whitelist": {},
        ////"property-whitelist": [],

        "root-no-standard-properties": true,

        "rule-nested-empty-line-before": ["always", {
            except: ["first-nested"],
            ignore: ["after-comment"]
        }],
        "rule-no-duplicate-properties": true,
        "rule-no-shorthand-property-overrides": true,
        "rule-non-nested-empty-line-before": ["always", {
            ignore: ["after-comment"]
        }],
        "rule-properties-order": [
            // not working yet
            //{
            //    order: "strict",
            //    properties: [
            //        "@include",
            //    ],
            //},

            "content",
            {
                emptyLineBefore: "always",
                properties: [
                    "position",
                ],
            },
            {
                order: "flexible",
                properties: [
                    "top",
                    "bottom",
                    "left",
                    "right",
                ],
            },
            "z-index",
            {
                order: "strict",
                emptyLineBefore: "always",
                properties: [
                    "display",
                    "vertical-align",
                ],
            },
            {
                order: "flexible",
                emptyLineBefore: "always",
                properties: [
                    "flex",
                    "justify",
                    "align",
                ],
            },
            {
                order: "flexible",
                properties: [
                    "width",
                    "height",
                    "min-width",
                    "max-width",
                    "min-height",
                    "max-height",
                    "overflow",
                ],
            },
            {
                order: "flexible",
                properties: [
                    "margin",
                    "padding",
                ],
            },
            {
                order: "flexible",
                properties: [
                    "border",
                    "outline",
                    "background",
                ],
            },
            {
                order: "flexible",
                emptyLineBefore: "always",
                properties: [
                    "font",
                    "color",
                    "line-height",
                    "text",
                    "white-space",
                    "word",
                ],
            },
            {
                order: "flexible",
                emptyLineBefore: "always",
                properties: [
                    "opacity",
                    "visibility",
                ],
            },
            {
                order: "flexible",
                emptyLineBefore: "always",
                properties: [
                    "transition",
                    "transform",
                    "animation",
                ],
            },

            // not working yet
            //{
            //    order: "strict",
            //    emptyLineBefore: "always",
            //    properties: [
            //        "media",
            //    ],
            //},
        ],
        "rule-trailing-semicolon": "always",

        "selector-class-pattern": "^[a-z0-9]+(((-){1,2})?((__){1})?[a-z0-9]+)*$",
        "selector-combinator-space-after": "always",
        "selector-combinator-space-before": "always",
        ////"selector-id-pattern": string,
        "selector-list-comma-newline-after": "always",
        "selector-list-comma-newline-before": "never-multi-line",
        ////"selector-list-comma-space-after": "always",
        "selector-list-comma-space-before": "never",
        ////"selector-no-attribute": true,
        ////"selector-no-combinator": true,
        "selector-no-id": true,
        "selector-no-type": true,
        "selector-no-universal": true,
        "selector-no-vendor-prefix": true,
        "selector-pseudo-element-colon-notation": "single",
        "selector-root-no-composition": true,

        "string-quotes": "double",

        "time-no-imperceptible": true,

        ////"unit-blacklist": [],
        ////"unit-whitelist": ["%", "deg", "em", "px", "rem", "s", "vh", "vw"],

        "value-list-comma-newline-after": "always-multi-line",
        "value-list-comma-newline-before": "never-multi-line",
        "value-list-comma-space-after": "always-single-line",
        "value-list-comma-space-before": "never",
        "value-no-vendor-prefix": true
    }
};

module.exports = config;
