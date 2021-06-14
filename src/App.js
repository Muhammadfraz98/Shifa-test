import { useEffect } from 'react';
import Routes from './Routes'

function App() {

  useEffect(() => {
    console.log("location",window.location.pathname);
    let user = JSON.parse(localStorage.getItem('users'));
    let activePath=  window.location.pathname;
      if(!user){
        if(activePath === "/" || activePath === '/signup') return;
          if(activePath !== "/" ){
            window.location.href= "/"
          }
      }
      else{
        if(['/','/signup'].includes(activePath)){
          window.location.href='/home';
        }
      }
  }, [])

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
