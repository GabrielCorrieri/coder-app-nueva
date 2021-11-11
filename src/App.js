import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Button from './components/Button';
import Container from './components/Container';
const App = () => {

  const HandleClick = () =>{
    console.log ('oks')
  }
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <img src={logo} className="App-logo" alt="logo"/>
        <Button loquequiera={()=> console.log('button uno')} label= 'Boton 1'/>
        <Button loquequiera={HandleClick} label='Boton 2'/>
      </header>
      <ItemListContainer/>
      <h2>Ofertas únicas</h2>
    </div>
  )
}

const Titulo = (props) => {
  console.log (props.name);
  return <h1 style= {{color: 'red'}}>Hola{FirstName} </h1>
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo FirstName="Gabi"/>
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
    </div>
  );
}

export default App;
function App() {


  const array= [
    {name: 'seba', age: '29'},
    {name: 'julia', age: '24'},
    {name: 'victor', age: '32'},
    {name: 'anto', age: '26'},
    {name: 'leo', age: '29'},
  ]

  const nuevoArray = array.filter(elemento => elemento.age == 29)
  console.log (nuevoArray)

  const numeros= [1, 2, 3]
  const numerosNuevos= numeros.map(elemento => elemento *2)
  console.log(numerosNuevos)

const empleado = {
  nombre: 'sebastian',
  profesion: 'dev'
}
// const key = profesion
// const {[key]:propiedadEliminada, ...restoPropiedades} = empleado
// console.log (propiedadEliminada)

const {profesion, ...restoPropiedades} = empleado
console.log(profesion)
console.log(restoPropiedades)


const objeto = {
  tipo: 'vehículo',
  marca: 'mercedes benz',
  modelo: 'c-200',
  anio: '2019'
}

console.log (objeto)

const nuevoObjeto = {
  ...objeto,
  anio: '2020'
}

let a, b, rest 
[a, b, ...rest] = [10, 20, 30, 40, 50]
console.log (a)
console.log (b)

console.log (nuevoObjeto)

const números = [1, 2, 3, 4]
console.log (números)

const nuevoNumeros = [...números, 5, 6]
console.log (nuevoNumeros)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
