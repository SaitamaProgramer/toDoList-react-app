import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
          <h1 className='logo'>Lista de Tareas</h1>
        
      </div>
      <div className='tareas-lista-principal'>
          <h2>Mis tareas</h2>
      < ListaDeTareas />

      </div>
    </div>
  );
}

export default App;
