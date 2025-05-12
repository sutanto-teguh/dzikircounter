input.onButtonPressed(Button.A, function () {
    if (status == 0) {
        subhananallah += 1
        basic.showNumber(subhananallah)
        if (subhananallah == 33) {
            status = 1
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
        }
    } else if (status == 1) {
        alhamdulillah += 1
        basic.showNumber(alhamdulillah)
        if (alhamdulillah == 33) {
            status = 2
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
        }
    } else if (status == 2) {
        allahuakbar += 1
        basic.showNumber(allahuakbar)
        if (allahuakbar == 33) {
            status = 3
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
        }
    } else {
        laailhailallah += 1
        basic.showIcon(IconNames.SmallHeart)
        if (laailhailallah == 100) {
            status = 0
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
        }
    }
})
function resetCounter () {
    laailhailallah = 0
    subhananallah = 0
    alhamdulillah = 0
    allahuakbar = 0
    status = 0
}
input.onButtonPressed(Button.B, function () {
    resetCounter()
})
let laailhailallah = 0
let allahuakbar = 0
let alhamdulillah = 0
let subhananallah = 0
let status = 0
resetCounter()
basic.showLeds(`
    . . . # .
    . . . # .
    . # # # .
    . # . # .
    . # # # .
    `)
basic.pause(100)
basic.showLeds(`
    # # # . #
    # # # . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.forever(function () {
	
})
