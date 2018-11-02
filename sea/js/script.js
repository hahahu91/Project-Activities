<<<<<<< HEAD
=======
const HORIZONT_LINE = 0.8;
const KeyCode = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAUSE: 19,
    CAPS_LOCK: 20,
    ESCAPE: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT_ARROW: 37,
    UP_ARROW: 38,
    RIGHT_ARROW: 39,
    DOWN_ARROW: 40,
    INSERT: 45,
    DELETE: 46,
    KEY_0: 48,
    KEY_1: 49,
    KEY_2: 50,
    KEY_3: 51,
    KEY_4: 52,
    KEY_5: 53,
    KEY_6: 54,
    KEY_7: 55,
    KEY_8: 56,
    KEY_9: 57,
    KEY_A: 65,
    KEY_B: 66,
    KEY_C: 67,
    KEY_D: 68,
    KEY_E: 69,
    KEY_F: 70,
    KEY_G: 71,
    KEY_H: 72,
    KEY_I: 73,
    KEY_J: 74,
    KEY_K: 75,
    KEY_L: 76,
    KEY_M: 77,
    KEY_N: 78,
    KEY_O: 79,
    KEY_P: 80,
    KEY_Q: 81,
    KEY_R: 82,
    KEY_S: 83,
    KEY_T: 84,
    KEY_U: 85,
    KEY_V: 86,
    KEY_W: 87,
    KEY_X: 88,
    KEY_Y: 89,
    KEY_Z: 90,
    LEFT_META: 91,
    RIGHT_META: 92,
    SELECT: 93,
    NUMPAD_0: 96,
    NUMPAD_1: 97,
    NUMPAD_2: 98,
    NUMPAD_3: 99,
    NUMPAD_4: 100,
    NUMPAD_5: 101,
    NUMPAD_6: 102,
    NUMPAD_7: 103,
    NUMPAD_8: 104,
    NUMPAD_9: 105,
    MULTIPLY: 106,
    ADD: 107,
    SUBTRACT: 109,
    DECIMAL: 110,
    DIVIDE: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUM_LOCK: 144,
    SCROLL_LOCK: 145,
    SEMICOLON: 186,
    EQUALS: 187,
    COMMA: 188,
    DASH: 189,
    PERIOD: 190,
    FORWARD_SLASH: 191,
    GRAVE_ACCENT: 192,
    OPEN_BRACKET: 219,
    BACK_SLASH: 220,
    CLOSE_BRACKET: 221,
    SINGLE_QUOTE: 222
};
Object.freeze(KeyCode);
>>>>>>> 6f013b6770ee12bdff79d9f01ad495c65342be70
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
<<<<<<< HEAD
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
=======
>>>>>>> 6f013b6770ee12bdff79d9f01ad495c65342be70
function main () {
    const canvas = document.getElementById('canvas');
    const WIDTH = 1000;
    const HEIGHT = 500;
    canvas.width = WIDTH;
	canvas.height = HEIGHT;
    const ctx = canvas.getContext('2d');
    canvas.addEventListener("mousedown", updateField, false);
<<<<<<< HEAD
    const button = document.getElementById('begin');
    button.addEventListener("click", checkShips, false);
=======
>>>>>>> 6f013b6770ee12bdff79d9f01ad495c65342be70

    draw(ctx, WIDTH, HEIGHT);
    let lastTimestamp = Date.now();
    const animateFn = () => {
        const currentTimeStamp = Date.now();
        const deltaTime = (currentTimeStamp - lastTimestamp) * 0.001;
        lastTimestamp = currentTimeStamp;
    }
    animateFn();
}
<<<<<<< HEAD
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
=======

>>>>>>> 6f013b6770ee12bdff79d9f01ad495c65342be70
function updateField(event) {
    const mousePos = mouseCoordinates(canvas, event);
    const ctx = canvas.getContext('2d');
    const elem = searchElem(mousePos, 400);
    updateOneField(ctx, OFFSET_FIELD, OFFSET_FIELD, 400, elem);
    //console.log(mousePos);
}
<<<<<<< HEAD
=======

