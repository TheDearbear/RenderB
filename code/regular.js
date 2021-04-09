if (!ready) window.location.reload();

canvas = document.getElementById('canvas-inner').parentElement;
context = canvas.getContext('2d');

canvas.resize(null, null, render);

var hud = new HUD();

var t = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAA20lEQVRYhWNkYGD4zzAMwf///xmJ8RWLU43/cPQ/AyMjIzxinWr84YGxt3kDqjqnGv9hmQKQwb6WjWAeckAwQAODaYDdRhcASuUgvK9lI0ZkYwTA5N47WN0EEscmh0sc3Sx0Nj59tALogeBcG4AaACAH5RarYDgMJo4uh0ucGECuPkoBeiCMiCyAD7Agy4FihNqAUPaghZ2EACwVgApFFsqMIgxgHkQPiIHwODYwmgWQOdgKOAZobGFLsrjEhwKAZYMR0RDCBUANpBGfBUYDYBC4YUDByA4ABgYGAPigazIcqF5mAAAAAElFTkSuQmCC';

hud.add(new Texture(t, false, { X: 0, Y: 0 }, true, false));
hud.add(new Texture('/assets/placeholder_' + Funcs.random(1, 3) + '.png', false, { X: 0, Y: 0 }));

window.onresize = function()
{
    canvas.resize(null, null, render);
};

function render()
{
    setTimeout(function()
    {
        context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        hud.render(context);
    }, 20);
}