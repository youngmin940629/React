import './App.css';
import ControlledComponent from './components/2-10.form/ControlledComponent';
import Event from './components/2-7.Event/Event'
import Condition from './components/2-8.ConditionalRendering/Condition'
import Composition from './components/2-4.props/Composition';
import Extraction from './components/2-4.props/Extraction/Extraction';
import ClassComponent from './components/2-5.state/ClassComponent';
import ClassComponent2 from './components/2-6.LifeCycle/ClassComponent';
import FunctionalComponent from './components/2-5.state/FunctionalComponent';
import GoogleLogin from './components/googlelogin'
import List from './components/2-9.list/List'
import UncontrolledComponent from './components/2-10.form/UncontrolledComponent';

function App() {
  return (
    <div className="App">
      <UncontrolledComponent />
      <ControlledComponent />
      {/* <List /> */}
      {/* <Condition /> */}
      {/* <GoogleLogin /> */}
      {/* <Event /> */}
      {/* <ClassComponent2 /> */}
      {/* <FunctionalComponent /> */}
      {/* <ClassComponent /> */}
      {/* <Composition /> */}
      {/* <Extraction /> */}
    </div>
  );
}

export default App;
