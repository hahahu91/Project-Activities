const MAP = [
    [1,0,0,1,1,1,1,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,1,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,1,0,0,0,0,0],
    [1,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,1,0,0,0],
];
const MY_MAP = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]
const ENEMY_MAP = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
];
const OFFSET_FIELD = 40;
const MAX_SHIPS = {
    1: 4,
    2: 3,
    3: 2,
    4: 1,
}
const MY_SHIPS = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
}
const ENEMY_SHIPS = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
}
const ENEMY_MOVES = {
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
}
const GAME = {
    placement: true,
    move: false,
}
function main () {
    const canvas = document.getElementById('canvas');
    const WIDTH = 1000;
    const HEIGHT = 500;
    canvas.width = WIDTH;
	canvas.height = HEIGHT;
    const ctx = canvas.getContext('2d');
    canvas.addEventListener("mousedown", updateField, false);
    const button = document.getElementById('begin');
    button.addEventListener("click", checkShips, false);

    draw(ctx, WIDTH, HEIGHT);
    let lastTimestamp = Date.now();
    const animateFn = () => {
        const currentTimeStamp = Date.now();
        const deltaTime = (currentTimeStamp - lastTimestamp) * 0.001;
        lastTimestamp = currentTimeStamp;
    }
    animateFn();
}
function sequenceTraces() {
    if (!GAME.move) { //ходит враг
        let elem = II();

    }
}
function checkShips() {
    if (isEqual(MAX_SHIPS, MY_SHIPS)) {
        GAME.placement = false;
        GAME.move = true;
    } else {
        console.log('не установленны корабли !!!');
    }
}
function II() {
    do {
        let x = getRandomInt(0, 10);
        let y = getRandomInt(0, 10);
    } while (ENEMY_MOVES[y][x] != 0)
    if (MY_MAP[y][x] == 1) {
        ENEMY_MOVES[y][x] = 1;
    } else {
        ENEMY_MOVES[y][x] = -1;
    }
    return {
        x: x,
        y: y,
        field: 0,
    }
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
function isEqual(obj1, obj2) {
    return obj1[1] == obj2[1]
        && obj1[2] == obj2[2]
        && obj1[3] == obj2[3]
        && obj1[4] == obj2[4];
}
function updateField(event) {
    const mousePos = mouseCoordinates(canvas, event);
    const ctx = canvas.getContext('2d');
    const elem = searchElem(mousePos, 400);
    updateOneField(ctx, OFFSET_FIELD, OFFSET_FIELD, 400, elem);
    //console.log(mousePos);
}
function searchElem(mouseCoordinates, boxWidth) {
    const widthSquare = boxWidth / 10;
    for (let field = 0; field < 2; field++) {
        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                //console.log(x * widthSquare, y * widthSquare, mouseCoordinates.x, mouseCoordinates.y);
                if ((x * widthSquare + (boxWidth + OFFSET_FIELD) * field  <= mouseCoordinates.x) && 
                    (y * widthSquare <= mouseCoordinates.y) && 
                    (x * widthSquare + widthSquare + (boxWidth + OFFSET_FIELD) * field > mouseCoordinates.x) && 
                    (y * widthSquare + widthSquare > mouseCoordinates.y)) {
                        //console.log(x * widthSquare + OFFSET_FIELD + (boxWidth + OFFSET_FIELD) * field,  mouseCoordinates, x * widthSquare + widthSquare + OFFSET_FIELD + (boxWidth + OFFSET_FIELD) * field, field);
                        return {
                            field,
                            x,
                            y
                        }
                    }
            }
        }
    }
    
    return false;
}
function updateOneField(ctx, xBegin, yBegin, boxWidth, elem) {
    const widthSquare = boxWidth / 10;
    if (elem) {
        const x = xBegin + elem.x * widthSquare + elem.field * (boxWidth + OFFSET_FIELD);
        const y = yBegin + elem.y * widthSquare;
        if(elem.field == 1) {
            if (GAME.move) {
                if (MAP[elem.y][elem.x]) {
                    ENEMY_MAP[elem.y][elem.x] = 1;
                    const lengthShip = countShip(elem, MAP);
                    const len = countShip(elem, ENEMY_MAP);
                    if (lengthShip == len) { //убили   
                        ENEMY_SHIPS[len]++;
                        if(isEqual(ENEMY_SHIPS, MAX_SHIPS)) {
                            console.log("YOU WIN");
                        }
                        ctx.fillStyle = "red";
                        ctx.strokeRect(x, y, widthSquare - 1, widthSquare - 1);
                        ctx.fillRect( x, y, widthSquare - 1, widthSquare - 1);
                        if (len != 1) {
                            const coord = coordinateShip(elem, ENEMY_MAP);
                            for(let i = 0; i < coord.length; i++) {
                                const diffX = (elem.x - coord[i].x) * widthSquare ;
                                const diffY = (elem.y - coord[i].y) * widthSquare;
                                //console.log()
                                ctx.fillRect( x - diffX, y - diffY, widthSquare - 1, widthSquare - 1);
                            }
                        }
                    } else {
                        ctx.fillStyle = "red";
                        ctx.strokeRect(x, y, widthSquare - 1, widthSquare - 1);
                        ctx.fillText("X", x + widthSquare / 2, y + widthSquare / 2);
                    }
                } else {
                    ENEMY_MAP[elem.y][elem.x] = -1;
                    ctx.fillStyle = "black";
                    ctx.fillText(".", x + widthSquare / 2, y + widthSquare / 4);
                }
            }
        } else {
            if(GAME.placement) {
                if (MY_MAP[elem.y][elem.x]) {
                    MY_MAP[elem.y][elem.x] = 0;
                    const count = countShip(elem, MY_MAP);                
                    MY_SHIPS[count]--;
                    let c  = check3(elem, MY_MAP, count); 
                    if (count == 4) {
                        if (c == 3) {
                            MY_SHIPS[3]++;
                        }
                        if (c == 2) {
                            MY_SHIPS[2]++;
                            MY_SHIPS[1]++;
                        }   
                    }
                    if (count == 3) {
                        if (c == 1) {
                            MY_SHIPS[1] += 2;
                        } 
                        if (c == 2){
                            MY_SHIPS[2]++;
                        }
                    }
                    if (count == 2) {
                        MY_SHIPS[1]++;
                    } 
                    ctx.fillStyle = "#808080";
                    ctx.fillRect(x, y, widthSquare - 1, widthSquare - 1);
                } else {
                    let can = checkDiaganalElements(elem, MY_MAP);
                    if (can) {
                        const count = countShip(elem, MY_MAP);
                        if (count >= 1 && count <= 4){
                            if (MY_SHIPS[1] < MAX_SHIPS[1] || MY_SHIPS[2] < MAX_SHIPS[2] || MY_SHIPS[3] < MAX_SHIPS[3] || MY_SHIPS[4] < MAX_SHIPS[4]) {
                                MY_SHIPS[count]++;
                                if (count >= 3) {
                                    let c  = check3(elem, MY_MAP, count); 
                                    //console.log(c, count);
                                    if (c == 1) {
                                        MY_SHIPS[1] -= 2;
                                    } else if (c == 2){
                                        MY_SHIPS[2]--;
                                        if (count == 4) {
                                            MY_SHIPS[1]--;
                                        }
                                    } else if (c == 3) {
                                        MY_SHIPS[3]--;
                                    }
                                } else if (count == 2) {
                                    MY_SHIPS[1]--;
                                }
                            } else {
                                can = false;
                            }
                        } else {
                            can = false;
                        }
                        if (can ) {
                            MY_MAP[elem.y][elem.x] = 1;
                            ctx.fillStyle = "red";
                            //ctx.strokeRect(xBegin + elem.x * widthSquare + elem.field * (boxWidth + OFFSET_FIELD), 
                                //yBegin + elem.y * widthSquare, widthSquare, widthSquare);
                            ctx.fillRect(x, y, widthSquare - 1, widthSquare - 1);
                        }
                    }
                }
            }
            
        }
    }
}
function atack(map, enemyMap, ENEMY_SHIPS, elem, ) {
    const x = xBegin + elem.x * widthSquare + elem.field * (boxWidth + OFFSET_FIELD);
    const y = yBegin + elem.y * widthSquare;
    if (MAP[elem.y][elem.x]) {
        ENEMY_MAP[elem.y][elem.x] = 1;
        const lengthShip = countShip(elem, MAP);
        const len = countShip(elem, ENEMY_MAP);
        if (lengthShip == len) { //убили   
            ENEMY_SHIPS[len]++;
            if(isEqual(ENEMY_SHIPS, MAX_SHIPS)) {
                console.log("YOU WIN");
            }
            ctx.fillStyle = "red";
            ctx.strokeRect(x, y, widthSquare - 1, widthSquare - 1);
            ctx.fillRect( x, y, widthSquare - 1, widthSquare - 1);
            if (len != 1) {
                const coord = coordinateShip(elem, ENEMY_MAP);
                for(let i = 0; i < coord.length; i++) {
                    const diffX = (elem.x - coord[i].x) * widthSquare ;
                    const diffY = (elem.y - coord[i].y) * widthSquare;
                    //console.log()
                    ctx.fillRect( x - diffX, y - diffY, widthSquare - 1, widthSquare - 1);
                }
            }
        } else {
            ctx.fillStyle = "red";
            ctx.strokeRect(x, y, widthSquare - 1, widthSquare - 1);
            ctx.fillText("X", x + widthSquare / 2, y + widthSquare / 2);
        }
    } else {
        ENEMY_MAP[elem.y][elem.x] = -1;
        ctx.fillStyle = "black";
        ctx.fillText(".", x + widthSquare / 2, y + widthSquare / 4);
    }
}
function check3(elem, map, search) {
    count = 0;
    let x = elem.x;
    let y = elem.y;
    if (x < 9 && map[y][x + 1]) {
        let count2 = 0;
        while (x < 9 && map[y][x + 1]) {
            x++;
            count2++;
            if (count2 == search) return count2;
            if (count2 > count) {
                count = count2;
            }
        }
    }
    x = elem.x;
    y = elem.y;
    if (x > 0 && map[y][x - 1]) {
        count2 = 0;
        while (x > 0 && map[y][x - 1]) {
            x--;
            count2++;
            if (count2 == search) return count2;
            if (count2 > count) {
                count = count2;
            }
        }
    }
    x = elem.x;
    y = elem.y;
    if (y < 9 && map[y + 1][x]) {
        count2 = 0;
        while (y < 9 && map[y + 1][x]) {
            y++;
            count2++;
            if (count2 == search) return count2;
            if (count2 > count) {
                count = count2;
            }
        }
    }
    x = elem.x;
    y = elem.y;
    if (y > 0 && map[y - 1][x]) {
        count2 = 0;
        while (y > 0 && map[y - 1][x]) {
            y--;
            count2++;
            if (count2 == search) return count2;
            if (count2 > count) {
                count = count2;
            }
        }
    }
    return count;
}
function countShip(elem, map) {    
    count = 1;
    let x = elem.x;
    let y = elem.y;
    while (x < 9 && map[y][x + 1] == 1) {
        x++;
        count++;
    }
    x = elem.x;
    y = elem.y;
    while (x > 0 && map[y][x - 1] == 1) {
        x--;
        count++;
    }
    x = elem.x;
    y = elem.y;
    while (y < 9 && map[y + 1][x] == 1) {
        y++;
        count++;
    }
    x = elem.x;
    y = elem.y;
    while (y > 0 && map[y - 1][x] == 1) {
        y--;
        count++;
    }
    return count;
}
function coordinateShip(elem, map) {    
    var el = [];
    let count = 0;
    let x = elem.x;
    let y = elem.y;
    while (x < 9 && map[y][x + 1] == 1) {
        el[count] = {
            y: y,
            x: x + 1,
        };
        //coordinate.push(x + 1, y);
        x++;
        count++;
    }
    x = elem.x;
    y = elem.y;
    while (x > 0 && map[y][x - 1] == 1) {
        el[count] = {
            y: y,
            x: x - 1,
        };
        count++;
        x--;
    }
    x = elem.x;
    y = elem.y;
    while (y < 9 && map[y + 1][x] == 1) {
        el[count] = {
            y: y + 1,
            x: x
        };
        count++;
        y++;
    }
    x = elem.x;
    y = elem.y;
    while (y > 0 && map[y - 1][x] == 1) {
        el[count] = {
            y: y - 1,
            x: x
        };
        count++;
        y--;
    }
    return el;
}
function checkDiaganalElements(elem, map) {
    let can = true;
    if (elem.y != 0 && elem.y != 9 && elem.x != 0 && elem.x != 9) {
        if (map[elem.y + 1][elem.x + 1] || map[elem.y + 1][elem.x - 1] || 
            map[elem.y - 1][elem.x + 1] || map[elem.y - 1][elem.x - 1]) can = false;
    } else {
        if (elem.y == 0 && elem.x == 0) {
            if (map[elem.y + 1][elem.x + 1]) can = false;
        } else if (elem.y == 9 && elem.x == 9) {
            if (map[elem.y - 1][elem.x - 1]) can = false;
        } else if (elem.y == 0 && elem.x == 9) {
            if (map[elem.y + 1][elem.x - 1]) can = false;
        }  else if (elem.y == 9 && elem.x == 0) {
            if (map[elem.y - 1][elem.x - 1] || map[elem.y - 1][elem.x + 1]) can = false;
        }   else if (elem.y == 0 && elem.x != 0 && elem.x != 9) {
            if (map[elem.y + 1][elem.x - 1] || map[elem.y + 1][elem.x + 1]) can = false;
        }   else if (elem.x == 0 && elem.y != 0 && elem.y != 9) {
            if (map[elem.y + 1][elem.x + 1] || map[elem.y - 1][elem.x + 1]) can = false;
        }   else if (elem.x == 9 && elem.y != 0 && elem.y != 9) {
            if (map[elem.y - 1][elem.x - 1] || map[elem.y + 1][elem.x - 1]) can = false;
        }   else if (elem.y == 9 && elem.x != 0 && elem.x != 9) {
            if (map[elem.y - 1][elem.x - 1] || map[elem.y - 1][elem.x + 1]) can = false;
        }
    }
    return can;
}
function createOneField(ctx, xBegin, yBegin, boxWidth) {
    const widthSquare = boxWidth / 10;
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            ctx.strokeRect(xBegin + x * widthSquare, yBegin + y * widthSquare, widthSquare, widthSquare);
            ctx.fillRect(xBegin + x * widthSquare, yBegin + y * widthSquare, widthSquare, widthSquare);
        }
    }
    
}
function createField(ctx, Width,  Height) {
    ctx.fillStyle = "#808080";
    ctx.strokeStyle = "#000";
    ctx.font = "Bold 30pt Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const x = OFFSET_FIELD;
    const y = OFFSET_FIELD;
    let minWidth;
    (Width > Height) ? maxWidth = Width : minWidth = Height;
    const boxWidth = maxWidth * 0.4;
    createOneField(ctx, x, y, boxWidth);
    createOneField(ctx, x * 2 + boxWidth, y, boxWidth);
}
function mouseCoordinates(canvas, event){
    //let margin = canvas.getBoundingClientRect();
    let tempX = event.pageX - canvas.offsetLeft;
    let tempY = event.pageY - canvas.offsetTop;
    return {
        x: tempX - OFFSET_FIELD,
        y: tempY - OFFSET_FIELD,
    }
}



function draw(ctx, WIDTH, HEIGHT) {
    createField(ctx, WIDTH, HEIGHT);
}

main();
