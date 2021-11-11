import Button from "../Button/Button"

const NavBar = (props) => {
console.log(props)
  let miVariable = 'Home'

  const miFuncion = () => {
    miVariable = 'About'
  }
    return (
      <nav className= 'NavBar'>
        <div className='LeftNav'>
          <div className='navOptionsLefts'>
            <Container user='anonimo'>
              <miButton className= 'Option' label={miVariable} loquequiera={miFuncion}/>
            </Container>
            <button className='Option'> Favoritos</button>
          </div>
        </div>
        <div className='RightNav'>
        <div className='navOptionsLefts'>
        <button className='Option'> Singup</button>
        </div>
        </div>
        <CartWidget.js/>
        </nav>
    )
  }

  export default NavBar
