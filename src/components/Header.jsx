import '../App.css'
import Logo512 from '../assets/logo512.png'

export default function Header() {
  return (
    <header className='app-header'>
      <img src={Logo512} alt="React logo" />
      <h1>The React Quiz</h1>
    </header>
  )
}
