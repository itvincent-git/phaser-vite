import legacy from '@vitejs/plugin-legacy'

export default {
  plugins: [
    legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
        polyfills: ['es.promise.finally', 'es/map', 'es/set'],
        modernPolyfills: ['es.promise.finally'],
    })
  ],
}