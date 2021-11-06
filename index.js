import { Color } from 'three';
import {IfcViewerAPI} from 'web-ifc-viewer';

//Creando la escena y los ejes
const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({container, backgroundColor: new Color(243,243,247)});
viewer.addAxes();
viewer.addGrid();

//Obtener el input
const GUI = {
    input: document.getElementById('file-input'),
    loader: document.getElementById('loader-button')
}

//Abrir modelos con el boton
GUI.loader.onclick = () => GUI.input.click();
GUI.input.onchange = () => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    viewer.IFC.loadIfcUrl(url);
}

//Precargar modelos
viewer.IFC.loadIfcUrl('test.ifc');

//Seleccionar elementos