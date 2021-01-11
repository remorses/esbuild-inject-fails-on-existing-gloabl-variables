import { Buffer } from 'buffer'
import * as esbuild from 'esbuild'

async function main() {
    await esbuild.build({
        entryPoints: ['to-be-built.js'],
        inject: ['./buffer-polyfill.js'],
        outfile: 'out.js',
    })
    require('./out.js')
}
main()
