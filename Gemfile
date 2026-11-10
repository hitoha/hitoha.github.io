source "https://rubygems.org"

# Same Jekyll and plugin versions GitHub Pages builds with
gem "github-pages", group: :jekyll_plugins

# Needed on Ruby 3+ for `jekyll serve`
gem "webrick"

# Windows has no bundled timezone data or native file watcher
platforms :mingw, :x64_mingw, :mswin do
  gem "tzinfo-data"
  gem "wdm", ">= 0.1.0"
end
