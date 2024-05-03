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
    export const Esqueleto_2 = SpriteKind.create()
    export const Esqueleto_3 = SpriteKind.create()
    export const Esqueleto_4 = SpriteKind.create()
    export const Esqueleto_5 = SpriteKind.create()
    export const Ojo_1 = SpriteKind.create()
    export const Ojo_2 = SpriteKind.create()
    export const Moneda_10 = SpriteKind.create()
    export const Moneda_11 = SpriteKind.create()
    export const Moneda_12 = SpriteKind.create()
    export const Moneda_13 = SpriteKind.create()
    export const Moneda_14 = SpriteKind.create()
    export const Moneda_15 = SpriteKind.create()
    export const Moneda_16 = SpriteKind.create()
    export const Moneda_17 = SpriteKind.create()
    export const Moneda_18 = SpriteKind.create()
    export const Moneda_19 = SpriteKind.create()
    export const Moneda_20 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Ojo_1, assets.tile`Derecha0`, function (sprite, location) {
    animation.runImageAnimation(
    Ojo_12,
    [
    Ojo_Derecha_1,
    Ojo_Derecha_2,
    Ojo_Derecha_3,
    Ojo_Derecha_4
    ],
    200,
    true
    )
    Ojo_12.setVelocity(50, 0)
})
scene.onOverlapTile(SpriteKind.Esqueleto_2, assets.tile`Izquierda`, function (sprite, location) {
    animation.runImageAnimation(
    Esqueleto_22,
    [
    Esqueleto_Izquierda_1,
    Esqueleto_Izquierda_2,
    Esqueleto_Izquierda_3,
    Esqueleto_Izquierda_4
    ],
    200,
    true
    )
    Esqueleto_22.setVelocity(-50, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_15, function (sprite, otherSprite) {
    sprites.destroy(Moneda_15)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Esqueleto_1, function (sprite, otherSprite) {
    sprites.destroy(Esqueleto_12)
    info.changeScoreBy(10)
})
scene.onOverlapTile(SpriteKind.Ojo_2, assets.tile`Derecha0`, function (sprite, location) {
    animation.runImageAnimation(
    Ojo_22,
    [
    Ojo_Derecha_1,
    Ojo_Derecha_2,
    Ojo_Derecha_3,
    Ojo_Derecha_4
    ],
    200,
    true
    )
    Ojo_22.setVelocity(50, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_12, function (sprite, otherSprite) {
    sprites.destroy(Moneda_12)
    info.changeScoreBy(1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Principal.isHittingTile(CollisionDirection.Bottom)) {
        Principal.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    info.changeLifeBy(-1)
    Principal.setPosition(20, 130)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
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
        `, Principal, 150, 0)
    animation.runImageAnimation(
    projectile,
    [Aire_Derecho_1, Aire_Derecho_2],
    500,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    game.showLongText("¿Qué palabra clave se utiliza para definir una función en Python?", DialogLayout.Bottom)
    game.showLongText("1) define", DialogLayout.Bottom)
    game.showLongText("2) function", DialogLayout.Bottom)
    game.showLongText("3) def", DialogLayout.Bottom)
    game.showLongText("4) func", DialogLayout.Bottom)
    if (game.askForNumber("", 1) != 3) {
        game.showLongText("Lo siento! Respuesta incorrecta, menos una vida >:)", DialogLayout.Bottom)
        info.changeLifeBy(-1)
        Principal.setPosition(427, 40)
    } else {
        game.showLongText("Felicidades! Respuesta correcta", DialogLayout.Bottom)
        Principal.sayText(Respuestas._pickRandom(), 5000, true)
        tiles.setTileAt(location, assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(39, 10), sprites.dungeon.chestOpen)
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
scene.onOverlapTile(SpriteKind.Esqueleto_4, assets.tile`Izquierda`, function (sprite, location) {
    animation.runImageAnimation(
    Esqueleto_42,
    [
    Esqueleto_Izquierda_1,
    Esqueleto_Izquierda_2,
    Esqueleto_Izquierda_3,
    Esqueleto_Izquierda_4
    ],
    200,
    true
    )
    Esqueleto_42.setVelocity(-50, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_17, function (sprite, otherSprite) {
    sprites.destroy(Moneda_17)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Esqueleto_3, function (sprite, otherSprite) {
    sprites.destroy(Esqueleto_32)
    info.changeScoreBy(10)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_3, function (sprite, otherSprite) {
    sprites.destroy(Moneda_03)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Esqueleto_5, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Principal.setPosition(20, 130)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ojo_2, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Principal.setPosition(20, 130)
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
    info.changeLifeBy(-1)
    Principal.setPosition(20, 130)
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Esqueleto_4, function (sprite, otherSprite) {
    sprites.destroy(Esqueleto_42)
    info.changeScoreBy(10)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_10, function (sprite, otherSprite) {
    sprites.destroy(Moneda_10)
    info.changeScoreBy(1)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ojo_1, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Principal.setPosition(20, 130)
})
scene.onOverlapTile(SpriteKind.Esqueleto_3, assets.tile`Izquierda`, function (sprite, location) {
    animation.runImageAnimation(
    Esqueleto_32,
    [
    Esqueleto_Izquierda_1,
    Esqueleto_Izquierda_2,
    Esqueleto_Izquierda_3,
    Esqueleto_Izquierda_4
    ],
    200,
    true
    )
    Esqueleto_32.setVelocity(-50, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_19, function (sprite, otherSprite) {
    sprites.destroy(Moneda_19)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_18, function (sprite, otherSprite) {
    sprites.destroy(Moneda_18)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Esqueleto_3, assets.tile`Derecha0`, function (sprite, location) {
    animation.runImageAnimation(
    Esqueleto_32,
    [
    Esqueleto_Derecha_1,
    Esqueleto_Derecha_2,
    Esqueleto_Derecha_3,
    Esqueleto_Derecha_4
    ],
    200,
    true
    )
    Esqueleto_32.setVelocity(50, 0)
})
scene.onOverlapTile(SpriteKind.Esqueleto_1, assets.tile`Izquierda`, function (sprite, location) {
    animation.runImageAnimation(
    Esqueleto_12,
    [
    Esqueleto_Izquierda_1,
    Esqueleto_Izquierda_2,
    Esqueleto_Izquierda_3,
    Esqueleto_Izquierda_4
    ],
    200,
    true
    )
    Esqueleto_12.setVelocity(-50, 0)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchDown, function (sprite, location) {
    game.showLongText("¿Cuál es el método utilizado para obtener la longitud de una lista en Python?", DialogLayout.Bottom)
    game.showLongText("1) len()", DialogLayout.Bottom)
    game.showLongText("2) length()", DialogLayout.Bottom)
    game.showLongText("3) size()", DialogLayout.Bottom)
    game.showLongText("4) count()", DialogLayout.Bottom)
    if (game.askForNumber("", 1) != 1) {
        game.showLongText("Lo siento! Respuesta incorrecta, menos una vida >:)", DialogLayout.Bottom)
        info.changeLifeBy(-1)
        Principal.setPosition(427, 54)
    } else {
        game.showLongText("Felicidades! Respuesta correcta", DialogLayout.Bottom)
        Principal.sayText(Respuestas._pickRandom(), 5000, true)
        tiles.setTileAt(location, assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(39, 10), sprites.dungeon.purpleSwitchUp)
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
scene.onOverlapTile(SpriteKind.Esqueleto_5, assets.tile`Izquierda`, function (sprite, location) {
    animation.runImageAnimation(
    Esqueleto_52,
    [
    Esqueleto_Izquierda_1,
    Esqueleto_Izquierda_2,
    Esqueleto_Izquierda_3,
    Esqueleto_Izquierda_4
    ],
    200,
    true
    )
    Esqueleto_52.setVelocity(-50, 0)
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
scene.onOverlapTile(SpriteKind.Ojo_1, assets.tile`Izquierda`, function (sprite, location) {
    animation.runImageAnimation(
    Ojo_12,
    [
    Ojo_Izquierda_1,
    Ojo_Izquierda_2,
    Ojo_Izquierda_3,
    Ojo_Izquierda_4
    ],
    200,
    true
    )
    Ojo_12.setVelocity(-50, 0)
})
scene.onOverlapTile(SpriteKind.Ojo_2, assets.tile`Izquierda`, function (sprite, location) {
    animation.runImageAnimation(
    Ojo_22,
    [
    Ojo_Izquierda_1,
    Ojo_Izquierda_2,
    Ojo_Izquierda_3,
    Ojo_Izquierda_4
    ],
    200,
    true
    )
    Ojo_22.setVelocity(-50, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_9, function (sprite, otherSprite) {
    sprites.destroy(Moneda_09)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_1, function (sprite, otherSprite) {
    sprites.destroy(Moneda_01)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Esqueleto_4, assets.tile`Derecha0`, function (sprite, location) {
    animation.runImageAnimation(
    Esqueleto_42,
    [
    Esqueleto_Derecha_1,
    Esqueleto_Derecha_2,
    Esqueleto_Derecha_3,
    Esqueleto_Derecha_4
    ],
    200,
    true
    )
    Esqueleto_42.setVelocity(50, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Esqueleto_3, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Principal.setPosition(20, 130)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_5, function (sprite, otherSprite) {
    sprites.destroy(Moneda_05)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_14, function (sprite, otherSprite) {
    sprites.destroy(Moneda_14)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Esqueleto_2, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Principal.setPosition(20, 130)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_4, function (sprite, otherSprite) {
    sprites.destroy(Moneda_04)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Ojo_1, function (sprite, otherSprite) {
    sprites.destroy(Ojo_12)
    info.changeScoreBy(10)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Ojo_2, function (sprite, otherSprite) {
    sprites.destroy(Ojo_22)
    info.changeScoreBy(10)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    game.showLongText("¿Qué símbolo se utiliza para comentar una línea en Python?", DialogLayout.Bottom)
    game.showLongText("1) //", DialogLayout.Bottom)
    game.showLongText("2) #", DialogLayout.Bottom)
    game.showLongText("3) --", DialogLayout.Bottom)
    game.showLongText("4) /**/", DialogLayout.Bottom)
    if (game.askForNumber("", 1) != 2) {
        game.showLongText("Lo siento! Respuesta incorrecta, menos una vida >:)", DialogLayout.Bottom)
        info.changeLifeBy(-1)
        Principal.setPosition(427, 54)
    } else {
        game.showLongText("Felicidades! Respuesta correcta", DialogLayout.Bottom)
        Principal.sayText(Respuestas._pickRandom(), 5000, true)
        tiles.setTileAt(location, assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(0, 2), sprites.dungeon.doorOpenNorth)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_13, function (sprite, otherSprite) {
    sprites.destroy(Moneda_13)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_2, function (sprite, otherSprite) {
    sprites.destroy(Moneda_02)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Esqueleto_4, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Principal.setPosition(20, 130)
})
scene.onOverlapTile(SpriteKind.Esqueleto_2, assets.tile`Derecha0`, function (sprite, location) {
    animation.runImageAnimation(
    Esqueleto_22,
    [
    Esqueleto_Derecha_1,
    Esqueleto_Derecha_2,
    Esqueleto_Derecha_3,
    Esqueleto_Derecha_4
    ],
    200,
    true
    )
    Esqueleto_22.setVelocity(50, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_8, function (sprite, otherSprite) {
    sprites.destroy(Moneda_08)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Esqueleto_5, assets.tile`Derecha0`, function (sprite, location) {
    animation.runImageAnimation(
    Esqueleto_52,
    [
    Esqueleto_Derecha_1,
    Esqueleto_Derecha_2,
    Esqueleto_Derecha_3,
    Esqueleto_Derecha_4
    ],
    200,
    true
    )
    Esqueleto_52.setVelocity(50, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_20, function (sprite, otherSprite) {
    sprites.destroy(Moneda_20)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_11, function (sprite, otherSprite) {
    sprites.destroy(Moneda_11)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Esqueleto_5, function (sprite, otherSprite) {
    sprites.destroy(Esqueleto_52)
    info.changeScoreBy(10)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level8`)
    Principal.setPosition(20, 130)
    Llave = false
    sprites.destroy(Esqueleto_12)
    sprites.destroy(Esqueleto_22)
    sprites.destroy(Esqueleto_32)
    sprites.destroy(Moneda_01)
    sprites.destroy(Moneda_02)
    sprites.destroy(Moneda_03)
    sprites.destroy(Moneda_04)
    sprites.destroy(Moneda_05)
    sprites.destroy(Moneda_06)
    sprites.destroy(Moneda_07)
    sprites.destroy(Moneda_08)
    sprites.destroy(Moneda_09)
    Esqueleto_42 = sprites.create(img`
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
        `, SpriteKind.Esqueleto_4)
    animation.runImageAnimation(
    Esqueleto_42,
    [
    Esqueleto_Derecha_1,
    Esqueleto_Derecha_2,
    Esqueleto_Derecha_3,
    Esqueleto_Derecha_4
    ],
    200,
    true
    )
    Esqueleto_42.setPosition(420, 163)
    Esqueleto_42.setVelocity(50, 0)
    Esqueleto_52 = sprites.create(img`
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
        `, SpriteKind.Esqueleto_5)
    animation.runImageAnimation(
    Esqueleto_52,
    [
    Esqueleto_Derecha_1,
    Esqueleto_Derecha_2,
    Esqueleto_Derecha_3,
    Esqueleto_Derecha_4
    ],
    200,
    true
    )
    Esqueleto_52.setPosition(140, 163)
    Esqueleto_52.setVelocity(50, 0)
    Ojo_12 = sprites.create(img`
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
        `, SpriteKind.Ojo_1)
    animation.runImageAnimation(
    Ojo_12,
    [
    Ojo_Derecha_1,
    Ojo_Derecha_2,
    Ojo_Derecha_3,
    Ojo_Derecha_4
    ],
    200,
    true
    )
    Ojo_12.changeScale(1.5, ScaleAnchor.Middle)
    Ojo_12.setPosition(170, 28)
    Ojo_12.setVelocity(50, 0)
    Ojo_22 = sprites.create(img`
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
        `, SpriteKind.Ojo_2)
    animation.runImageAnimation(
    Ojo_22,
    [
    Ojo_Derecha_1,
    Ojo_Derecha_2,
    Ojo_Derecha_3,
    Ojo_Derecha_4
    ],
    200,
    true
    )
    Ojo_22.changeScale(1.5, ScaleAnchor.Middle)
    Ojo_22.setPosition(380, 44)
    Ojo_22.setVelocity(50, 0)
    Moneda_10 = sprites.create(img`
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
        `, SpriteKind.Moneda_10)
    animation.runImageAnimation(
    Moneda_10,
    [
    Moneda_1,
    Moneda_2,
    Moneda_3,
    Moneda_4
    ],
    100,
    true
    )
    Moneda_10.setPosition(60, 39)
    Moneda_11 = sprites.create(img`
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
        `, SpriteKind.Moneda_11)
    animation.runImageAnimation(
    Moneda_11,
    [
    Moneda_1,
    Moneda_2,
    Moneda_3,
    Moneda_4
    ],
    100,
    true
    )
    Moneda_11.setPosition(90, 39)
    Moneda_12 = sprites.create(img`
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
        `, SpriteKind.Moneda_12)
    animation.runImageAnimation(
    Moneda_12,
    [
    Moneda_1,
    Moneda_2,
    Moneda_3,
    Moneda_4
    ],
    100,
    true
    )
    Moneda_12.setPosition(120, 39)
    Moneda_13 = sprites.create(img`
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
        `, SpriteKind.Moneda_13)
    animation.runImageAnimation(
    Moneda_13,
    [
    Moneda_1,
    Moneda_2,
    Moneda_3,
    Moneda_4
    ],
    100,
    true
    )
    Moneda_13.setPosition(217, 73)
    Moneda_14 = sprites.create(img`
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
        `, SpriteKind.Moneda_14)
    animation.runImageAnimation(
    Moneda_14,
    [
    Moneda_1,
    Moneda_2,
    Moneda_3,
    Moneda_4
    ],
    100,
    true
    )
    Moneda_14.setPosition(237, 73)
    Moneda_15 = sprites.create(img`
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
        `, SpriteKind.Moneda_15)
    animation.runImageAnimation(
    Moneda_15,
    [
    Moneda_1,
    Moneda_2,
    Moneda_3,
    Moneda_4
    ],
    100,
    true
    )
    Moneda_15.setPosition(328, 105)
    Moneda_16 = sprites.create(img`
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
        `, SpriteKind.Moneda_16)
    animation.runImageAnimation(
    Moneda_16,
    [
    Moneda_1,
    Moneda_2,
    Moneda_3,
    Moneda_4
    ],
    100,
    true
    )
    Moneda_16.setPosition(348, 105)
    Moneda_17 = sprites.create(img`
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
        `, SpriteKind.Moneda_17)
    animation.runImageAnimation(
    Moneda_17,
    [
    Moneda_1,
    Moneda_2,
    Moneda_3,
    Moneda_4
    ],
    100,
    true
    )
    Moneda_17.setPosition(426, 57)
    Moneda_18 = sprites.create(img`
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
        `, SpriteKind.Moneda_18)
    animation.runImageAnimation(
    Moneda_18,
    [
    Moneda_1,
    Moneda_2,
    Moneda_3,
    Moneda_4
    ],
    100,
    true
    )
    Moneda_18.setPosition(426, 169)
    Moneda_19 = sprites.create(img`
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
        `, SpriteKind.Moneda_19)
    animation.runImageAnimation(
    Moneda_19,
    [
    Moneda_1,
    Moneda_2,
    Moneda_3,
    Moneda_4
    ],
    100,
    true
    )
    Moneda_19.setPosition(456, 169)
    Moneda_20 = sprites.create(img`
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
        `, SpriteKind.Moneda_20)
    animation.runImageAnimation(
    Moneda_20,
    [
    Moneda_1,
    Moneda_2,
    Moneda_3,
    Moneda_4
    ],
    100,
    true
    )
    Moneda_20.setPosition(486, 169)
})
scene.onOverlapTile(SpriteKind.Esqueleto_1, assets.tile`Derecha0`, function (sprite, location) {
    animation.runImageAnimation(
    Esqueleto_12,
    [
    Esqueleto_Derecha_1,
    Esqueleto_Derecha_2,
    Esqueleto_Derecha_3,
    Esqueleto_Derecha_4
    ],
    200,
    true
    )
    Esqueleto_12.setVelocity(50, 0)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_6, function (sprite, otherSprite) {
    sprites.destroy(Moneda_06)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda_16, function (sprite, otherSprite) {
    sprites.destroy(Moneda_16)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Esqueleto_2, function (sprite, otherSprite) {
    sprites.destroy(Esqueleto_22)
    info.changeScoreBy(10)
})
let Moneda_16: Sprite = null
let Llave = false
let Moneda_11: Sprite = null
let Moneda_20: Sprite = null
let Moneda_13: Sprite = null
let Moneda_14: Sprite = null
let Esqueleto_52: Sprite = null
let Moneda_18: Sprite = null
let Moneda_19: Sprite = null
let Moneda_10: Sprite = null
let Moneda_17: Sprite = null
let Esqueleto_42: Sprite = null
let projectile: Sprite = null
let Moneda_12: Sprite = null
let Ojo_22: Sprite = null
let Moneda_15: Sprite = null
let Ojo_12: Sprite = null
let Moneda_09: Sprite = null
let Moneda_08: Sprite = null
let Moneda_07: Sprite = null
let Moneda_06: Sprite = null
let Moneda_05: Sprite = null
let Moneda_04: Sprite = null
let Moneda_03: Sprite = null
let Moneda_02: Sprite = null
let Moneda_01: Sprite = null
let Esqueleto_32: Sprite = null
let Esqueleto_22: Sprite = null
let Esqueleto_12: Sprite = null
let Principal: Sprite = null
let Respuestas: string[] = []
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
Esqueleto_12 = sprites.create(img`
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
Esqueleto_22 = sprites.create(img`
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
    `, SpriteKind.Esqueleto_2)
Esqueleto_32 = sprites.create(img`
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
    `, SpriteKind.Esqueleto_3)
Esqueleto_12.setPosition(420, 163)
Esqueleto_12.setVelocity(50, 0)
Esqueleto_22.setPosition(170, 163)
Esqueleto_22.setVelocity(50, 0)
Esqueleto_32.setPosition(230, 83)
Esqueleto_32.setVelocity(50, 0)
animation.runImageAnimation(
Esqueleto_12,
[
Esqueleto_Derecha_1,
Esqueleto_Derecha_2,
Esqueleto_Derecha_3,
Esqueleto_Derecha_4
],
200,
true
)
animation.runImageAnimation(
Esqueleto_22,
[
Esqueleto_Derecha_1,
Esqueleto_Derecha_2,
Esqueleto_Derecha_3,
Esqueleto_Derecha_4
],
200,
true
)
animation.runImageAnimation(
Esqueleto_32,
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
Principal.setPosition(20, 130)
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
Moneda_01.setPosition(380, 120)
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
Moneda_02.setPosition(410, 120)
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
Moneda_03.setPosition(440, 120)
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
Moneda_04.setPosition(204, 88)
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
Moneda_05.setPosition(234, 88)
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
Moneda_06.setPosition(264, 88)
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
Moneda_07.setPosition(397, 40)
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
Moneda_08.setPosition(427, 40)
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
Moneda_09.setPosition(457, 40)
