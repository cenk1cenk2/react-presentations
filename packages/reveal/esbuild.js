const { build, ts, tsconfig, glob, log } = require('estrella')

build({
  entryPoints: [ 'src/index.ts' ],
  outdir: 'dist',
  bundle: true,
  sourcemap: true,
  minify: true,
  splitting: false,
  format: 'cjs',
  target: [ 'esnext' ],
  tsconfig: './tsconfig.json',
  plugins: [ externalPlugin() ],
  onEnd (config) {
    generateTypeDefs(config)
  },
  clear: false
})

function generateTypeDefs (config) {
  const parsedTsconfig = tsconfig(config)

  const filenames = Array.from(new Set((Array.isArray(config.entry) ? config.entry : [ config.entry ]).concat(parsedTsconfig.include || []))).filter((v) => v)

  log.info('Generating type declaration files for', filenames.join(', '))

  const compilerOptions = Object.assign(parsedTsconfig.compilerOptions, {
    declaration: true
  })

  const program = ts.ts.createProgram(filenames, compilerOptions)

  program.emit(undefined, undefined, undefined, true)

  log.info('Wrote', glob(config.outdir + '**/*.d.ts').join(', '))
}

// Must not start with "/" or "./" or "../"
const NON_NODE_MODULE_RE = /^[^.\/]|^\.[^.\/]|^\.\.[^\/]/

function externalPlugin () {
  return {
    name: 'external',

    setup (build) {
      build.onResolve({ filter: NON_NODE_MODULE_RE }, (args) => ({
        path: args.path,
        external: true
      }))
    }
  }
}
