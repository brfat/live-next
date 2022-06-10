import react from 'react';
import styles from "../styles/Home.module.css"

function Menu() {
    return (
        <ul class={styles.menu}>
            <li><a href="/">Início</a></li>
            <li><a href="/categoria/novidades">Novidades</a></li>
            <li><a href="/categoria/economia">Economia</a></li>
            <li><a href="/categoria/guia-do-investidor">Guia do Investidor</a></li>
            <li><a href="/categoria/produtos">Produtos</a></li>
            <li><a href="/categoria/seu-bolso">Seu Bolso</a></li>
            <li><a href="/categoria/empresas">Empresas</a></li>
            <li><a href="/categoria/mei">MEI</a></li>
        </ul>
    );
}

export default Menu;