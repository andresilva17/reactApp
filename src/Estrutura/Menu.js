import React, { Component } from 'react';

class MenuBar extends Component{

render(){

    return(
        <div className="top_bar"> 
        <img id="imgl" src="./img/logo-removebg-preview.png" alt="Img indisponível"></img> 
                <div className="menu">  
        <a href="/" ><button><img id="menuimg" src="./img/house.svg" alt="Img indisponível"></img></button></a>
        <a href="/"><button><img id="menuimg" src="./img/ferramentas.svg" alt="Img indisponível"></img></button></a>
        <a href="/Cadastro"><button><img id="menuimg" src="./img/avatar.svg" alt="Img indisponível"></img></button></a>
        </div>
        </div>

    );
    }
}
export default MenuBar;