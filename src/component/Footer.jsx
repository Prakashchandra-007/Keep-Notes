import React from 'react';

let d = new Date();
let year = d.getFullYear();

function Footer(){
    return <footer ><p>Copyright ⓒ {year}</p></footer>
}
export default Footer;