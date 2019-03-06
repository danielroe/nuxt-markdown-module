import { Configuration } from 'webpack'

import * as MD from 'markdown-it'
import * as MarkdownLinkAttributes from 'markdown-it-link-attributes'
import * as MarkdownAnchor from 'markdown-it-anchor'

const md = MD({
  linkify: true,
  typographer: true,
  quotes: '“”‘’',
  html: true
})
  .use(MarkdownLinkAttributes, {
    pattern: /^https?:\/\//,
    attrs: {
      target: '_blank',
      rel: 'noopener'
    }
  })
  .use(MarkdownAnchor)

interface NuxtModule {
  extendBuild(callback: (config: Configuration) => void): void
}

export default function NuxtMarkdownModule(this: NuxtModule): void {
  this.extendBuild((config) => {
    if (!config.module) return

    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: {
        markdown: (body: string) => {
          return md.render(body)
        },
        vue: true
      }
    })
  })
}
