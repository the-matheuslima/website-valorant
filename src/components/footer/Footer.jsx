import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo.png"

function Footer() {
   return (
      <footer className="footer">
         <ul className="footer__links-ex">
            <li>Baixe o Jogo</li>
            <li>Torneios Independentes</li>
            <li>Baixe o Aplicativo de celular Riot Mobile</li>
         </ul>
         <div className="footer__cols">
            <div className="footer__col1">
               <nav className="footer__nav">
                  <h3>Sobre nós</h3>
                  <ul className="footer__nav__list">
                     <li className="footer__nav__item">Sobre valorant</li>
                     <li className="footer__nav__item">noticias</li>
                     <li className="footer__nav__item">política de produto</li>
                     <li className="footer__nav__item">sumário do contrato</li>
                     <li className="footer__nav__item">contrato de compra e venda</li>
                     <li className="footer__nav__item">cadastre-se</li>
                     <li className="footer__nav__item">mapa do site</li>
                  </ul>
               </nav>
            </div>

            <div className="col2">
               <nav className="footer__nav">
                  <h3>Suporte</h3>
                  <ul className="ooter__nav__list">
                     <li className="footer__nav__item">produtos e manuais</li>
                     <li className="footer__nav__item">soluções técnicas e dicas</li>
                     <li className="footer__nav__item">loja online</li>
                     <li className="footer__nav__item">avisos</li>
                     <li className="footer__nav__item">fale conosco</li>
                  </ul>
               </nav>
            </div>

            <div className="footer__logo">
               <img src={logo} alt="" />
            </div>
         </div>
      </footer>
   );
}

export default Footer;
