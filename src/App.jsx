import './App.css'
import Header from './Components/Header/Header';
import mainCoffeeCup from './assets/main screen coffee cup.png'
import starSvg from './assets/star.svg'
import cafeAward from './assets/cafe award.png'
import Explore_card from './Components/Explore_card/Explore_card';
import card1Img from './assets/card img 1.png'
import card2Img from './assets/card img 2.png'
import card3Img from './assets/card img 3.png'
import exploreCoffee from './assets/exploring screen coffee cup.png'
import orderCoffee from './assets/order your coffee cups img.png'
import BestCoffee_card from './Components/BestCoffee_card/BestCoffee_card';
import doubleExpresso from './assets/double expresso.png'
import caramelFrappe from './assets/caramel frappe.png'
import icedCoffee from './assets/iced coffee.png'
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
        <img className='explore_coffeeImg' src={exploreCoffee} alt="" />
        <div className="explore_text">
          <div className="explore_title">Explore Our Alowishus</div>
          <div className="explore_subtitle">A drink from the ‘My Alowishus’ bottled brews range OR grab one of our delicious coffee’s.</div>
        </div>
        <div className="explore_cards">
          <Explore_card title="Our Catering" subtitle="Alowishus Catering, delicious drop off Catering" img={card1Img} btnText="Order cathering" />
          <Explore_card title="The Food" subtitle="Our entire menu is available as dine in or takeaway." img={card2Img} btnText="food menu" />
          <Explore_card title="The Gelato" subtitle="Life is like GELATO, enjoy it before it melts." img={card3Img} btnText="Discover more" />
        </div>
      </div>
      <div className="orderScreen">
        <div className="leftPart">
          <img className='order_coffeeCups' src={orderCoffee} alt="" />
        </div>
        <div className="rightPart">
          <div className="ordering_title">Order Your Favourite Coffee</div>
          <div className="ordering_text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
          <div className="orderingBtn">Order Now</div>
        </div>
      </div>
      <div className="bestSellingScreen">
        <div className="bestSelling_title">Best Selling Coffee</div>
        <div className="bestSelling_subtitle">A drink from the ‘My Alowishus’ bottled brews range OR grab one of our delicious coffee’s.</div>
        <div className="bestSellings_cardsContainer">
          <BestCoffee_card img={doubleExpresso} numberSelling="#1 Selling" coffeeName="Double Espresso" />
          <BestCoffee_card img={caramelFrappe} numberSelling="#2 Selling" coffeeName="Caramel Frappe" />
          <BestCoffee_card img={icedCoffee} numberSelling="#3 Selling" coffeeName="Iced Coffee" />
        </div>
      </div>
      <div className="instantCoffee">
        <div className="instantCoffee_leftPart">
          <div className="instantCoffee_leftPart_title">Instant Coffee <br /> At Your Home</div>
          <div className="instantCoffee_leftPart_subtitle">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. </div>
          <div className="instantCoffee_leftPartBtn">Download our app</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
