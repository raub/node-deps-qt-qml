'use strict';

const path = require('path');

const tools = require('addon-tools-raub');

const gui = require('deps-qt-gui-raub');


module.exports = {
	gui,
	core : gui.core,
	...tools.paths(__dirname),
};
