import styles from '../styles/Home.module.css'
import Logo from "../components/Logo";



const User = () => {
    <Logo />
    return (
        <div className={styles.card}>
        <h1>Tela de Usuários</h1>
        Lista de users!
        <ul>
            <li>Usuário 1</li>
            <li>Usuário 2</li>
            <li>Usuário 3</li>
            <li>Usuário 4</li>
            <li>Usuário 5</li>
        </ul>
        </div>
    )
    
}

export default User;