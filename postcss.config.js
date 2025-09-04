module.exports = function tailwindPlugin(context, options) {
    return {
        name: "tailwind-plugin",
        configurePostCss(postcssOptions) {
            // Add Tailwind and Autoprefixer
            postcssOptions.plugins.push(require("@tailwindcss/postcss"));
            return postcssOptions;
        },
    };
};
