import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';
import htmlMin from 'html-minifier-terser';
import postcssPlugin from "@jgarber/eleventy-plugin-postcss";
import { minify } from 'terser';

export default function(eleventyConfig) {
	// Use PostCSS
	eleventyConfig.addPlugin(postcssPlugin);

	// Pass assets to site build
	eleventyConfig.addPassthroughCopy('src/assets');

	// Watch JS
	eleventyConfig.addWatchTarget('./src/js/');

	// Minfiy HTML
	eleventyConfig.addTransform('htmlMin', function (content) {
		if ((this.page.outputPath || '').endsWith('.html')) {
			let minified = htmlMin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			});
			return minified;
		}
		return content;
	});

	// Minify JS
	eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (code, callback) {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {
      console.error("Terser error: ", err);
      // Fail gracefully.
      callback(null, code);
    }
  });

	// Responsive Images
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		extensions: 'html',
		formats: ['webp', 'jpeg'],
		defaultAttributes: {
			loading: "lazy",
			decoding: "async",
			sizes: "auto",
		},
	});
};

export const config = {
	dir: {
    includes: '_includes',
		input: 'src',
    output: '_site',
	}
};
