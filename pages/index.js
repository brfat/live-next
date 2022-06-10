import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Logo from '../components/Logo'
import Posts from '../components/Posts'

export default function Home() {
  return (
    <div>
     <Logo />

     <div className={styles.main}>
       <h3>Blog C6!</h3>
       <Posts/>
     </div>

     <footer className={styles.footer}>
      <Link href="/user">Lista de Usuários!!</Link>
       <Link href="/coins">Lista de Criptomoedas!!</Link>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>

    
  )
}
