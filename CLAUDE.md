# Ian Dunn's Personal Website

Jekyll-based academic homepage using the [academic-homepage](https://github.com/luost26/academic-homepage) template, hosted on GitHub Pages.

**Live site:** https://www.iandunn.io

## Structure

- `_config.yml` - Jekyll configuration
- `_data/` - YAML data files driving site content:
  - `profile.yml` - Name, bio, education, experience, social links
  - `display.yml` - Controls which widgets show on homepage
  - `navigation.yml` - Site navigation items
  - `authors.yml` - Author formatting (bold, links)
- `_publications/` - Publication entries organized by year (YYYY/*.md)
- `_layouts/` & `_includes/widgets/` - Templates and components
- `assets/images/covers/` - Publication cover images

## Adding Publications

Create a markdown file in `_publications/YYYY/name.md`:

```yaml
---
title:          "Paper Title"
date:           YYYY-MM-DD 00:01:00 +0800  # Controls sort order
selected:       true  # true = featured on homepage, false = publications page only
pub:            "Venue Name"
pub_date:       "Month YYYY"
cover:          assets/images/covers/cover_image.png  # Optional

abstract: >-
  Abstract text here.

authors:
  - Author Name  # Names in authors.yml get special formatting

links:
  Paper: https://arxiv.org/abs/...
  Code: https://github.com/...
---
```

## Local Development

```bash
bundle exec jekyll serve
```

## Tech Stack

Bootstrap 4.6, Font Awesome, KaTeX (math), Jekyll 3.9
