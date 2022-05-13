import './App.css';
import {Navigation} from './Components/Navigat';
import {Header} from './Components/Header';
import {Educators} from './Components/Educators';
import {Classes} from './Components/Сlasses';
import {Assistent} from './Components/Assistent'
import {Footer} from './Components/Footer'

function App() 
{

  let obj1 = new Object;
  let obj2 = new Object;
  let obj5 = new Object;
  let obj6 = new Object;
  let obj7 = new Object;
  let obj8 = new Object;
  obj1.id=0;
  obj2.id=1;
  obj5.id=3;
  obj6.id=4;
  obj7.id=5;
  obj8.id=6;


  return (
    <div>
    <Navigation/>
    <Header />
    <Classes Classes={[obj1,obj2,obj5,obj6]}/>
    <Educators Educators={[obj1,obj2,obj5,obj6]} />
    <Assistent/>
    <Footer />
    </div>
    );

}

export default App;
