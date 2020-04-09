import Typography from 'typography';

const typography = new Typography({
    title: 'organic-moringa-theme',
    baseFontSize: "18px",
    baseLineHeight: 1.5,
    headerFontFamily: ["Rubik"],
    headerWeight: 500,
    headerColor: '#53AB34',
    bodyFontFamily: ["Rubik"],
    bodyWeight: 'normal',

    overrideStyles: ({adjustFontSizeTo, rythm }, options, styles) => ({
        h1: {
            ...adjustFontSizeTo('48px'),            
            fontStyle: 'normal',
        },
        h2: {
            ...adjustFontSizeTo('38px'),            
            fontStyle: 'normal',
        },
        h3: {
            ...adjustFontSizeTo('32px'),            
            fontStyle: 'italic',
        },
        h4: {
            ...adjustFontSizeTo('24px'),            
            fontStyle: 'normal',
        },
        button: {
            ...adjustFontSizeTo('18px'),
        },

    })
});

typography.injectStyles();

export default typography;