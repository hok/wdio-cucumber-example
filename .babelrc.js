module.exports = {
  presets: [
    ['@babel/env', {
      shippedProposals: true,
      useBuiltIns: 'usage',
      corejs: "3.1.3",
      targets: {
        browsers: [],
        node: true,
      },
    }]
  ],
  sourceMap: true,
}