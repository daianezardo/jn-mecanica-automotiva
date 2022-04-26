import styles from'./footer.module.css'

export function Footer () {
    return (
      <footer className={`${styles.footer} text-center text-black py-2 mt-4`}>
      <p className='m-0'>Todos os direitos reservados à JN Mecânica Automotiva.</p>
      </footer>
    )
  }
  