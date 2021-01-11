import { Buffer } from 'buffer'
import * as esbuild from 'esbuild'

async function main() {
    await esbuild.build({
        entryPoints: ['to-be-built.js'],
        inject: ['./to-inject.js'],
        define: {
            'process.env.x': 'x',
            'process.env.x2': 'x2',
        },
        outfile: 'out.js',
    })
    require('./out.js')
}
main()
