const catController = require('../controller/cat.controller');

module.exports = (app) => {
	app.get('/cat/', catController.Index);
}