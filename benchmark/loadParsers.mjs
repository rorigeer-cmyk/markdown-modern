import { readdir } from 'node:fs/promises'
import { join } from 'node:path'

const implDir = join(import.meta.dirname, 'implementations')

export async function loadParsers() {
  const files = await readdir(implDir)
  return Promise.all(
    files.sort().map(async (name) => ({
      name,
      code: await import(`./implementations/${name}`),
    }))
  )
}
