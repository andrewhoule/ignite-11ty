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
