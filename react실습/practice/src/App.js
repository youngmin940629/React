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
import State from './components/3-3.Hooks/State'
import Reducer from './components/3-3.Hooks/Reducer'
import WelcomeDialog from './components/3-5.composition/WelcomeDialog';
import ThankyouDialog from './components/3-6.composition2/ThankyouDialog';
import Input from './components/3-7.HOC/Input'
import Button from './components/3-7.HOC/Button'
import Memo from './components/3-8.Memorization/Memo'
import Example from './components/3-11.Portal/Example'
import Component from './components/3-14.PropTypes/Component'

function App() {
  return (
    <div className="App">
      {/* <Component /> */}
      {/* <Example /> */}
      <Memo />
      {/* <Input />
      <br />
      <br />
      <Button /> */}
      {/* <ThankyouDialog /> */}
      {/* <WelcomeDialog /> */}
      {/* <State />
      <Reducer /> */}
      {/* <UncontrolledComponent />
      <ControlledComponent /> */}
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
