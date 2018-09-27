const HORIZONT_LINE = 0.8;

function main () {
    const canvas = document.getElementById('canvas');
    const WIDTH = 1000;
    const HEIGHT = 500;
    canvas.width = WIDTH;
	canvas.height = HEIGHT;
    const ctx = canvas.getContext('2d');
    const sun = new Sun(WIDTH, HEIGHT);
    const sky = new Sky();
    const clouds = [];
    const MAX_CLOUDS = 3;
    for (let i = 0; i < MAX_CLOUDS; ++i) {
        clouds.push(createClouds(WIDTH, HEIGHT));
    }

    draw(ctx, WIDTH, HEIGHT, clouds, sun, sky);

    let lastTimestamp = Date.now();
    const animateFn = () => {
        const currentTimeStamp = Date.now();
        const deltaTime = (currentTimeStamp - lastTimestamp) * 0.001;
        lastTimestamp = currentTimeStamp;
        update(sky, sun, clouds, WIDTH, HEIGHT, deltaTime);
        draw(ctx, WIDTH, HEIGHT, clouds, sun, sky);
        requestAnimationFrame(animateFn);
    }

    animateFn();
}
function Sun(boxWidth,  boxHeight) {
    this.x = boxWidth * 0.15;
    this.y = boxHeight * HORIZONT_LINE;
    this.moveSpeed = 1/4;
};

function Cloud({
    startX,
    startY,
    moveSpeed,
}) {
    this.x = startX;
    this.y = startY;
    this.moveSpeed = moveSpeed;
};

function createClouds(boxWidth,  boxHeight) {
    const startX = Math.random() * boxWidth * 1.1;
    const startY = Math.random() * boxHeight * 0.5 + 30;
    const moveSpeed = Math.random() * 100 + 20;
    return new Cloud({
        startX,
        startY,
        moveSpeed,
    });
};

function drawLand(ctx, WIDTH, HEIGHT) {
    ctx.fillStyle = '#27AE60';
    ctx.fillRect(0, HEIGHT * HORIZONT_LINE, WIDTH, HEIGHT * (1 - HORIZONT_LINE));
}

function drawSky(ctx, WIDTH, HEIGHT, sky) {
    ctx.fillStyle =  sky.color.toFillStyle();
    ctx.fillRect(0, 0, WIDTH, HEIGHT * HORIZONT_LINE);
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

function drawClouds(ctx, clouds) {
    ctx.fillStyle = '#FFF';
    for (const cloud of clouds) {
        drawCloud(ctx, cloud.x, cloud.y);
    };
}

function update(sky, sun, clouds, boxWidth, boxHeight, dt) {
    for (const cloud of clouds) {
        moveCloud(cloud, boxWidth, boxHeight, dt);
    }
    moveSun(sun, boxWidth, boxHeight, dt);
    recolorSky(sky, dt);
}

function moveSun(sun, boxWidth, boxHeight, dt) {
    const timeDay = sun.moveSpeed * dt ;
    const curStationSun = inRad(arctg360(sun.x - boxWidth / 2, sun.y - (boxHeight * HORIZONT_LINE))) + timeDay;
    
    sun.x = boxWidth / 2 + 400 * Math.cos(curStationSun);
    sun.y = boxHeight * HORIZONT_LINE + 400 * Math.sin(curStationSun);
}

function moveCloud(cloud, boxWidth, boxHeight, dt) {
    const distance = cloud.moveSpeed * dt;
    cloud.x -= distance;
    if (cloud.x <= -80 ) {
        cloud.x = 1080;
    }
    //cloud.y += distance;
}

function drawSun(ctx, sun) {
    ctx.fillStyle = '#F1C40F';
    ctx.beginPath();
    ctx.arc(sun.x, sun.y, 40, 0, Math.PI * 2, 0);
    ctx.fill();
}

function draw(ctx, WIDTH, HEIGHT, clouds, sun, sky) {
    drawSky(ctx, WIDTH, HEIGHT, sky);
    drawSun(ctx, sun);
    drawClouds(ctx, clouds);
    drawLand(ctx, WIDTH, HEIGHT);
    drawHouse(ctx);
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

function arctg360(x, y) {
    if (y >= 0 && x >= 0) {
        return Math.atan(y / x) * 180 / Math.PI;
    }
    else if (y >= 0 &&  x < 0 || y < 0 && x < 0) {
        return 180 + Math.atan(y / x) * 180 / Math.PI;
    }
    else {
        return 360 + Math.atan(y / x) * 180 / Math.PI;
    };
} 


function inRad(degrees){
    return degrees * Math.PI / 180;
}

function inDeg(radians){
    return radians * 180 / Math.PI;
}

function Sky() {
    hue = 240;
    saturation = 100;
    lightness = 50;
    this.am = true;
    this.recolorSpeed = 1/4;
    this.color = new HslColor({
        hue,
        saturation,
        lightness,
    });
}

function HslColor({
    hue,
    saturation,
    lightness,
}) {
    this.h = hue;
    this.s = saturation;
    this.l = lightness;

    this.toFillStyle = function () {
        const h = this.h;
        const s = this.s;
        const l = this.l;
        return "hsl(" + h + "," + s + "%," + l + "%)";
    }
}

function recolorSky(sky, dt) {
    let am;
    (sky.am) ? am = 1 : am = -1;
    const light = Math.min(sky.color.l + am * sky.recolorSpeed * dt * 32, 100);
    (light >= 100) && (sky.am = false);
    (light <= 0) && (sky.am = true);
    sky.color.l = light;
}

main();
