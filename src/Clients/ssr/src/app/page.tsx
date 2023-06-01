import LoginForm from './components/login-form'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <LoginForm />
    </main>
  )
}