>>>>>>> 6f013b6770ee12bdff79d9f01ad495c65342be70
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
<<<<<<< HEAD
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
=======
        
        if(elem.field == 1) {
            if (MAP[elem.y][elem.x]) {
                ENEMY_MAP[elem.y][elem.x] = 1;
                const lengthShip = countShip(elem, MAP);
                const len = countShip(elem, ENEMY_MAP);
                if (lengthShip == len) {
                    console.log('!');
                    console.log('babam');
                }
                ctx.fillStyle = "red";
                ctx.strokeRect(xBegin + elem.x * widthSquare + elem.field * (boxWidth + OFFSET_FIELD), 
                    yBegin + elem.y * widthSquare, widthSquare, widthSquare);
                ctx.fillText("X", xBegin + elem.x * widthSquare + widthSquare / 2 + elem.field * (boxWidth + OFFSET_FIELD), 
                    yBegin + elem.y * widthSquare + widthSquare / 2);
            } else {
                ENEMY_MAP[elem.y][elem.x] = -1;
                ctx.fillStyle = "black";
                ctx.fillText(".", xBegin + elem.x * widthSquare + widthSquare / 2 + elem.field * (boxWidth + OFFSET_FIELD), 
                    yBegin + elem.y * widthSquare + widthSquare / 4);
            }
        } else {
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
                //console.log(MY_SHIPS);
                ctx.fillStyle = "#808080";
                ctx.fillRect(xBegin + elem.x * widthSquare + elem.field * (boxWidth + OFFSET_FIELD), 
                    yBegin  + elem.y * widthSquare, widthSquare - 1, widthSquare - 1);
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
>>>>>>> 6f013b6770ee12bdff79d9f01ad495c65342be70
                            }
                        } else {
                            can = false;
                        }
<<<<<<< HEAD
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
=======
                    } else {
                        can = false;
                    }
                    if (can ) {
                        MY_MAP[elem.y][elem.x] = 1;
                        ctx.fillStyle = "red";
                        //ctx.strokeRect(xBegin + elem.x * widthSquare + elem.field * (boxWidth + OFFSET_FIELD), 
                            //yBegin + elem.y * widthSquare, widthSquare, widthSquare);
                        ctx.fillRect( xBegin + elem.x * widthSquare + elem.field * (boxWidth + OFFSET_FIELD), 
                            yBegin + elem.y * widthSquare, widthSquare - 1, widthSquare - 1);
                    }
                }
            }
        }
>>>>>>> 6f013b6770ee12bdff79d9f01ad495c65342be70
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
<<<<<<< HEAD
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
=======
>>>>>>> 6f013b6770ee12bdff79d9f01ad495c65342be70
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



<<<<<<< HEAD
function draw(ctx, WIDTH, HEIGHT) {
    createField(ctx, WIDTH, HEIGHT);
=======











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

function update(sky, sun, clouds, boxWidth, boxHeight, dt, extraSpeed) {
    //console.log(extraSpeed);
    for (const cloud of clouds) {
        moveCloud(cloud, boxWidth, boxHeight, dt, extraSpeed);
    }
    moveSun(sun, dt, extraSpeed);
    recolorSky(sky, sun, dt);
}

function moveSun(sun, dt, extraSpeed) {
    const SUN_SPEED = Math.PI / 12 * extraSpeed;
    const deltaAngle = SUN_SPEED * dt ;
    
    sun.angle -= deltaAngle;
    if (sun.angle <= 0) sun.angle = Math.PI * 2;
    //sun.angle %= Math.PI * 2;
}

function moveCloud(cloud, boxWidth, boxHeight, dt, extraSpeed) {
    //console.log(extraSpeed);
    if(!extraSpeed) {
        extraSpeed
    }
    const distance = cloud.moveSpeed * extraSpeed * dt;
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

function draw(ctx, WIDTH, HEIGHT) {
    createField(ctx, WIDTH, HEIGHT);
    // drawSky(ctx, WIDTH, HEIGHT, sky);
    // drawSun(ctx, WIDTH, HEIGHT, sun);
    // drawClouds(ctx, clouds);
    // drawLand(ctx, WIDTH, HEIGHT);
    // drawHouse(ctx);
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
>>>>>>> 6f013b6770ee12bdff79d9f01ad495c65342be70
}

main();
