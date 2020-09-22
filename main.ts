input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . # # . .
            . . . # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (input.lightLevel() < 100) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # . .
            . # # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
