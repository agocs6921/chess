const { build } = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");

(async () => {
    await build({
        entryPoints: {
            "./public/js/bundle": "./src/app.tsx",
            "./public/css/bundle": "./src/sass/styles.sass"
        },
        plugins: [
            sassPlugin()
        ],
        outdir: ".",
        bundle: true,
        minify: true,
        sourcemap: true,
        watch: true,
    })
})()