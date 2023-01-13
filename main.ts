input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Target)
})
for (let index = 0; index < 69; index++) {
    music.playMelody("C5 B A G A B C5 C ", 500)
}
