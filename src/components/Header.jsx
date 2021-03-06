import React from "react";
import { Link } from "react-router-dom";

export default function header(){
    return(
        <header className="caixaHeader">
		    <div class="caixaLogo">
				<figure class="logo">
					<img src="../img/Logo.png" alt="Logo Três Carneiros Viagens"  title="Três Carneiros Viagens" />
				</figure>
			</div>
			<div class="menu">
				<nav class="linkMenu">
                    <Link to="/">HOME</Link><br />
                    <Link to="/destinos">DESTINOS</Link><br />
                    <Link to="/promocoes">PROMOÇÕES</Link><br />
                    <Link to="/contato">CONTATO</Link>
			    </nav>
			</div>
		</header>
    );
}