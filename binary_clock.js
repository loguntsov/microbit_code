let a = 0
let b = 0
let index2 = 0
let index = 0
input.onButtonPressed(Button.A, function () {
    a = 0
    b = 0
})
input.onButtonPressed(Button.B, function () {
    a += 1
    if (a > 10) {
        a = 0
        b += 1
    }
    if (b > 10) {
        a = 0
        b = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    b = 0
    a = 0
})
basic.forever(function () {
    a += 1
    if (a > 10) {
        a = 0
        b += 1
    }
    if (b > 10) {
        a = 0
        b = 0
    }
    basic.pause(1000)
})
basic.forever(function () {
    basic.clearScreen()
    index2 = 0
    index = 0
    while (index < a) {
        led.plot(index % 5, index2)
        index += 1
        if (index == 5) {
            index2 += 1
        }
    }
    index = 0
    index2 = 3
    while (index < b) {
        led.plot(index % 5, index2)
        index += 1
        if (index == 5) {
            index2 += 1
        }
    }
    basic.pause(100)
})
