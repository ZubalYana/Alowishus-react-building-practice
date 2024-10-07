import './App.css'
import Header from './Components/Header/Header';
function App() {

  return (
    <>
    <div className="wrap">
      <div className="mainPage">
        <Header />
        <div className="mainPage_content">
          <div className="main_leftPart">
            <h1 className='main_title'>Alowishus <br /> Delicious <br />Coffee </h1>
            <h4 className='main_subtitle'>A drink from the ‘My Alowishus’ bottled brews <br /> range OR grab one of our delicious coffee’s.</h4>
            <div className="main_buttons">
              <div className="downloadBtn">Download App</div>
              <div className="shopCoffeeBtn">Shop Coffee <div className="shopCoffeeBtnHr"></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
