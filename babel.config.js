module.exports = {
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs']
    }
  },
  presets: [['@babel/preset-env', { modules: false, loose: true }], '@babel/preset-react'],
  plugins: [
    ['transform-react-remove-prop-types', { removeImport: true }],
    ['styled-components', { ssr: true, displayName: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }]
  ]
}
