function layout1()
{
    document.getElementById("theNew").innerHTML = '.body{display: inherit;text-align: center;margin: auto;width: 90%;border-radius: 5px;font-size: 15px;}h1{margin: 5px;}.mapouter{margin: 0px;opacity: 50%;transition: 1s;height: 40vh;}.mapouter:hover{opacity: 100%;transition: 1s;}iframe{border-radius: 2px;width: 100%;height: 500px;}strong{visibility: visible;}.body h2:first-of-type{margin-top: inherit;}';
}
function layout2()
{
    document.getElementById("theNew").innerHTML = '.body{display: grid;grid-template-columns: 2fr 1fr;grid-template-rows: 1fr 1fr;width: 90%;border-radius: 5px;font-size: 1.4em;}.mapouter{grid-column-start: 1;grid-column-end: 2;grid-row-start: 1;grid-row-end: 3;margin: 0px;opacity: 50%;transition: 1s;height: 100%;}.mapouter:hover{opacity: 100%;transition: 0.5s;}.gmap_canvas{padding: 0px;margin: 0px;height: 100%;}#gmap_canvas{height: 100%;}.body h1, .body h2:first-of-type{grid-column-start: 2;grid-column-end: 3;grid-row-start: 1;grid-row-end: 2;height: max-content;}.body h2:first-of-type{margin-top: 20%;}h2:last-of-type{grid-column-start: 2;grid-column-end: 3;grid-row-start: 2;grid-row-end: 3;}strong{visibility: hidden;}';
}