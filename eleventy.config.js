import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';
import htmlMin from 'html-minifier-terser';
import { minify } from 'terser';
import postcssPlugin from "@jgarber/eleventy-plugin-postcss";
import sitemap from "@quasibit/eleventy-plugin-sitemap";
import dotenv from "dotenv";

dotenv.config();

export default function(eleventyConfig) {
	// Use PostCSS
	eleventyConfig.addPlugin(postcssPlugin);

	// Pass assets to site build
	eleventyConfig.addPassthroughCopy('src/assets');

	// Watch JS
	eleventyConfig.addWatchTarget('./src/assets/js/');

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

	// BrowserSync Settings
	eleventyConfig.setServerOptions({
    showAllHosts: true
  });

	// Sitemap collection (exclude non-HTML assets like CSS)
	eleventyConfig.addCollection("sitemap", function (collectionApi) {
		return collectionApi.getAll().filter((item) => {
			if (item?.data?.eleventyExcludeFromCollections) return false;
			const outputPath = item?.outputPath || "";
			return outputPath.endsWith(".html");
		});
	});

	// Sitemap
	eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: process.env.SITE_URL || "",
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
