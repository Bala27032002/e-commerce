import './App.css';
import Approutes from './Routes/Approutes';
import LabelCarousel from './Component/LabelCarousel';
import Header from './Component/Header';

function App() {
  return (
   <>
      <div style={{
        position: 'sticky', // or 'fixed' if you prefer
        top: 0,
        zIndex: 1000,
        backgroundColor: '#fff',
      }}>
   <LabelCarousel />

   <Header />
   </div>
   <Approutes />
   </>
  );
}

export default App;
