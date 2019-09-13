import _ from 'lodash';
import './style.css';
import Icon from './photo_square.png';
import data from './data.xml';
import printMe from './print.js';

import jquery from 'jquery';

function component() {
    //import modułu (dotąd działa bez babela - testowane w IE)
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    //file loader
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    //xml loader (tak samo działa csv/tsv loader, są już w configu)
    //IT IS JSON here!!!!!!!!!!!!!!!!!!!!
    console.log(data.note.to);


    let btn = document.createElement('button');
     btn.innerHTML = 'Click me and check the console!'; 
     btn.onclick = printMe; 
     element.appendChild(btn);

    return element;
};

document.body.appendChild(component());
 jquery('.hello').click(()=>{console.log('clicked')});