controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Principal.isHittingTile(CollisionDirection.Bottom)) {
        Principal.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    info.changeLifeBy(-1)
    Principal.setPosition(20, 120)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(moneda)
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.siren), music.PlaybackMode.UntilDone)
})
let moneda: Sprite = null
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
let Slime_Verde = sprites.create(img`
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
    `, SpriteKind.Enemy)
moneda = sprites.create(img`
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
    `, SpriteKind.Food)
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
animation.runImageAnimation(
moneda,
[
Moneda_1,
Moneda_2,
Moneda_3,
Moneda_4
],
100,
true
)
moneda.setPosition(60, 165)
