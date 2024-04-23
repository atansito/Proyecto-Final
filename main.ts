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
controller.moveSprite(Principal)
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
