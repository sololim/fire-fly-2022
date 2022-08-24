basic.forever(function () {
    music.playMelody("C5 B A G F E D C ", 120)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    music.playMelody("C D E F G A B C5 ", 120)
    basic.showLeds(`
        . . . . .
        . . . # .
        . # . . .
        . . . . .
        . . . . .
        `)
    music.playMelody("E B C5 A B G A F ", 120)
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . . .
        . . . . .
        . . . . #
        `)
    music.playMelody("A F E F D G E F ", 120)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.playMelody("C5 A B G A F G E ", 120)
    basic.showLeds(`
        . . . . #
        # . # . .
        . . . . .
        . . . # .
        # . . . .
        `)
    music.playMelody("G B A G C5 B A B ", 120)
    basic.showLeds(`
        . . . # .
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        `)
    music.playMelody("B A G A G F A C5 ", 120)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
    music.playMelody("G F G A - F E D ", 120)
})
