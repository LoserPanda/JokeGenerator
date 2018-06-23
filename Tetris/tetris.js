var world = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];

var score = 0;

function drawWorld() {
    document.getElementById('world').innerHTML = "";
    for (var y = 0; y < world.length; y++) {
        for (var x = 0; x < world[y].length; x++) {
            if (world[y][x] === 0) {
                document.getElementById('world').innerHTML += "<div class='empty'></div>";
            } else if (world[y][x] === 1 || world[y][x] === 11) {
                document.getElementById('world').innerHTML += "<div class='color1'></div>";
            } else if (world[y][x] === 2 || world[y][x] === 12) {
                document.getElementById('world').innerHTML += "<div class='color2'></div>";
            } else if (world[y][x] === 3 || world[y][x] === 13) {
                document.getElementById('world').innerHTML += "<div class='color3'></div>";
            } else if (world[y][x] === 4 || world[y][x] === 14) {
                document.getElementById('world').innerHTML += "<div class='color4'></div>";
            } else if (world[y][x] === 5 || world[y][x] === 15) {
                document.getElementById('world').innerHTML += "<div class='color5'></div>";
            } else if (world[y][x] === 6 || world[y][x] === 16) {
                document.getElementById('world').innerHTML += "<div class='color6'></div>";
            } else if (world[y][x] === 7 || world[y][x] === 17) {
                document.getElementById('world').innerHTML += "<div class='color7'></div>";
            }
        }
        document.getElementById('world').innerHTML += "<br>";
    }
}

function createShape() {
    var ran = Math.floor(Math.random() * 7);
    if (ran === 0) {
        world[0] = [0, 0, 0, 1, 1, 0, 0, 0];
        world[1] = [0, 0, 0, 1, 1, 0, 0, 0];
    } else if (ran === 1) {
        world[0] = [0, 0, 0, 2, 0, 0, 0, 0];
        world[1] = [0, 0, 0, 2, 2, 2, 0, 0];
    } else if (ran === 2) {
        world[0] = [0, 0, 0, 0, 3, 0, 0, 0];
        world[1] = [0, 0, 3, 3, 3, 0, 0, 0];
    } else if (ran === 3) {
        world[0] = [0, 0, 0, 4, 0, 0, 0, 0];
        world[1] = [0, 0, 4, 4, 4, 0, 0, 0];
    } else if (ran === 4) {
        world[0] = [0, 0, 0, 0, 5, 0, 0, 0];
        world[1] = [0, 0, 0, 5, 5, 0, 0, 0];
        world[2] = [0, 0, 0, 5, 0, 0, 0, 0];
    } else if (ran === 5) {
        world[0] = [0, 0, 0, 6, 0, 0, 0, 0];
        world[1] = [0, 0, 0, 6, 6, 0, 0, 0];
        world[2] = [0, 0, 0, 0, 6, 0, 0, 0];
    } else if (ran === 6) {
        world[0] = [0, 0, 0, 7, 0, 0, 0, 0];
        world[1] = [0, 0, 0, 7, 0, 0, 0, 0];
        world[2] = [0, 0, 0, 7, 0, 0, 0, 0];
        world[3] = [0, 0, 0, 7, 0, 0, 0, 0];
    }
}

function initializeWorld() {
    freeze();
    drawWorld();
}

function moveShapesDown() {
    var canMove = true;
    for (var y = 0; y < world.length; y++) {
        for (var x = 0; x < world[y].length; x++) {
            if (world[y][x] > 0 && world[y][x] < 10) {
                if (y === world.length - 1 || world[y + 1][x] > 10) {
                    canMove = false;
                    if (y === 1 && x !== 0) {
                        clearTimeout(myVar);
                        end();
                        return;
                    }
                    freeze();
                }
            }
        }
    }
    if (canMove) {
        for (var y = world.length - 1; y >= 0; y--) {
            for (var x = 0; x < world[y].length; x++) {
                if (world[y][x] > 0 && world[y][x] < 10) {
                    world[y + 1][x] = world[y][x];
                    world[y][x] = 0;
                }
            }
        }
    }
}

function moveShapesLeft() {
    var canMove = true;
    for (var y = 0; y < world.length; y++) {
        for (var x = 0; x < world[y].length; x++) {
            if (world[y][x] > 0 && world[y][x] < 10) {
                if (x === 0 || world[y][x - 1] > 10) {
                    canMove = false;
                }
            }
        }
    }
    if (canMove) {
        for (var y = world.length - 1; y >= 0; y--) {
            for (var x = 0; x < world[y].length; x++) {
                if (world[y][x] > 0 && world[y][x] < 10) {
                    world[y][x - 1] = world[y][x];
                    world[y][x] = 0;
                }
            }
        }
    }
}

function moveShapesRight() {
    var canMove = true;
    for (var y = 0; y < world.length; y++) {
        for (var x = 0; x < world[y].length; x++) {
            if (world[y][x] > 0 && world[y][x] < 10) {
                if (x === 7 || world[y][x + 1] > 10) {
                    canMove = false;
                }
            }
        }
    }
    if (canMove) {
        for (var y = world.length - 1; y >= 0; y--) {
            for (var x = world[y].length; x >= 0; x--) {
                if (world[y][x] > 0 && world[y][x] < 10) {
                    world[y][x + 1] = world[y][x];
                    world[y][x] = 0;
                }
            }
        }
    }
}

function freeze() {
    for (var y = 0; y < world.length; y++) {
        for (var x = 0; x < world[y].length; x++) {
            if (world[y][x] > 0 && world[y][x] < 10) {
                world[y][x] = world[y][x] + 10;
            }
        }
    }
    checkLines();
    createShape();
}

function checkLines() {
    for (var y = 0; y < world.length; y++) {
        var fullLine = true;
        for (var x = 0; x < world[y].length; x++) {
            if (world[y][x] < 10) {
                fullLine = false;
            }
        }
        if (fullLine) {
            world.splice(y, 1);
            world.splice(0, 0, [0, 0, 0, 0, 0, 0, 0, 0]);
            y--;
            increaseScore();
        }
    }
}

function increaseScore() {
    score += 100;
    document.getElementById('score').innerHTML = '<div>Score: ' + score + '</div>';
}

function buttonLeft() {
    moveShapesLeft();
    drawWorld();
}

function buttonDown() {
    moveShapesDown();
    drawWorld();
}

function buttonRight() {
    moveShapesRight();
    drawWorld();
}

document.onkeydown = function (e) {
    if (e.keyCode === 37) {
        moveShapesLeft();
    } else if (e.keyCode == 39) {
        moveShapesRight();
    } else if (e.keyCode === 40) {
        moveShapesDown();
    }
    drawWorld();

}

function gameLoop() {
    moveShapesDown();
    drawWorld();
    myVar = setTimeout(gameLoop, 1000);
}

initializeWorld();
gameLoop();

var end = (function () {
    document.getElementById('score').innerHTML = "<div id='afterEnd'>GAME OVER!!<br>YOUR SCORE: " + score + "<br>REFRESH TO START OVER</div>";
});