namespace SpriteKind {
    export const Moneda_1 = SpriteKind.create()
    export const Moneda_2 = SpriteKind.create()
    export const Moneda_3 = SpriteKind.create()
    export const Moneda_4 = SpriteKind.create()
    export const Moneda_5 = SpriteKind.create()
    export const Moneda_6 = SpriteKind.create()
    export const Moneda_7 = SpriteKind.create()
    export const Moneda_8 = SpriteKind.create()
    export const Moneda_9 = SpriteKind.create()
    export const Esqueleto_1 = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Principal.isHittingTile(CollisionDirection.Bottom)) {
        Principal.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    game.showLongText("Para que sirve la funcion IF en Python?", DialogLayout.Bottom)
    game.showLongText("1) Para ingresar numeros", DialogLayout.Bottom)
    game.showLongText("2) Para ingresar texto", DialogLayout.Bottom)
    game.showLongText("3) Para crear condiciones", DialogLayout.Bottom)
    game.showLongText("4) Para crear ciclos", DialogLayout.Bottom)
    if (game.askForNumber("", 1) != 3) {
        game.showLongText("Lo siento! Respuesta incorrecta, menos una vida >:)", DialogLayout.Bottom)
        info.changeLifeBy(-1)
        Principal.setPosition(427, 54)
    } else {
        game.showLongText("Felicidades! Respuesta correcta", DialogLayout.Bottom)
        Principal.sayText(Respuestas._pickRandom(), 5000, true)
        Llave = true
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
    animation.runImageAnimation(
    Principal,
    [
    Quieto_Derecho_1,
    Quieto_Derecho_2,
    Quieto_Derecho_3,
    Quieto_Derecho_4
    ],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_3, function (sprite, otherSprite) {
    sprites.destroy(Moneda_03)
    info.changeScoreBy(1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Principal,
    [
    Movimiento_Izquierdo_1,
    Movimiento_Izquierdo_2,
    Movimiento_Izquierdo_3,
    Movimiento_Izquierdo_4
    ],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_7, function (sprite, otherSprite) {
    sprites.destroy(Moneda_07)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Esqueleto_1, function (sprite, otherSprite) {
    if (true) {
        let mySprite: Sprite = null
        sprites.destroy(mySprite)
    }
    info.changeLifeBy(-1)
    Principal.setPosition(20, 120)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    Principal,
    [
    Quieto_Derecho_1,
    Quieto_Derecho_2,
    Quieto_Derecho_3,
    Quieto_Derecho_4
    ],
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    Principal,
    [
    Quieto_Izquierdo_1,
    Quieto_Izquierdo_2,
    Quieto_Izquierdo_3,
    Quieto_Izquierdo_4
    ],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Esqueleto_1, assets.tile`Izquierda`, function (sprite, location) {
    animation.runImageAnimation(
    Esqueleto,
    [
    Esqueleto_Izquierda_1,
    Esqueleto_Izquierda_2,
    Esqueleto_Izquierda_3,
    Esqueleto_Izquierda_4
    ],
    100,
    true
    )
    Esqueleto.setVelocity(-50, 0)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    if (Llave == true) {
        tiles.setCurrentTilemap(tilemap`level8`)
        Principal.setPosition(20, 120)
        Llave = false
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Principal,
    [
    Movimiento_Derecha_1,
    Movimiento_Derecha_2,
    Movimiento_Derecha_3,
    Movimiento_Derecha_4
    ],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_9, function (sprite, otherSprite) {
    sprites.destroy(Moneda_09)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_1, function (sprite, otherSprite) {
    sprites.destroy(Moneda_01)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_5, function (sprite, otherSprite) {
    sprites.destroy(Moneda_05)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_4, function (sprite, otherSprite) {
    sprites.destroy(Moneda_04)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_2, function (sprite, otherSprite) {
    sprites.destroy(Moneda_02)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_8, function (sprite, otherSprite) {
    sprites.destroy(Moneda_08)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Esqueleto_1, assets.tile`Derecha0`, function (sprite, location) {
    animation.runImageAnimation(
    Esqueleto,
    [
    Esqueleto_Derecha_1,
    Esqueleto_Derecha_2,
    Esqueleto_Derecha_3,
    Esqueleto_Derecha_4
    ],
    100,
    true
    )
    Esqueleto.setVelocity(50, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_6, function (sprite, otherSprite) {
    sprites.destroy(Moneda_06)
    info.changeScoreBy(1)
})
let Moneda_09: Sprite = null
let Moneda_08: Sprite = null
let Moneda_07: Sprite = null
let Moneda_06: Sprite = null
let Moneda_05: Sprite = null
let Moneda_04: Sprite = null
let Moneda_03: Sprite = null
let Moneda_02: Sprite = null
let Moneda_01: Sprite = null
let Esqueleto: Sprite = null
let Principal: Sprite = null
let Respuestas: string[] = []
let Llave = false
Llave = false
Respuestas = [
"¡Oh, acerté! ¿Algún desafío real después de esto?",
"¿Correcto? ¡Por supuesto! ¿Qué esperabas?",
"¿Y qué esperabas? Soy el héroe, después de todo.",
"¡Exacto! Como si hubiera alguna duda.",
"¡Sorpresa, sorpresa! ¿Qué premio gané esta vez?",
"¡Fácil! ¿Habrá algo que me ponga a prueba?",
"¡Sí! ¿Hay algún desafío real por aquí?"
]
Principal = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Esqueleto = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Esqueleto_1)
Esqueleto.setPosition(397, 50)
Esqueleto.setVelocity(100, 0)
animation.runImageAnimation(
Esqueleto,
[
Esqueleto_Derecha_1,
Esqueleto_Derecha_2,
Esqueleto_Derecha_3,
Esqueleto_Derecha_4
],
200,
true
)
controller.moveSprite(Principal, 100, 0)
Principal.setStayInScreen(true)
scene.cameraFollowSprite(Principal)
scene.setBackgroundImage(Fondo_1)
tiles.setCurrentTilemap(tilemap`Nivel 1`)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal)
Principal.ay = 300
animation.runImageAnimation(
Principal,
[
Quieto_Derecho_1,
Quieto_Derecho_2,
Quieto_Derecho_3,
Quieto_Derecho_4
],
200,
true
)
Principal.setPosition(20, 180)
info.setLife(3)
info.setScore(0)
Moneda_01 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Moneda_1)
animation.runImageAnimation(
Moneda_01,
[
Moneda_1,
Moneda_2,
Moneda_3,
Moneda_4
],
100,
true
)
Moneda_01.setPosition(364, 150)
Moneda_02 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Moneda_2)
animation.runImageAnimation(
Moneda_02,
[
Moneda_1,
Moneda_2,
Moneda_3,
Moneda_4
],
100,
true
)
Moneda_02.setPosition(394, 150)
Moneda_03 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Moneda_3)
animation.runImageAnimation(
Moneda_03,
[
Moneda_1,
Moneda_2,
Moneda_3,
Moneda_4
],
100,
true
)
Moneda_03.setPosition(424, 150)
Moneda_04 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Moneda_4)
animation.runImageAnimation(
Moneda_04,
[
Moneda_1,
Moneda_2,
Moneda_3,
Moneda_4
],
100,
true
)
Moneda_04.setPosition(204, 102)
Moneda_05 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Moneda_5)
animation.runImageAnimation(
Moneda_05,
[
Moneda_1,
Moneda_2,
Moneda_3,
Moneda_4
],
100,
true
)
Moneda_05.setPosition(234, 102)
Moneda_06 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Moneda_6)
animation.runImageAnimation(
Moneda_06,
[
Moneda_1,
Moneda_2,
Moneda_3,
Moneda_4
],
100,
true
)
Moneda_06.setPosition(264, 102)
Moneda_07 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Moneda_7)
animation.runImageAnimation(
Moneda_07,
[
Moneda_1,
Moneda_2,
Moneda_3,
Moneda_4
],
100,
true
)
Moneda_07.setPosition(397, 54)
Moneda_08 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Moneda_8)
animation.runImageAnimation(
Moneda_08,
[
Moneda_1,
Moneda_2,
Moneda_3,
Moneda_4
],
100,
true
)
Moneda_08.setPosition(427, 54)
Moneda_09 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Moneda_9)
animation.runImageAnimation(
Moneda_09,
[
Moneda_1,
Moneda_2,
Moneda_3,
Moneda_4
],
100,
true
)
Moneda_09.setPosition(457, 54)
