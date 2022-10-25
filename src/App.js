import './App.css';
import CanvasScroll from './components/canvas-scroll-clip'

function App() {
  return (
    <div className="App">
      <CanvasScroll
        firstFrame="https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/spatial-audio/large/0001.jpg"
        frameCount="201"
        frameScrollArea="2000"
      />
    </div>
  );
}

export default App;
