let Unghi = 0
basic.forever(function () {
    Unghi = input.compassHeading()
    if (Unghi > 315 || Unghi < 45) {
        basic.showString("N")
    } else if (Unghi > 45 && Unghi < 135) {
        basic.showString("E")
    } else if (Unghi > 135 && Unghi < 225) {
        basic.showString("S")
    } else if (Unghi > 225 && Unghi < 315) {
        basic.showString("V")
    }
})
