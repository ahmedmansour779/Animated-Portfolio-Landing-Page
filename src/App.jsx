import gsap, { Power3 } from 'gsap';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Images from './components/Images';

function App() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut;

  return (
    <div className='hero'>
      <Header timeline={tl} ease={ease} />
      <div className="container">
        <Content timeline={tl} />
        <Images timeline={tl} ease={ease} />
      </div>
    </div>
  )
}

export default App
