import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'

const samplesDir = join(import.meta.dirname, 'samples')
const files_arg = process.argv[2]

export async function loadSamples() {
  const files = await readdir(samplesDir)
  const filtered = files_arg
    ? files.filter((f) => f.includes(files_arg))
    : files
  return Promise.all(
    filtered.map((sample) =>
      readFile(join(samplesDir, sample), 'utf8').then((content) => ({
        title: `${sample} (${content.length} bytes)`,
        content,
      }))
    )
  )
}
