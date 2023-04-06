import { Detail, Form, Home, Landing } from "./views"
import { Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar.jsx/NavBar";

function App() {
const location = useLocation();

  return (
    <div className="App">
  {/* esto es un hook */}
      {location.pathname !== "/" && <NavBar/>}
      <Route exact path="/" component={Landing} /> 
      <Route path="/home"
        render={() => <Home />} />
      <Route  path="/detail" component={Detail} /> 
      <Route  path="/create" component={Form} /> 
    </div>
  );
}

export default App;

// react v6    {/* <Routes>
      //   <Route exact path="/" element={<Landing />} />
      //   <Route exact path="/detail" element={<Detail />} />
      //   <Route exact path="/create" element={<Form />} />


      //   <Route path='/home' element={<Home />} />
      // </Routes> */}
// // formas de hacer en la version 5 de react 


// // de este modo puedo pasarle props por medio de la funcion, de esta forma no sin las  llaves no es necesario el return, pero si pongo las llaves si o si va retornar el componente