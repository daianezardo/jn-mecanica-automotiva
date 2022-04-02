import { Header } from './header'
import { Footer } from './footer'

export function Layout ( { children } ) {
    return (
      <>
      <Header/>
      <main>
      {children}
      </main>
      <Footer/>
      </>
    )
  }