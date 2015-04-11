var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	ezipop: function(req, res) {
		res.render('ezipop');
	},
	xpand: function(req, res) {
		res.render('xpand');
	},
	swingbox: function(req, res) {
		res.render('swingbox');
	},
	tuffline: function(req, res) {
		res.render('tuffline');
	},
	mediaBeacon: function(req, res) {
		res.render('mediaBeacon');
	},
	about: function(req, res) {
		res.render('about');
	}
};

module.exports = indexController;