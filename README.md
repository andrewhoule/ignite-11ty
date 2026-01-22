## Ignite 11ty

Barebones starter kit for simple 11ty projects.

### Frontend Details

* Uses Eleventy
* With Nunjuck Templates

### CSS Details

* CSS minification, apply, imports, and nesting handled via PostCSS
* Add your styles to directories and files inside of `src/assets/css` and import them in `src/assets/css/app.css`

### JS Details

* Minification and bundling via Eleventy
* Add partials to `src/assets/js`
* Include them in `src/scripts.njk`

### Frontend Development

* Pull from repo `git pull origin main`
* Get on the right version of node `nvm use`
* Get frontend dependencies `npm i`
* Start the dev server `npm start`

### System Files

* The sitemap uses `SITE_URL` from `.env`
* Update the `SITE_URL=...` value in `.env` when the production domain changes
* `robots.txt` is generated from `src/system/robots.njk` and uses the same `SITE_URL`
* Set `SITE_TITLE` in `.env` to control `site.title` for meta tags

### Meta Front Matter

* Set `meta_title`, `meta_description`, and `meta_image` in page front matter to customize meta tags
* `meta_image` can be an absolute URL or a path relative to `SITE_URL` (e.g. `/assets/img/og.jpg`)
