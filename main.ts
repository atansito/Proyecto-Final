namespace SpriteKind {
    export const Moneda_1 = SpriteKind.create()
    export const Moneda_2 = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Principal.isHittingTile(CollisionDirection.Bottom)) {
        Principal.vy = -150
    }
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
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level8`)
    Principal.setPosition(20, 120)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_1, function (sprite, otherSprite) {
    sprites.destroy(Moneda_01)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_2, function (sprite, otherSprite) {
    sprites.destroy(Moneda_02)
    info.changeScoreBy(1)
})
let Moneda_02: Sprite = null
let Moneda_01: Sprite = null
let Principal: Sprite = null
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
controller.moveSprite(Principal, 100, 0)
Principal.setStayInScreen(true)
scene.cameraFollowSprite(Principal)
tiles.setCurrentTilemap(tilemap`Nivel 1`)
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
Principal.setPosition(20, 120)
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
Moneda_01.setPosition(60, 165)
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
Moneda_02.setPosition(90, 165)
