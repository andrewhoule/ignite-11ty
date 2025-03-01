import cssnano from "cssnano";
import postCssApply from "postcss-apply";
import postCssCustomMedia from "postcss-custom-media";
import postCssImport from "postcss-import";
import postCssNested from "postcss-nested";

export default {
  map: "inline",
  plugins: [
    postCssImport,
    postCssApply,
    postCssNested,
    postCssCustomMedia,
    cssnano
  ]
};
