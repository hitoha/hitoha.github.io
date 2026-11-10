# hitoha.github.io

A small Jekyll site about two things that share a name:

- **Hitoha Marui** (丸井ひとは), the quiet youngest triplet from Norio Sakurai's *Mitsudomoe*
- **[hitoha.moe](https://www.hitoha.moe/)**, the "Anime Programming" lab and blog of Anime4000

GitHub Pages builds and serves it from this branch at <https://hitoha.github.io/>.

## Layout

| Path | What it holds |
| --- | --- |
| `index.html` | Front page |
| `hitoha-marui.md` | Character profile |
| `hitoha-moe.html` | About the website, its projects and community |
| `_data/` | Navigation, projects, community links, guides, partners, social links, fallback post list |
| `_layouts/`, `_includes/` | Page shell and reusable pieces |
| `assets/` | Stylesheet, favicon, and the script that loads the latest posts from hitoha.moe |

Most content changes are edits to a file in `_data/`.

## Run it locally

Needs Ruby (on Windows, [RubyInstaller](https://rubyinstaller.org/) with the DevKit).

```bash
bundle install
```

```bash
bundle exec jekyll serve
```

Then open <http://localhost:4000/>.

## Credits

Fan-made. *Mitsudomoe* and Hitoha Marui belong to Norio Sakurai and Akita Shoten; no official artwork is used.
