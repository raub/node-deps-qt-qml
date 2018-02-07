'use strict';

const path = require('path');

const tools = require('addon-tools-raub');

const gui = require('deps-qt-gui-raub');


module.exports = {
	...tools.paths(__dirname),
	...{ core: gui.core, gui: gui.bin }
};
