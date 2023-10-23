//props is an immutable object
import Greet from './Components/Greet';
import Message from './Components/Message'
import './App.css';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComp from './Components/ParentComp';
import ConditionalRender from './Components/ConditionalRender';
import ListRendering from './Components/ListRendering';
import Sylesheet from './Components/Sylesheet';
import Inline from './Components/Inline';
import './Components/appStyle.css'
import styles from './Components/appStyle.module.css';

function App() {
  return (
    <div className='App'>
      {/* <Greet name="Sam" relation="Own">
        <p>Child prop</p>
      </Greet>
      <Greet name="Manasi" relation="Batchelor Crush"/>
      <Greet name="Praju" relation="Junior Crush">
        <p>Child Prop after Parju</p>
      </Greet> */}
      {/* <Greet name="Manasi" relation="Batchelor Crush"/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComp/>
      <ConditionalRender/> */}
      {/* <ListRendering/> */}
      {/* <Sylesheet primary={true}/> */}
      

      <div>
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
      </div>
      <Inline/>
    </div>
  );
}

export default App;
