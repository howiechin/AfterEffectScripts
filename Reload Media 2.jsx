// Make sure there is an active composition and a selected layer
var comp = app.project.activeItem;

if (comp && comp instanceof CompItem) {
    var selectedLayers = comp.selectedLayers;

    if (selectedLayers.length > 0) {
        var layer = selectedLayers[0]; // Get the first selected layer

        // Check if the layer has a source and if it's a FootageItem
        if (layer.source && layer.source instanceof FootageItem) {
            // Reveal the source in the Project panel
            app.executeCommand(app.findMenuCommandId("Reveal Layer Source in Project"));
            
            // Use the After Effects menu command to reload footage
            app.executeCommand(app.findMenuCommandId("Reload Footage"));
            
            alert("Source revealed and footage reloaded.");
        } else {
            alert("The selected layer is not linked to a valid footage item.");
        }
    } else {
        alert("No layer selected.");
    }
} else {
    alert("No active composition found.");
}
