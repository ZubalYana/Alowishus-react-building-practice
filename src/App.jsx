import './App.css'
import Header from './Components/Header/Header';
import mainCoffeeCup from './assets/main screen coffee cup.png'
import starSvg from './assets/star.svg'
import cafeAward from './assets/cafe award.png'
import Explore_card from './Components/Explore_card/Explore_card';
import card1Img from './assets/card img 1.png'
import card2Img from './assets/card img 2.png'
import card3Img from './assets/card img 3.png'

function App() {

  return (
    <>
    <div className="wrap">
      <div className="mainPage">
        <Header />
        <div className="mainPage_content">
          <div className="main_leftPart">
            <h1 className='main_title'>Alowishus <br /> Delicious <br />Coffee <img id='main_leftPart_coffeeAward' src={cafeAward} alt="" /></h1>
            <h4 className='main_subtitle'>A drink from the ‘My Alowishus’ bottled brews <br /> range OR grab one of our delicious coffee’s. </h4>
            <div className="main_buttons">
              <div className="downloadBtn">Download App</div>
              <div className="shopCoffeeBtn">Shop Coffee <div className="shopCoffeeBtnHr"></div></div>
            </div>
          </div>
          <div className="main_rightPart">
            <img className='main_coffeeCup' src={mainCoffeeCup} alt="" />
            <div className="main_comment">
              <div className="starsCon">
              <img src={starSvg} alt="" />
              <img src={starSvg} alt="" />
              <img src={starSvg} alt="" />
              <img src={starSvg} alt="" />
              <img src={starSvg} alt="" />
              </div>
              <p>4.9 out of 5 Overall Star Rating for All Local Business.</p>
            </div>
            <img id='main_coffeeAwardRightPart' src={cafeAward} alt="" />
          </div>
        </div>
      </div>
      <div className="explorePage">
        <div className="text">
          <div className="explore_title">Explore Our Alowishus</div>
          <div className="explore_subtitle">A drink from the ‘My Alowishus’ bottled brews range OR grab one of our delicious coffee’s.</div>
        </div>
        <div className="explore_cards">
          <Explore_card title="Our Catering" subtitle="Alowishus Catering, delicious drop off Catering" img={card1Img} btnText="Order cathering" />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
