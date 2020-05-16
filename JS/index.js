function layout1()
{
    document.getElementById("theNew").innerHTML = '.body{display: grid;grid-template-columns: 1fr 1fr;grid-template-rows: 3em 1fr 1fr;margin: auto;padding: 10px;width: 90%;border-radius: 5px;font-size: 1.4em;}.header{text-align: center;grid-column-start: 1;grid-column-end: 3;grid-row-start: 1;grid-row-end: 2;}.bio{background-color: var(--main-color);border-radius: 5px;padding: 10px;grid-column-start: 1;grid-column-end: 2;grid-row-start: 2;grid-row-end: 4;}.MiiImg {grid-column-start: 2;grid-column-end: 3;grid-row-start: 2;grid-row-end: 3;width: 100%;}.MiiImg img{margin: auto;width: 98%;margin-left: 2%;}.MiiImg2{grid-column-start: 2;grid-column-end: 3;grid-row-start: 3;grid-row-end: 4;width: 100%;height: unset;}.MiiImg2 img{width: 100%;height: unset;visibility: visible;}';
}

function layout2()
{
    document.getElementById("theNew").innerHTML = '.body{display: grid;grid-template-columns: 1fr;grid-template-rows: 3em 1fr max-content;font-size: 2.4em;}.header{text-align: center;grid-column-start: 1;grid-column-end: 3;grid-row-start: 1;grid-row-end: 2;}.bio{grid-column-start: 1;grid-column-end: 2;grid-row-start: 3;grid-row-end: 4;font-size: 1em;}.bio > p{width: 90%;margin-left: 5%;text-align: left;}.bio h2{text-align: center;}.MiiImg {grid-column-start: 1;grid-column-end: 2;grid-row-start: 2;grid-row-end: 3;height: min-content;}.MiiImg img{margin-left: 33%;width: 33%;}.MiiImg2 img{grid-column-start: 2;grid-column-end: 2;grid-row-start: 4;grid-row-end: 4;width: 0px;height: 0px;}';
}