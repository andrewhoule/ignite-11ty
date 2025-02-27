import cssnano from "cssnano";
import postCssApply from "postcss-apply";
import postCssCustomMedia from "postcss-custom-media";
import postCssImport from "postcss-import";
import postcssNesting from "postcss-nesting";

export default {
  map: "inline",
  plugins: [
    postCssImport,
    postCssApply,
    postcssNesting,
    postCssCustomMedia,
    cssnano
  ]
};
