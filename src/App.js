import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import Menu from './component/menu';
import Content from './component/content';

function App() {
  return (
    <div>
    <Header/>  
      <span>
        <Menu/>
          <Content/>
      </span>
    <Footer/>
    </div>
  );
}

export default App;
