// Tiny markdown helpers for short strings that come from frontmatter.

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

/** Inline markdown: `code`, **bold**, *italic* and [links](url). */
export function inlineMarkdown(text: string): string {
  return escapeHtml(text)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
}

/** Inline markdown plus bullet lists: lines that start with "- " become a <ul>. */
export function blockMarkdown(text: string): string {
  const lines = text.trim().split('\n')
  let html = ''
  let inList = false
  for (const line of lines) {
    const bullet = line.match(/^\s*[-*]\s+(.*)$/)
    if (bullet) {
      if (!inList) {
        html += '<ul>'
        inList = true
      }
      html += `<li>${inlineMarkdown(bullet[1])}</li>`
      continue
    }
    if (inList) {
      html += '</ul>'
      inList = false
    }
    if (line.trim()) html += `<p>${inlineMarkdown(line.trim())}</p>`
  }
  if (inList) html += '</ul>'
  return html
}

/** Markers and labels that contain ":" are Iconify icon names (e.g. "mdi:home"). */
export function isIconName(value: unknown): value is string {
  return typeof value === 'string' && value.includes(':')
}
