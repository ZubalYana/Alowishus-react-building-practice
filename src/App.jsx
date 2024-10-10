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
import instantCoffee from './assets/instant coffee cards.png'
import instantCoffee_decoration from './assets/instant coffee decoration cup.png'
import CustomersReviewCard from './Components/CustomersReviewCard/CustomersReviewCard';
import customer1Img from './assets/customer1Img.png'
import customer2Img from './assets/customer2Img.png'
import reviewStarSvg from './assets/reviewStar.svg'
import customersDecoration from './assets/customers decoration.png'
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
        <img className='instantCoffee_decoration' src={instantCoffee_decoration} alt="" />
        <div className="instantCoffee_leftPart">
          <div className="instantCoffee_leftPart_title">Instant Coffee <br /> At Your Home</div>
          <div className="instantCoffee_leftPart_subtitle">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. </div>
          <div className="instantCoffee_leftPartBtn">Download our app</div>
        </div>
        <div className="instantCoffee_rightPart">
          <img className='instantCoffee_rightPart_img' src={instantCoffee} alt="" />
        </div>
      </div>
      <div className="customersViews">
        <img className='customersDecoration' src={customersDecoration} alt="" />
        <div className="viewsContainer">
        <CustomersReviewCard id="customer1" img={customer1Img} name={"Brooklyn Simmons"}></CustomersReviewCard>
        <CustomersReviewCard id="customer2" img={customer2Img} name={"Imam White"}></CustomersReviewCard>
        </div>
        <div className="textContainer">
          <div className="customers_title">What Our <br /> Customers Say</div>
          <div className="ratingCon">
            <div className="rating">4.9</div>
            <div className="startAndStatistic">
              <div className="stars">
                <img src={reviewStarSvg} alt="star" />
                <img src={reviewStarSvg} alt="star" />
                <img src={reviewStarSvg} alt="star" />
                <img src={reviewStarSvg} alt="star" />
                <img src={reviewStarSvg} alt="star" />
              </div>
              <div className="statictis">based on 2452+ reviews</div>
            </div>
          </div>
          <div className="arrowsCon">
            <div className="arrow">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.75 15H6.25" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 6.25L6.25 15L15 23.75" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
            <div className="arrow">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.25 15H23.75" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 6.25L23.75 15L15 23.75" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
          </div>
        </div>
      </div>
      <div className="futer">
        <div className="footer_left">
          <div className="footerText">
            <img className='futer_logo' src={logo} alt="" />
            <span>We made it our mission to create community everyday and grow meaningful, lasting relationships with our staff, our suppliers and of course you, our customers.</span>
          </div>
          <div className="locations">
            <div className="storeLocations">Store Locations</div>
            <div className="locationsText">Find your nearest Alowishus store with opening hours, location and contact details.</div>
            <div className="locationBtn">Find my Alowishus 
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.25 15H23.75" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 6.25L23.75 15L15 23.75" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
          </div>
        </div>
        <div className="footer_right">
          <div className="contacts">
            <div className="contacts_title">Contacts</div>
            <div className="contact">
              <div className="mediaIcon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1429 15.1621L15.7978 17.5151C14.8469 18.4694 13.1736 18.49 12.2021 17.5151L9.85695 15.1621L1.4342 23.6122C1.74773 23.7572 2.09341 23.8437 2.46091 23.8437H25.539C25.9065 23.8437 26.2521 23.7573 26.5655 23.6123L18.1429 15.1621Z" fill="#64646A"/>
