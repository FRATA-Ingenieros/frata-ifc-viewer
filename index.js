// import { Color } from 'three';
import {IfcViewerAPI} from 'web-ifc-viewer';
import {
    IFCSPACE, IFCOPENINGELEMENT, IFCFURNISHINGELEMENT, IFCWALL, IFCWINDOW, IFCCURTAINWALL, IFCMEMBER, IFCPLATE, IFCPERSON
  } from 'web-ifc';
import { MeshBasicMaterial, LineBasicMaterial, Color, Mesh, BoxGeometry } from 'three';
import { ClippingEdges } from 'web-ifc-viewer/dist/components/display/clipping-planes/clipping-edges';

//Creando la escena y los ejes
const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({container, backgroundColor: new Color(243,243,247)});
viewer.axes.setAxes();
viewer.shadowDropper.darkness = 1.5;

// viewer.addGrid();

//Obtener el input
// const GUI = {
//     input: document.getElementById('file-input'),
//     loader: document.getElementById('loader-button'),
//     props: document.getElementById('property-menu')
// }

//Abrir modelos con el boton
// GUI.loader.onclick = () => GUI.input.click();
// GUI.input.onchange = () => {
//     const file = event.target.files[0];
//     const url = URL.createObjectURL(file);
//     viewer.IFC.loadIfcUrl(url);
// }

//Precargar modelos
//viewer.IFC.loader.ifcManager.useWebWorkers(true,'frata_concrete.ifc');
viewer.IFC.loadIfcUrl('frata_concrete.ifc');
// viewer.IFC.setWasmPath('frata_concrete.ifc');

viewer.IFC.loader.ifcManager.applyWebIfcConfig({
    USE_FAST_BOOLS: true,
    COORDINATE_TO_ORIGIN: true
  });

//Seleccionar elementos
container.onmousemove = () => viewer.IFC.prePickIfcItem();

// //Doble click para obtener propiedades
// container.ondblclick = async () => {
//     const found = await viewer.IFC.pickIfcItem(true);
//     if(found === null || found === undefined) return;
//     const props = await viewer.IFC.getProperties(found.modelID, found.id, true);    
//     console.log(props);

//     createPropertyMenu(props);
// }

//Crear menu de propiedades
// function createPropertyMenu(props) {
//     //Borrar los datos
//     removeAllChildren(GUI.props);

//     const mats = props.mats;
//     const psets = props.psets;
//     const type = props.type;

//     delete props.mats;
//     // delete props.psets;
//     delete props.type;
    
//     for(let propertyName in props) {
//         const propValue = props[propertyName];
//         updatePropertyEntry(propertyName,propValue);
//     }
// }

//Cerear los div para cada valor de propiedada
// function updatePropertyEntry(key, propertyValue){
//     //contenedor
//     const root = document.createElement('div');
//     root.classList.add('property-root');

//     // Nombre de la propiedad
//     const keyElement = document.createElement('div');
//     keyElement.classList.add('property-name')
//     keyElement.textContent = key;
//     root.appendChild(keyElement);

//     //obtener Valor de la propiedad
//     if(propertyValue === null || propertyValue === undefined) propertyValue ="Nothing";
//     else if(propertyValue.value) propertyValue = propertyValue.value;

//     //llenar el Valor de la propiedad
//     const valueElement = document.createElement('div');
//     valueElement.classList.add('property-value')
//     valueElement.textContent = propertyValue
//     root.appendChild(valueElement);

//     GUI.props.appendChild(root);
// }

// function removeAllChildren(element) {
//     while(element.firstChild) {
//         element.removeChild(element.firstChild);
//     }
// }