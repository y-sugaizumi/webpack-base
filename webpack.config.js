const path = require('path');
// CSSをjsにバンドルしない
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// jsフォルダに作成されてしまう「xxx.css.js」抑制
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const { VueLoaderPlugin } = require('vue-loader')
/////////////////////////////////////////////////////////////////////////////////////
const mode = 'development'; //development or production
const src_dir = path.resolve(__dirname, 'src');
const dist_dir = path.resolve(__dirname, 'dist');
/////////////////////////////////////////////////////////////////////////////////////


module.exports = [
	// javascript
	{
		mode: mode,
		entry: {
			main: path.resolve(src_dir, 'js', 'main.js')
		},
		output: {
			path: path.resolve(dist_dir),
			filename: 'js/[name].js'
		},
		module: {
			// babel-loaderの設定
			rules: [
				{
					test: /\.vue$/,
					loader: "vue-loader"
				},
				{
					test: /\.js$/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: [
									'@babel/preset-env'
								]
							}
						}
					],
					exclude: /node_modules/,
				},
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						'vue-style-loader',
						'css-loader',
						'sass-loader'
					]
				},
			]
		},
		resolve: {
			// import './foo.vue' の代わりに import './foo' と書けるようになる(拡張子省略)
			extensions: ['.js', '.vue'],
			alias: {
				// vue-template-compilerに読ませてコンパイルするために必要
				vue$: 'vue/dist/vue.esm.js',
			},
		},
		plugins: [
			new VueLoaderPlugin()
		]
	},// css
	{
		mode: mode,
		entry: {
			'main.css': path.resolve(src_dir, 'css', 'main.scss')
		},
		module: {
			rules: [
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								url: false
							}
						},
						{
							loader: 'sass-loader'
						}
					]
				},
			]
		},
		plugins: [
			new FixStyleOnlyEntriesPlugin({
				extensions: ['scss', 'css']
			}),
			new MiniCssExtractPlugin({
				filename: 'css/[name]'
			})
		]
	}
];
