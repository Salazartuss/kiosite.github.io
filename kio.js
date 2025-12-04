async function readTextFileNode(filename) {
    const response = await fetch(filename);
    const texteContenu = await response.text();
    return texteContenu;

}

async function test(elementId){
    let element=document.getElementById(elementId);
    element.textContent = await readTextFileNode('kioTxt');
}
