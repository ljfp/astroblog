---
layout: ../../layouts/MarkdownPostLayout.astro
title: Testing the new 'BlogPost' component
author: Lauta
description: "This one should be auto-included."
image:
    url: "https://docs.astro.build/default-og-image.png"
    alt: "The word astro against an illustration of planets and stars."
pubDate: 2025-04-05
tags: ["astro", "blogging", "series"]
---
This post should show up with my other blog posts, because `import.meta.glob()` is returning a list of all my posts in order to create my list.