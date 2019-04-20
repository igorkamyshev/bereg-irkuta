const Bundler = require('parcel-bundler')
const path = require('path')

const entryFiles = path.join(__dirname, './front/index.js')

module.exports.bundle = async function() {
  // Initializes a bundler using the entrypoint location and options provided
  const bundler = new Bundler(entryFiles, { watch: true, outDir: './public/' })

  // Run the bundler, this returns the main bundle
  // Use the events if you're using watch mode as this promise will only trigger once and not for every rebuild
  await bundler.bundle()
}
