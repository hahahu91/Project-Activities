function main () {
    const canvas = document.getElementById('canvas');
    const WIDTH = canvas.offsetWidth;
    const HEIGHT = canvas.offsetHeight;
    canvas.width = WIDTH;
	canvas.height = HEIGHT;
    const ctx = canvas.getContext('2d');
    draw(ctx, WIDTH, HEIGHT);
}

function drawBackground(ctx, WIDTH, HEIGHT) {
    const horizontLine = 0.8;

    ctx.fillStyle = '#5DADE2';
    ctx.fillRect(0, 0, WIDTH, HEIGHT * horizontLine);

    ctx.fillStyle = '#27AE60';
    ctx.fillRect(0, HEIGHT * horizontLine, WIDTH, HEIGHT * (1 - horizontLine));
}

function drawHouse(ctx) {
    ctx.fillStyle = '#D35400';
    ctx.fillRect(375, 240, 250, 250);

    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.moveTo(375, 240);
    ctx.lineTo(625, 240);
    ctx.lineTo(500, 90);
    ctx.fill();

    ctx.fillStyle = '#839192';
    ctx.beginPath();
    ctx.moveTo(565, 168);
    ctx.lineTo(565, 90);
    ctx.lineTo(545, 90);
    ctx.lineTo(545, 144);
    ctx.fill();

    ctx.fillStyle = '#F5B041';
    ctx.fillRect(455, 270, 90, 110);

    ctx.strokeStyle = '#000';
    ctx.beginPath();
    ctx.moveTo(500, 270);
    ctx.lineTo(500, 380);
    ctx.moveTo(455, 325);
    ctx.lineTo(545, 325);
    ctx.stroke();
}

function drawClouds(ctx) {
    ctx.fillStyle = '#FFF';
    drawCloud(ctx, 200, 100);
    drawCloud(ctx, 800, 100);
    drawCloud(ctx, 475, 65);
}
function drawSun(ctx) {
    ctx.fillStyle = '#F1C40F';
    ctx.beginPath();
    ctx.arc(0, 0, 100, 0, Math.PI * 2, 0);
    ctx.fill();
}

function draw(ctx, WIDTH, HEIGHT) {
    drawBackground(ctx, WIDTH, HEIGHT);
    drawSun(ctx);
    drawHouse(ctx);
    drawClouds(ctx);
}

function drawCloud(ctx, x, y){
    ctx.beginPath();
    ctx.ellipse(x, y, 40, 20, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(x + 50, y, 40, 20, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(x + 25, y - 20, 40, 20, 0, 0, Math.PI * 2);
    ctx.fill();
}
main();