<path d="M25.539 4.15625H2.46092C2.09342 4.15625 1.74774 4.24277 1.43433 4.38774L10.4346 13.4179C10.4352 13.4185 10.4359 13.4186 10.4365 13.4192C10.4371 13.4198 10.4373 13.4206 10.4373 13.4206L13.3637 16.3568C13.6746 16.6677 14.3255 16.6677 14.6363 16.3568L17.5622 13.4211C17.5622 13.4211 17.5629 13.4198 17.5635 13.4192C17.5635 13.4192 17.5648 13.4185 17.5654 13.4179L26.5655 4.38769C26.2521 4.24266 25.9065 4.15625 25.539 4.15625Z" fill="#64646A"/>
<path d="M0.261734 5.53491C0.0995312 5.86293 0 6.22704 0 6.61707V21.3827C0 21.7727 0.0994219 22.1368 0.26168 22.4648L8.69903 14.0002L0.261734 5.53491Z" fill="#64646A"/>
<path d="M27.7383 5.53491L19.301 14.0003L27.7383 22.4651C27.9005 22.1371 28 21.7729 28 21.3828V6.61718C28 6.22704 27.9005 5.86293 27.7383 5.53491Z" fill="#64646A"/>
</svg>
              </div>
              alowishus@gmai.com
            </div>
            <div className="contact">
              <div className="mediaIcon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.7083 17.9747C21.8687 17.7941 21.2044 18.1839 20.6163 18.5244C20.0139 18.8752 18.8687 19.8043 18.2122 19.5666C14.8511 18.1827 11.6899 15.2408 10.3215 11.8662C10.0803 11.1957 11.0051 10.0431 11.3533 9.43371C11.6912 8.84377 12.073 8.17327 11.8989 7.32736C11.7415 6.5672 9.70627 3.97747 8.9866 3.2693C8.51196 2.80151 8.02572 2.54422 7.5266 2.50263C5.65 2.42207 3.55415 4.92605 3.18657 5.52507C2.26569 6.8024 2.27085 8.50203 3.20205 10.5629C5.44622 16.0984 13.9341 24.4523 19.4903 26.7808C20.5157 27.2603 21.4533 27.5007 22.2956 27.5007C23.1197 27.5007 23.8536 27.2707 24.4843 26.8147C24.9602 26.5404 27.5668 24.3406 27.4984 22.4136C27.4572 21.9223 27.2006 21.4312 26.7388 20.9556C26.0358 20.2292 23.4628 18.1333 22.7083 17.9747Z" fill="#64646A"/>
</svg>

              </div>
              +110 214 214 2451
            </div>
            <div className="otherMedia">
              <div className="mediaIcon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.7463 26.2462V16.0012H20.2025L20.7163 11.9899H16.7463V9.43494C16.7463 8.27744 17.0688 7.48494 18.73 7.48494H20.835V3.90869C19.8113 3.79869 18.7813 3.74619 17.7513 3.74994C14.6963 3.74994 12.5988 5.61494 12.5988 9.03869V11.9824H9.16504V15.9937H12.6063V26.2462H16.7463Z" fill="#64646A"/>
</svg>
              </div>
              <div className="mediaIcon">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.1837 10.3813C26.17 9.43507 25.995 8.49632 25.66 7.61132C25.0737 6.10007 23.88 4.90507 22.3687 4.32007C21.495 3.99132 20.5712 3.81507 19.6362 3.79507C18.4337 3.74132 18.0525 3.72632 15 3.72632C11.9475 3.72632 11.5562 3.72632 10.3625 3.79507C9.42872 3.81507 8.50497 3.99132 7.63122 4.32007C6.11997 4.90507 4.92497 6.10007 4.33997 7.61132C4.01122 8.48507 3.83372 9.40882 3.81622 10.3426C3.76247 11.5463 3.74622 11.9276 3.74622 14.9801C3.74622 18.0326 3.74622 18.4226 3.81622 19.6176C3.83497 20.5526 4.01122 21.4751 4.33997 22.3513C4.92622 23.8613 6.11997 25.0563 7.63247 25.6413C8.50247 25.9813 9.42622 26.1738 10.3637 26.2038C11.5675 26.2576 11.9487 26.2738 15.0012 26.2738C18.0537 26.2738 18.445 26.2738 19.6387 26.2038C20.5725 26.1851 21.4962 26.0088 22.3712 25.6801C23.8825 25.0938 25.0762 23.8988 25.6625 22.3888C25.9912 21.5138 26.1675 20.5913 26.1862 19.6551C26.24 18.4526 26.2562 18.0713 26.2562 15.0176C26.2537 11.9651 26.2537 11.5776 26.1837 10.3813ZM14.9925 20.7526C11.8 20.7526 9.21372 18.1663 9.21372 14.9738C9.21372 11.7813 11.8 9.19507 14.9925 9.19507C18.1825 9.19507 20.7712 11.7813 20.7712 14.9738C20.7712 18.1663 18.1825 20.7526 14.9925 20.7526ZM21.0012 10.3288C20.255 10.3288 19.6537 9.72632 19.6537 8.98132C19.6537 8.23632 20.255 7.63382 21.0012 7.63382C21.745 7.63382 22.3475 8.23632 22.3475 8.98132C22.3475 9.72632 21.745 10.3288 21.0012 10.3288Z" fill="#64646A"/>
