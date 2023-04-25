import './App.css';
import testPdf from './assets/socl-study-guide.pdf';

const App = () => {
  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <object data={testPdf} type="application/pdf" height='100%' width='100%' />
    </div>
  )
}

export default App;
