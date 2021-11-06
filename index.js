import { Color } from 'three';
import {IfcViewerAPI} from 'web-ifc-viewer';

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({container, backgroundColor: new Color(255,255,255)});
viewer.addAxes();
viewer.addGrid();

const GUI = {
    input: document.getElementById('file-input'),
    loader: document.getElementById('loader-button')
}

GUI.loader.onclick = () => GUI.input.click();