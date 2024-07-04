import solidity from "./node_modules/highlightjs-solidity/dist/solidity.es.min.js";

Reveal.initialize({
    hash: true,
    defaultTiming: 120,
    highlight: {
        beforeHighlight: (hljs) => {
            hljs.registerLanguage('solidity', solidity);
        }
    },

    // Learn about plugins: https://revealjs.com/plugins/
    plugins: [ RevealMarkdown, RevealHighlight, RevealNotes, RevealMath.KaTeX ]
});