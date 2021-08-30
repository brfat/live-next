import styles from '../styles/Home.module.css'

const coins = () => {
    return (
        <div className={styles.card}>
            <h1>Lista de Criptomoedas</h1>
            <ul>
                <li>Bitcoin</li>
                <li>Ethereum</li>
                <li>ADA Cardano</li>
                <li>Wbix</li>
                <li>Litecoin</li>
            </ul>
        </div>
    )
}

export default coins;