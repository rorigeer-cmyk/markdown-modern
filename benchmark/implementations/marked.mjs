import { marked as m } from "marked"

export function run(data) {
  const marked = m.setOptions({
    gfm: false,
    breaks: false,
    pedantic: false,
  })
  return marked(data)
}
