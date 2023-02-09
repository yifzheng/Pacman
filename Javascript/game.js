"use strict";

// defining canvas object
let game = {
	canvas: undefined,
	ctx: undefined,
};

game.start = () => {
	game.canvas = document.getElementById("canvas");
	game.ctx = game.canvas.getContext("2d");
	game.createRect({ x: 0, y: 0, width: 500, height: 500, color: "blue" });
};
// pacman frames
const pacmanFrames = document.getElementById("animation");
// ghost frames
const ghostFrames = document.getElementById("ghost");

game.createRect = ({ x, y, width, height, color }) => {
	game.ctx.fillStyle = color;
	game.ctx.fillRect(x, y, width, height);
};

document.addEventListener("DOMContentLoaded", game.start);

game.mainLoop = () => {
	game.createRect({ x: 0, y: 0, width: 500, height: 500, color: "azure" });
};
