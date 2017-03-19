import babel from 'rollup-plugin-babel'

const license = `/*!
 * ScrambleText
 * https://github.com/yomotsu/ScrambleText
 * (c) 2017 @yomotsu
 * Released under the MIT License.
 */`

export default {
	entry: 'src/ScrambleText.js',
	indent: '\t',
	sourceMap: false,
	plugins: [
		babel( {
			exclude: 'node_modules/**',
			presets: [
				[ 'env', {
					targets: {
						browsers: [
							'last 2 versions',
							'ie >= 11'
						]
					},
					loose: true,
					modules: false
				} ]
			]
		} )
	],
	targets: [
		{
			format: 'umd',
			moduleName: 'ScrambleText',
			dest: 'dist/ScrambleText.js',
			banner: license
		},
		{
			format: 'es',
			dest: 'dist/ScrambleText.module.js',
			banner: license
		}
	]
};
