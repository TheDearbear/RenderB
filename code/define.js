class Coordinate {
    constructor(X, Y, RotateX, RotateY) {
        this.X = X;
        this.Y = Y;
    }
}
class Entity {
    constructor(health, armor, position, damageable, playerControllable, aiControllable) {
        this.health         = health;
        this.armor          = armor;
        this.position       = position;
        this.damageable     = damageable;
        this.controllable   = playerControllable;
        this.hasAI          = aiControllable;
    }
}
class Player extends Entity {
    constructor(health, armor, position, damageable) {
        super(health, armor, position, damageable, true, false);
    }
    who() {
        return 'player';
    }
}
class NPC extends Entity {
    constructor(health, armor, position, damageable) {
        super(health, armor, position, damageable, false, true);
    }
    who() {
        return 'someone';
    }
}
class World {
    constructor(background, collition_map, scrollableX, scrollableY) {
        this.background     = background;
        this.collition_map  = collition_map;
        this.scrollableX    = scrollableX;
        this.scrollableY    = scrollableY;
    }
}
class Texture {
    constructor(image, repeat, offset, fromBottom, fromRight) {
        let thi = this;
        let img = new Image();

        img.onload = function() {
            thi.width = this.width;
            thi.height = this.height;

            thi.image = image;
            thi.repeat = repeat;

            if (fromBottom) offset.Y = window.innerHeight - thi.height;
            if (fromRight)  offset.X = window.innerWidth  - thi.width;
            thi.offset = offset;
        }
        img.src = image;
    }
}
class HUD {
    constructor() { this.textures = [] }
    add(texture) { this.textures.push(texture) }
    remove(texture) { this.textures.forEach(texture_array => { if (texture == texture_array) this.textures.remove(texture) } ) }
    update(old_texture, new_texture) { this.textures.forEach((texture_array, index) => { if (old_texture == texture_array) this.textures[index] = new_texture } ) }
    get() { return this.textures }
    render(context) { this.textures.forEach(texture => context.draw2DTexture(texture)) }
}

class Funcs {}

HTMLCanvasElement.prototype.resize = function(width, height, cb) {
    if (width || height) {
        if (width) this.width = width;
        if (height) this.height = height
    }
    else {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }
    if (cb) cb();
}
CanvasRenderingContext2D.prototype.draw2DTexture = function(texture) {
    let image = new Image(), thi = this;

    image.onload = function() {
        thi.drawImage(image, texture.offset.X, texture.offset.Y);
    }

    image.src = texture.image;
}

Array.prototype.remove = function(value) {
    let index = this.indexOf(value);
    if (index > -1) {
      this.splice(index, 1);
    }
  }

Funcs.random = function(min, max) {
    if (!max)
    {
        max = min;
        min = 0;
    }

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function loadImage(url)
{
    let image = new Image();

    image.onload = image.src = url;

    return image;
}

var canvas, context;
ready = true;