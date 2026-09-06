import {marked as m} from "marked";

const marked = m.setOptions({
    gfm: false,
    breaks: false,
    pedantic: false,
  })
export function run (data) {
  return marked.parse(data)
}
