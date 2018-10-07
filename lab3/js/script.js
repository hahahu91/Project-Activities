const HORIZONT_LINE = 0.8;

function main () {
    const canvas = document.getElementById('canvas');
    const WIDTH = 1000;
    const HEIGHT = 500;
    canvas.width = WIDTH;
	canvas.height = HEIGHT;
    const ctx = canvas.getContext('2d');
    const sun = new Sun();
    const sky = new Sky();
    const clouds = [];
    const MAX_CLOUDS = 3;
    for (let i = 0; i < MAX_CLOUDS; ++i) {
        clouds.push(createCloud(WIDTH, HEIGHT));
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

function createCloud(boxWidth,  boxHeight) {
    const startX = Math.random() * boxWidth * 1.1;
    const startY = Math.random() * boxHeight * 0.5 + 30;
    const moveSpeed = Math.random() * 100 + 20;
    return new Cloud({
        startX,
        startY,
        moveSpeed,
    });
};

function update(sky, sun, clouds, boxWidth, boxHeight, dt) {
    for (const cloud of clouds) {
        moveCloud(cloud, boxWidth, boxHeight, dt);
    }
    moveSun(sun, dt);
    recolorSky(sky, sun, dt);
}

function moveSun(sun, dt) {
    const SUN_SPEED = Math.PI / 12;
    const deltaAngle = SUN_SPEED * dt ;
    
    sun.angle -= deltaAngle;
    if (sun.angle <= 0) sun.angle = Math.PI * 2;
    //sun.angle %= Math.PI * 2;
}

function moveCloud(cloud, boxWidth, boxHeight, dt) {
    const distance = cloud.moveSpeed * dt;
    cloud.x -= distance;
    if (cloud.x <= (-boxWidth * 0.08)) {
        cloud.x = boxWidth * 1.08;
    }
    //cloud.y += distance;
}

function recolorSky(sky, sun, dt) {
    sky.color.l = Math.cos(sun.angle)*(-45) + 45;
}

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

function drawSun(ctx, boxWidth, boxHeight, sun) {
    const SUN_ORBIT = 400;
    const x = SUN_ORBIT * Math.sin(sun.angle) + boxWidth / 2;
    const y = SUN_ORBIT * Math.cos(sun.angle) + boxHeight * HORIZONT_LINE;

    ctx.fillStyle = sun.color.toFillStyle();
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, Math.PI * 2, 0);
    ctx.fill();
}

function draw(ctx, WIDTH, HEIGHT, clouds, sun, sky) {
    drawSky(ctx, WIDTH, HEIGHT, sky);
    drawSun(ctx, WIDTH, HEIGHT, sun);
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

function Sun() {
    this.angle = Math.PI;
    hue = 58;
    saturation = 100;
    lightness = 54;
    this.color = new HslColor({
        hue,
        saturation,
        lightness,
    });
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

function Sky() {
    hue = 240;
    saturation = 100;
    lightness = 50;
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

main();
