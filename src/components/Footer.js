import {useLocation} from "react-router-dom"

const Footer = ()=>{
    const location = useLocation();
    let layout1,layout2;
    if(location.pathname === "/")
    {
        layout1 = ()=>
        {
            document.getElementById("theNew").innerHTML = '.body{display: grid;grid-template-columns: 1fr 1fr;grid-template-rows: 3em 1fr min-content;margin: auto;padding: 10px;width: 90%;border-radius: 5px;font-size: 2em;}.header{text-align: center;grid-column-start: 1;grid-column-end: 3;grid-row-start: 1;grid-row-end: 2;}.bio{background-color: var(--main-color); width:80%; border-radius: 5px;padding: 10px;grid-column-start: 1;grid-column-end: 2;grid-row-start: 2;grid-row-end: 3;}.MiiImg {grid-column-start: 2;grid-column-end: 3;grid-row-start: 2;grid-row-end: 3;width: 100%;}.MiiImg img{margin: auto;width: 80%;margin-left: 2%;}.MiiImg2{grid-column-start: 1;grid-column-end: 3;grid-row-start: 3;grid-row-end: 4;width: 100%;height: min-content;}.MiiImg2 img{margin-right: 30%; margin-left: 30%; width: 40%;height: unset;visibility: visible; border-radius: 20%;}';
        }

        layout2 = ()=>
        {
            document.getElementById("theNew").innerHTML = '.body{display: grid;grid-template-columns: 1fr;grid-template-rows: 3em 1fr max-content;font-size: 2.4em;}.header{text-align: center;grid-column-start: 1;grid-column-end: 3;grid-row-start: 1;grid-row-end: 2;}.bio{grid-column-start: 1;grid-column-end: 2;grid-row-start: 3;grid-row-end: 4;font-size: 1em;}.bio > p{width: 90%;margin-left: 5%;text-align: left;}.bio h2{text-align: center;}.MiiImg {grid-column-start: 1;grid-column-end: 2;grid-row-start: 2;grid-row-end: 3;height: min-content;}.MiiImg img{margin-left: 33%;width: 33%;}.MiiImg2 img{grid-column-start: 1;grid-column-end: 2;grid-row-start: 3;grid-row-end: 4;width: 0px;height: 0px;}';
        }
    }
    else if(location.pathname === "/Resume")
    {
        layout1 = ()=>
        {
            document.getElementById("theNew").innerHTML = '.body{width: 80%;display: grid;grid-template-columns: 1fr 1fr;grid-template-rows: 4fr 6fr 1fr;}.body > h1, .body > h2, .body > h3{height: max-content;}.body h1:first-of-type, .body h2:first-of-type{grid-column-start: 1;grid-column-end: 2;grid-row-start: 1;grid-row-end: 2;}.body h2:first-of-type{margin-top: 20%;}.body > h1:nth-of-type(2), .body > h3{grid-column-start: 2;grid-column-end: 3;grid-row-start: 1;grid-row-end: 2;}.body > h3{margin-top: 20%;}.body > h1:last-of-type, .body > ul{grid-column-start: 1;grid-column-end: 3;grid-row-start: 2;grid-row-end: 3;}.body > ul{margin-top: 10%;height: min-content;}.body > a{grid-column-start: 1;grid-column-end: 3;grid-row-start: 3;grid-row-end: 4;width: min-content;margin: auto;}';
        }

        layout2 = ()=>
        {
            document.getElementById("theNew").innerHTML = '.body{width: 90%;display: grid;grid-template-columns: 1fr 1fr;grid-template-rows: 5em 2fr 6fr 1fr;}.body > ul{text-align: left;padding: 30px;}.body > h1{font-size: 3em;width: fit-content;margin-left: auto;margin-right: auto;margin-bottom: 10px;}.body > h2{font-size: 2em;width: max-content;margin-left: auto;margin-right: auto;margin-top: unset;}.body > h3{font-size: 1.5em;width: fit-content;margin-left: auto;margin-right: auto;}.body h1:first-of-type{grid-column-start: 1;grid-column-end: 3;grid-row-start: 1;grid-row-end: 2;margin-top: 0px;margin-bottom: 0px;font-size: 4em;}.body h2:first-of-type{margin-top: 20%;visibility: hidden;}.body > h1:nth-of-type(2), .body > h3{grid-column-start: 1;grid-column-end: 3;grid-row-start: 2;grid-row-end: 3;}.body > h1:nth-of-type(2){margin-top: 0px;}.body > h3{margin-top: 6%;}.body > h1:last-of-type, .body > ul{grid-column-start: 1;grid-column-end: 3;grid-row-start: 3;grid-row-end: 4;}.body > ul{margin-top: 10%;height: min-content;}.body > a{grid-column-start: 1;grid-column-end: 3;grid-row-start: 4;grid-row-end: 5;width: min-content;height: min-content;margin-top: 20px;margin-bottom: 0px;margin-left: auto;margin-right: auto;}';
        }
    }
    else if(location.pathname === "/Sites")
    {
        layout1 = ()=>
        {
            document.getElementById("theNew").innerHTML = '.body{width: 60%;margin: auto;}.body h1{font-size: 40px;text-align: center;}.body div{display: initial;width: unset;margin-left: unset;font-size: 30px;text-align: center;background: var(--main-color);margin-bottom: 10px;height: 290px;}.body > div img{width: 100%;border-radius: 5px;height: 190px;}.body a:visited, .body a:link{color: black;text-decoration: none;}.body a:hover, .body a:active{color: rgb(255, 255, 255);transition: 1s;background-color: black;}.body a:hover p{animation-name: FntGrow2;animation-duration: 750ms;animation-fill-mode: forwards;}.body a:hover p#twoLiner{animation-name: FntGrow4;animation-duration: 750ms;animation-fill-mode: forwards;}.body > div:nth-of-type(odd){border-radius: 5px;clear: both;width: 40%;float: left;}.body > div:nth-of-type(even){border-radius: 5px;width: 40%;float: right;}.body > div > a > p:hover{animation-name: FntGrow2;animation-duration: 750ms;animation-fill-mode: forwards;}.body > div > a > p#twoLiner:hover{animation-name: FntGrow4;animation-duration: 750ms;animation-fill-mode: forwards;margin-top: 12px;margin-bottom: 12px;}';
        }

        layout2 = ()=>
        {
            document.getElementById("theNew").innerHTML = '.body{width: 90%;}.body a:hover{background-color: var(--main-color);border-radius: 5px;}.body h1{font-size: 60px;}.body div{font-size: 40px;margin-right: 0px;margin-left: 20px;margin-top: 20px;margin-bottom: 20px;float: none;width: 400px;height: 350px;border-radius: 5px;display: inline-flex;}.body > div img{height: 250px;}.body > div > a > p{margin-top: 0px;}.body > div > a > p:hover{animation-name: FntGrow3;animation-duration: 750ms;animation-fill-mode: forwards;}.body > div > a > p#twoLiner{margin-top: 0px;}.body > div p#twoLiner:hover{animation-name: FntGrow3;animation-duration: 750ms;animation-fill-mode: forwards;}.body > div:nth-of-type(odd){border-radius: 5px;clear: none;width: 400px;float: none;margin-right: 0px;height: 350px;}.body > div:nth-of-type(even){border-radius: 5px;width: 400px;float: none;margin-right: 0px;height: 350px;}.body a:hover p{animation-name: FntGrow3;animation-duration: 750ms;animation-fill-mode: forwards;}';
        }
    }
    
    return (
        <footer>
            <p>This Site was and is still maintained by Connor Knight</p>
            <button onClick={layout1}>Layout one</button><button onClick={layout2}>Layout two</button>
        </footer>
    )
}

export default Footer