module.exports = {
    processors: ['stylelint-processor-styled-components'],
    extends: ['stylelint-config-recommended', 'stylelint-config-styled-components'],
    rules: {
        'no-descending-specificity': null,
        'no-duplicate-selectors': null,
        'property-no-unknown': [true, { ignoreProperties: ['/-styled-mixin/', '/$dummyValue/'] }],
        'selector-type-no-unknown': [true, { ignoreProperties: ['/$dummyValue/'] }],
    },
};
