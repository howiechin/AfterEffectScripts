// Add Adjustment Layer with Effect.jsx
try{
    var adjLayer = app.project.activeItem.layers.addSolid([100,100,0], "Adjustment Layer", app.project.activeItem.width, app.project.activeItem.height, app.project.activeItem.pixelAspect, app.project.activeItem.duration);
    adjLayer.adjustmentLayer = true;
   // adjLayer.effect.addProperty("Curves"); 
    }
catch (e) {
    alert (e);
    }