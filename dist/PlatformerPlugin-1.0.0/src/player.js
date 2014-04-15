
/**
* The player sprite
* 
* This generates a sprite that can use Kiwi's arcade physics.
*
*/

var PlayerSprite = function (state, texture, x, y) {
    //Call the Sprite constructor
    Kiwi.GameObjects.Sprite.call(this, state, texture, x, y);

    //Now lets add the ArcadePhysics Component to our new GameObject
    this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));

    this.update = function () {

        Kiwi.GameObjects.Sprite.prototype.update.call(this);
        //Execute the update method on the ArcadePhysics Component.
        this.physics.update();

    }

}

Kiwi.extend(PlayerSprite, Kiwi.GameObjects.Sprite);