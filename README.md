# [mustardamus.com](mustardamus.com)

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Deployment on GitHub Pages

- [Deploy your Astro Site to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)
- [DNS Settings](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub Pages https/www Redirect](https://stackoverflow.com/a/58672792)

  ```
    $ dig mustardamus.com +noall +answer -t A

    mustardamus.com.	1553	IN	A	185.199.110.153
    mustardamus.com.	1553	IN	A	185.199.111.153
    mustardamus.com.	1553	IN	A	185.199.109.153
    mustardamus.com.	1553	IN	A	185.199.108.153
  ```

## Icons

- [Solar Icon Set](https://icon-sets.iconify.design/solar/)
- [Astro Icon](https://www.astroicon.dev/guides/components/)
