function layout1()
{
    document.getElementById("theNew").innerHTML = '.body{font-size: 2.4em;width:80%;display: grid;grid-template-columns: 1fr;grid-template-rows: fit-content max-content;}.body > table{border: solid black 2px;grid-column-start: 1;grid-column-end: 2;grid-row-start: 1;grid-row-end: 1;border-radius: 5px;margin-bottom: 25px;}.body th{border-right: solid black 2px;transition: 2s;}.body > table img{width: 0px;}.skillBio{grid-column-start: 1;grid-column-end: 2;grid-row-start: 2;grid-row-end: 3;}.skillBio p{margin: 0px;}td{transition: 2s;}';
}

function layout2()
{
    document.getElementById("theNew").innerHTML = '.body{font-size: 2.4em;width:95%;grid-template-columns: 1fr 1fr;grid-template-rows: 1fr;}table{border: solid black 3px;border-collapse: collapse;grid-column-start: 1;grid-column-end: 2;grid-row-start: 1;grid-row-end: 2;}.body th{border-right: solid black 3px;width: 100%;height: 170px;transition: 2s;padding: 0px;}td{width: 0%;transition: 2s;padding: 0px;}.body > table:hover td{width: 14%;transition: 2s;}.body > table:hover th{width:35%;transition: 2s;}.body > table img{width: 0px;transition: 2s;}.body > table:hover img{width: 100%;transition: 2s;}#filled{animation-name: colorful;animation-duration: 7s;animation-iteration-count: infinite;}.end{border-top-right-radius: 50%;border-bottom-right-radius: 50%;}.skillBio{grid-column-start: 2;grid-column-end: 3;grid-row-start: 1;grid-row-end: 2;text-align: left;}';
}