<path d="M14.9925 18.7275C17.0657 18.7275 18.7463 17.0469 18.7463 14.9737C18.7463 12.9006 17.0657 11.22 14.9925 11.22C12.9194 11.22 11.2388 12.9006 11.2388 14.9737C11.2388 17.0469 12.9194 18.7275 14.9925 18.7275Z" fill="#64646A"/>
</svg>

              </div>
              <div className="mediaIcon">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.5412 9.99618C24.5575 10.2149 24.5575 10.4324 24.5575 10.6499C24.5575 17.3062 19.4912 24.9762 10.2325 24.9762C7.38 24.9762 4.73 24.1499 2.5 22.7149C2.905 22.7612 3.295 22.7774 3.71625 22.7774C6.07 22.7774 8.23625 21.9824 9.9675 20.6262C7.75375 20.5799 5.89875 19.1299 5.25875 17.1349C5.57 17.1812 5.8825 17.2124 6.21 17.2124C6.66125 17.2124 7.115 17.1499 7.53625 17.0412C5.2275 16.5737 3.49875 14.5474 3.49875 12.0999V12.0374C4.17 12.4112 4.94875 12.6449 5.77375 12.6762C4.4175 11.7737 3.52875 10.2299 3.52875 8.48368C3.52875 7.54868 3.7775 6.69118 4.21375 5.94368C6.6925 8.99743 10.4187 10.9937 14.5963 11.2124C14.5188 10.8374 14.4712 10.4487 14.4712 10.0587C14.4712 7.28368 16.7162 5.02368 19.5062 5.02368C20.9562 5.02368 22.265 5.63118 23.185 6.61368C24.3225 6.39493 25.4125 5.97368 26.38 5.39743C26.0063 6.56618 25.21 7.54868 24.1663 8.17243C25.18 8.06243 26.1625 7.78243 27.065 7.39243C26.38 8.38993 25.5237 9.27868 24.5412 9.99618Z" fill="#64646A"/>
</svg>

              </div>
              <div className="mediaIcon">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.22877 8.99637C7.73927 8.99637 8.96377 7.77187 8.96377 6.26137C8.96377 4.75087 7.73927 3.52637 6.22877 3.52637C4.71828 3.52637 3.49377 4.75087 3.49377 6.26137C3.49377 7.77187 4.71828 8.99637 6.22877 8.99637Z" fill="#64646A"/>
<path d="M11.5463 11.0688V26.2426H16.2575V18.7388C16.2575 16.7588 16.63 14.8413 19.085 14.8413C21.5063 14.8413 21.5363 17.1051 21.5363 18.8638V26.2438H26.25V17.9226C26.25 13.8351 25.37 10.6938 20.5925 10.6938C18.2988 10.6938 16.7613 11.9526 16.1325 13.1438H16.0688V11.0688H11.5463ZM3.86877 11.0688H8.58752V26.2426H3.86877V11.0688Z" fill="#64646A"/>
</svg>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
