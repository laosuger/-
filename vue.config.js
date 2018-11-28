const express = require('express')
const app = express()
var seller = require('./src/data/index.json')

module.exports = {
	css: {
		loaderOptions: {
			css: {
				// options here will be passed to css-loader
			},
			postcss: {
				// options here will be passed to postcss-loader
				plugins: [require('postcss-px2rem')({
					remUnit: 75
				})]
			}
		}
	},
	devServer: {
		before(app) {
			app.get('/api/seller', (req, res) => {
				res.json({
					errno: 0,
					data: seller
				})
			})
		},
		host: '0.0.0.0',
		port: 8080
	}
}
