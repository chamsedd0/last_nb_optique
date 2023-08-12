import { useState, useEffect } from 'react';
import { Link} from "react-scroll";
import './App.css';
import { styled } from 'styled-components';
import Product from './Product';


import products from './products.json';

function App() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [inCart, setInCart] = useState([]);
  const [isClickable, setIsClickable] = useState(false);
  const [ref, setref] = useState('')
  

  const [total, setTotal] = useState(0);
  const [updated, setUpdated] = useState(false);
  


  const checkScroll = () => {
    const position = window.pageYOffset;
    const pageHeight = window.innerHeight;

    if (position > pageHeight / 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  useEffect(() => {

    let sum = 0;

    inCart.forEach((item) => {
      sum += (item.price*item.count);
    });

    setTotal(sum)

  }, [updated, inCart]);

  

  const addElement = (newElement) => {
    setInCart([...inCart, newElement]);
  };


  const removeElement = (e, elementToRemove) => {

    const product = e.target.parentNode;
    product.classList.add("disapear")


    setTimeout(()=>{  
      const updatedArray = inCart.filter((item) => item !== elementToRemove);
      setInCart(updatedArray);
      product.classList.remove("disapear")
      setUpdated(!updated);
    }, 500)
    

    
  };

  return (
    

    <div className="App">
      
      <div className="menu" >

        <Link activeClass="active"
            to="landing"
            className='link'
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
            
            >

            <svg xmlns="http://www.w3.org/2000/svg" height="2em"  viewBox="0 0 576 512" ><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
      
        </Link>

        <Link activeClass="active"
          className='link'
          to="products"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {500}
          href="">

            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512"><path d="M118.6 80c-11.5 0-21.4 7.9-24 19.1L57 260.3c20.5-6.2 48.3-12.3 78.7-12.3c32.3 0 61.8 6.9 82.8 13.5c10.6 3.3 19.3 6.7 25.4 9.2c3.1 1.3 5.5 2.4 7.3 3.2c.9 .4 1.6 .7 2.1 1l.6 .3 .2 .1 .1 0 0 0 0 0s0 0-6.3 12.7h0l6.3-12.7c5.8 2.9 10.4 7.3 13.5 12.7h40.6c3.1-5.3 7.7-9.8 13.5-12.7l6.3 12.7h0c-6.3-12.7-6.3-12.7-6.3-12.7l0 0 0 0 .1 0 .2-.1 .6-.3c.5-.2 1.2-.6 2.1-1c1.8-.8 4.2-1.9 7.3-3.2c6.1-2.6 14.8-5.9 25.4-9.2c21-6.6 50.4-13.5 82.8-13.5c30.4 0 58.2 6.1 78.7 12.3L481.4 99.1c-2.6-11.2-12.6-19.1-24-19.1c-3.1 0-6.2 .6-9.2 1.8L416.9 94.3c-12.3 4.9-26.3-1.1-31.2-13.4s1.1-26.3 13.4-31.2l31.3-12.5c8.6-3.4 17.7-5.2 27-5.2c33.8 0 63.1 23.3 70.8 56.2l43.9 188c1.7 7.3 2.9 14.7 3.5 22.1c.3 1.9 .5 3.8 .5 5.7v6.7V352v16c0 61.9-50.1 112-112 112H419.7c-59.4 0-108.5-46.4-111.8-105.8L306.6 352H269.4l-1.2 22.2C264.9 433.6 215.8 480 156.3 480H112C50.1 480 0 429.9 0 368V352 310.7 304c0-1.9 .2-3.8 .5-5.7c.6-7.4 1.8-14.8 3.5-22.1l43.9-188C55.5 55.3 84.8 32 118.6 32c9.2 0 18.4 1.8 27 5.2l31.3 12.5c12.3 4.9 18.3 18.9 13.4 31.2s-18.9 18.3-31.2 13.4L127.8 81.8c-2.9-1.2-6-1.8-9.2-1.8zM64 325.4V368c0 26.5 21.5 48 48 48h44.3c25.5 0 46.5-19.9 47.9-45.3l2.5-45.6c-2.3-.8-4.9-1.7-7.5-2.5c-17.2-5.4-39.9-10.5-63.6-10.5c-23.7 0-46.2 5.1-63.2 10.5c-3.1 1-5.9 1.9-8.5 2.9zM512 368V325.4c-2.6-.9-5.5-1.9-8.5-2.9c-17-5.4-39.5-10.5-63.2-10.5c-23.7 0-46.4 5.1-63.6 10.5c-2.7 .8-5.2 1.7-7.5 2.5l2.5 45.6c1.4 25.4 22.5 45.3 47.9 45.3H464c26.5 0 48-21.5 48-48z"/></svg>

          </Link>

          <Link activeClass="active"
          className='link'
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500} href="">

              <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
              
            </Link>

      </div>

      <div className="navigation" style={{backgroundColor: isScrolled ? '#1d2227' : 'transparent', height: '7rem', boxShadow: isScrolled ? '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' : ''}}>
        
        <Link activeClass="active"
        
            to="landing"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500} className="logo"></Link>

          <label class="hamburger">
            <input type="checkbox"/>
            <svg onClick={()=>setIsClicked(!isClicked)} viewBox="0 0 32 32">
              <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
              <path class="line" d="M7 16 27 16"></path>
            </svg>
          </label>

          <Popup isClicked={!isClicked}>
          <Link activeClass="active"
            to="landing"
            className='link'
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
            
            >

            <svg xmlns="http://www.w3.org/2000/svg" height="2em"  viewBox="0 0 576 512" ><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
      
        </Link>

        <Link activeClass="active"
          className='link'
          to="products"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {500}
          href="">

            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512"><path d="M118.6 80c-11.5 0-21.4 7.9-24 19.1L57 260.3c20.5-6.2 48.3-12.3 78.7-12.3c32.3 0 61.8 6.9 82.8 13.5c10.6 3.3 19.3 6.7 25.4 9.2c3.1 1.3 5.5 2.4 7.3 3.2c.9 .4 1.6 .7 2.1 1l.6 .3 .2 .1 .1 0 0 0 0 0s0 0-6.3 12.7h0l6.3-12.7c5.8 2.9 10.4 7.3 13.5 12.7h40.6c3.1-5.3 7.7-9.8 13.5-12.7l6.3 12.7h0c-6.3-12.7-6.3-12.7-6.3-12.7l0 0 0 0 .1 0 .2-.1 .6-.3c.5-.2 1.2-.6 2.1-1c1.8-.8 4.2-1.9 7.3-3.2c6.1-2.6 14.8-5.9 25.4-9.2c21-6.6 50.4-13.5 82.8-13.5c30.4 0 58.2 6.1 78.7 12.3L481.4 99.1c-2.6-11.2-12.6-19.1-24-19.1c-3.1 0-6.2 .6-9.2 1.8L416.9 94.3c-12.3 4.9-26.3-1.1-31.2-13.4s1.1-26.3 13.4-31.2l31.3-12.5c8.6-3.4 17.7-5.2 27-5.2c33.8 0 63.1 23.3 70.8 56.2l43.9 188c1.7 7.3 2.9 14.7 3.5 22.1c.3 1.9 .5 3.8 .5 5.7v6.7V352v16c0 61.9-50.1 112-112 112H419.7c-59.4 0-108.5-46.4-111.8-105.8L306.6 352H269.4l-1.2 22.2C264.9 433.6 215.8 480 156.3 480H112C50.1 480 0 429.9 0 368V352 310.7 304c0-1.9 .2-3.8 .5-5.7c.6-7.4 1.8-14.8 3.5-22.1l43.9-188C55.5 55.3 84.8 32 118.6 32c9.2 0 18.4 1.8 27 5.2l31.3 12.5c12.3 4.9 18.3 18.9 13.4 31.2s-18.9 18.3-31.2 13.4L127.8 81.8c-2.9-1.2-6-1.8-9.2-1.8zM64 325.4V368c0 26.5 21.5 48 48 48h44.3c25.5 0 46.5-19.9 47.9-45.3l2.5-45.6c-2.3-.8-4.9-1.7-7.5-2.5c-17.2-5.4-39.9-10.5-63.6-10.5c-23.7 0-46.2 5.1-63.2 10.5c-3.1 1-5.9 1.9-8.5 2.9zM512 368V325.4c-2.6-.9-5.5-1.9-8.5-2.9c-17-5.4-39.5-10.5-63.2-10.5c-23.7 0-46.4 5.1-63.6 10.5c-2.7 .8-5.2 1.7-7.5 2.5l2.5 45.6c1.4 25.4 22.5 45.3 47.9 45.3H464c26.5 0 48-21.5 48-48z"/></svg>

          </Link>

          <Link activeClass="active"
          className='link'
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500} href="">

              <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
              
            </Link>
          </Popup>

        <div className="links">
          <Link activeClass="active"
            to="products"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
            style={{color: isScrolled ? '#D9D9D9' : '#1d2227'}} href="">Produits</Link>
          <Link activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500} style={{color: isScrolled ? '#D9D9D9' : '#1d2227'}} href="">À propos</Link>
          <Link activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500} style={{color: isScrolled ? '#D9D9D9' : '#1d2227'}} href="">Contact</Link>
        </div>
      </div>
      <div id='landing' className="hero">

        <Link activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
            className="arr">
          <span>Faites Défiler</span>
          
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 19" fill="none">
           <path d="M13.6218 16.7528C12.8235 17.8589 11.1765 17.8589 10.3782 16.7528L1.29766 4.17041C0.343066 2.84768 1.28822 1 2.91944 1L21.0806 1C22.7118 1 23.6569 2.84768 22.7023 4.17041L13.6218 16.7528Z" stroke="#282828" stroke-opacity="0.54" stroke-width="1.5"/>
          </svg>
        </Link>
         
      </div>
      <div id='about' className="description1">
        <div className="about">
          <h2>Pourquoi nous choisir ?</h2>
          <p>-Notre collection diversifiée comprend des marques de renom-</p>
          <p>-Classique, Rétro, Audacieux ou discret-</p>
          <p>-Nous avons quelque chose pour vous-</p>
          <span>Une clarté incontestable est notre promesse</span>
        </div>
        <div className="image"></div>
      </div>

      <div className="delivery">
        <svg xmlns="http://www.w3.org/2000/svg" height="6em" viewBox="0 0 640 512"><path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
        <h2>Localisé à Kenitra, Livraison partout au maroc</h2>
      </div>

      <div id='products' className="products">
        <h2>Notre collection de lunettes</h2>
        <div className="container">
          {
            products.products.map((item)=>{
              return(
                <Product addElement={addElement} name={item.name} picture={item.images[0]} price={item.price} status={item.status}/>
              )
            })
          }
          
        </div>
      </div>

      <div id='contact' className="contact">
        <div className="info">
          <h2>Contacts:</h2>
          <p>Email:  <b>Jihanedouiri14@gmail.com</b></p>
          <p>Phone:  <b>+212 693984772</b></p>
          <a href="https://www.instagram.com/nb_optique_">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="49" viewBox="0 0 45 49" fill="none">
            <g clip-path="url(#clip0_15_135)">
              <path d="M22.5098 13.494C16.1214 13.494 10.9685 18.4036 10.9685 24.4903C10.9685 30.5771 16.1214 35.4866 22.5098 35.4866C28.8982 35.4866 34.0511 30.5771 34.0511 24.4903C34.0511 18.4036 28.8982 13.494 22.5098 13.494ZM22.5098 31.6394C18.3815 31.6394 15.0065 28.4333 15.0065 24.4903C15.0065 20.5474 18.3714 17.3413 22.5098 17.3413C26.6482 17.3413 30.0132 20.5474 30.0132 24.4903C30.0132 28.4333 26.6382 31.6394 22.5098 31.6394ZM37.2152 13.0442C37.2152 14.4702 36.0098 15.6091 34.5232 15.6091C33.0266 15.6091 31.8313 14.4606 31.8313 13.0442C31.8313 11.6278 33.0366 10.4794 34.5232 10.4794C36.0098 10.4794 37.2152 11.6278 37.2152 13.0442ZM44.8592 15.6474C44.6884 12.2116 43.8647 9.16826 41.223 6.66084C38.5913 4.15342 35.3971 3.36865 31.7911 3.19639C28.0746 2.99541 16.9351 2.99541 13.2185 3.19639C9.62255 3.35908 6.42835 4.14385 3.78661 6.65127C1.14487 9.15869 0.331255 12.2021 0.150452 15.6378C-0.0604858 19.1788 -0.0604858 29.7923 0.150452 33.3333C0.321211 36.769 1.14487 39.8124 3.78661 42.3198C6.42835 44.8272 9.61251 45.612 13.2185 45.7843C16.9351 45.9853 28.0746 45.9853 31.7911 45.7843C35.3971 45.6216 38.5913 44.8368 41.223 42.3198C43.8547 39.8124 44.6784 36.769 44.8592 33.3333C45.0701 29.7923 45.0701 19.1884 44.8592 15.6474ZM40.0578 37.1327C39.2743 39.0085 37.7576 40.4536 35.7788 41.2097C32.8156 42.3294 25.7844 42.071 22.5098 42.071C19.2353 42.071 12.194 42.3198 9.24085 41.2097C7.2721 40.4632 5.75536 39.0181 4.96184 37.1327C3.78661 34.3095 4.05782 27.6103 4.05782 24.4903C4.05782 21.3704 3.79666 14.6616 4.96184 11.8479C5.74532 9.97217 7.26206 8.52705 9.24085 7.771C12.204 6.65127 19.2353 6.90967 22.5098 6.90967C25.7844 6.90967 32.8257 6.66084 35.7788 7.771C37.7476 8.51748 39.2643 9.9626 40.0578 11.8479C41.233 14.6712 40.9618 21.3704 40.9618 24.4903C40.9618 27.6103 41.233 34.319 40.0578 37.1327Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_15_135">
                <rect width="45" height="49" fill="white"/>
              </clipPath>
            </defs>
          </svg></a>
        </div>
        
      </div>

      <div onClick={()=>setIsOpen(!isOpen)} className="cart">
        <Notif isEmpty={inCart.length === 0 ? true : false} >{inCart.length}</Notif>
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="28" viewBox="0 0 34 28" fill="none">
  <g clip-path="url(#clip0_12_29)">
    <path d="M0 1.3125C0 0.585156 0.631597 0 1.41667 0H4.10243C5.40104 0 6.55208 0.7 7.08924 1.75H31.3497C32.9021 1.75 34.0354 3.11719 33.6281 4.50625L31.208 12.8352C30.7062 14.5523 29.024 15.75 27.1056 15.75H10.076L10.3948 17.3086C10.5247 17.9266 11.109 18.375 11.7878 18.375H28.8056C29.5906 18.375 30.2222 18.9602 30.2222 19.6875C30.2222 20.4148 29.5906 21 28.8056 21H11.7878C9.74549 21 7.99236 19.6547 7.61458 17.8008L4.56875 2.98047C4.52743 2.77266 4.33264 2.625 4.10243 2.625H1.41667C0.631597 2.625 0 2.03984 0 1.3125ZM7.55556 25.375C7.55556 25.0303 7.62884 24.6889 7.77123 24.3705C7.91362 24.052 8.12232 23.7626 8.38542 23.5188C8.64852 23.2751 8.96086 23.0817 9.30462 22.9498C9.64837 22.8179 10.0168 22.75 10.3889 22.75C10.761 22.75 11.1294 22.8179 11.4732 22.9498C11.8169 23.0817 12.1293 23.2751 12.3924 23.5188C12.6555 23.7626 12.8642 24.052 13.0065 24.3705C13.1489 24.6889 13.2222 25.0303 13.2222 25.375C13.2222 25.7197 13.1489 26.0611 13.0065 26.3795C12.8642 26.698 12.6555 26.9874 12.3924 27.2312C12.1293 27.4749 11.8169 27.6683 11.4732 27.8002C11.1294 27.9321 10.761 28 10.3889 28C10.0168 28 9.64837 27.9321 9.30462 27.8002C8.96086 27.6683 8.64852 27.4749 8.38542 27.2312C8.12232 26.9874 7.91362 26.698 7.77123 26.3795C7.62884 26.0611 7.55556 25.7197 7.55556 25.375ZM27.3889 22.75C28.1403 22.75 28.861 23.0266 29.3924 23.5188C29.9237 24.0111 30.2222 24.6788 30.2222 25.375C30.2222 26.0712 29.9237 26.7389 29.3924 27.2312C28.861 27.7234 28.1403 28 27.3889 28C26.6374 28 25.9168 27.7234 25.3854 27.2312C24.8541 26.7389 24.5556 26.0712 24.5556 25.375C24.5556 24.6788 24.8541 24.0111 25.3854 23.5188C25.9168 23.0266 26.6374 22.75 27.3889 22.75Z" fill="#939393"/>
  </g>
  <defs>
    <clipPath id="clip0_12_29">
      <rect width="34" height="28" fill="white"/>
    </clipPath>
  </defs>
</svg>
      </div>

      <Cart isOpen={isOpen}>
        <h1>Mon panier</h1>
        <Preview>
          {inCart.map((item)=> {
            return(
              <div className="product-preview">

                <Image src={item.image_path} alt="" ></Image>

                <div className="description2">
                  
                  <p className='price'>{item.price} <b>MAD</b></p>
                </div>

                <div className="edit">
                  <select onChange={(e)=>{
                    setUpdated(!updated)
                    item.count = e.target.value
                    }} name="count" value={item.count} id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>

                <div onClick={(e)=>{removeElement(e,item)}} className="delete">
                  supprimer
                </div>

              </div>
            )
          })}
        </Preview>
          
        <CheckOut>
          
            <input onChange={(e)=>{

              let inital = "mailto:nboptiquecommandes@gmail.com?subject=Commande&body=";
              inCart.map((item, index)=>{
                inital+=(" " +item.image_path+ "\n");
              })
              
              inital+=("\n numero: "+e.target.value+"'");
              
              console.log(inital)
            
            }} 

              className="input" type="text" placeholder='Entrer votre Numero de telephone'/>
          
          <div className="total">
            Prix Total: 
          <span><b>{total}</b> MAD</span>
          </div>
          <a className="checkout" isClickable={isClickable} href={ref}>Confirmer la commande</a>
 
        </CheckOut>
      </Cart>

      <Darken onClick={()=>setIsOpen(!isOpen)} isOpen={isOpen}></Darken>
    </div>
  );
}


const Cart = styled.div`

  padding: 1rem;
  background-color: white;
  opacity: ${props => props.isOpen ? 1 : 0};
  transform: ${props => props.isOpen ? 'translate(0)' : 'translate(2rem)'};
  pointer-events: ${props => props.isOpen ? 'all' : 'none'};
  width: 25rem;
  height: 90vh;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  border-radius: 20px;
  box-shadow: -2px 4px 2px 0px #5c5c5c51;
  z-index: 3;
  transition: all 0.4s ease-in-out;
  display: flex;
  align-items: center;
  flex-direction: column;

  form {
    width: 100%;
    height: fit-content;
  }
  .input {
    width: 95%;
    height: 2.5rem;
    border: 1px solid gray;
    border-radius: 10px;
    letter-spacing: 1.2px;
    font-size: 0.8rem;
    padding-left: 1rem;
  }
  .input::placeholder{
    opacity: 0.5;
  }
  
  h1 {
    font-size: 1.8rem;
    font-weight: 300;
    text-align: center;
    margin: 2rem;
  }

  @media screen and (max-width: 580px){
    width: 100%;
    height: 100%;
    bottom: 0;
    right: 0;
    border-radius: 0;
  }

`;

const Darken = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  opacity: ${props => props.isOpen ? 0.3 : 0};
  z-index: 2;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
  pointer-events: ${props => props.isOpen ? 'all' : 'none'};
  

`

const CheckOut = styled.div`

  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: absolute;
  bottom: 1.5rem;
  width: 90%;
  
  gap: 1.7rem;

  .total {
    width: 75%;
    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
    pointer-events: none;
  }

  .total b {
    font-size: 1.3rem;
    font-weight: 200;
  }

  .total span {
    font-size: 1rem;
    font-weight: 100;
  }

  .checkout {
    width: 75%;
    height: 3rem;
    border: none;
    background-color: #1d2227;
    align-self: flex-start;
    color: white;
    border-radius: 10px;
    font-weight: 600;
    letter-spacing: 1.5px;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .checkout:hover {
      background-color: #343b42;
    }


`

const Notif = styled.div`

    opacity: ${props => props.isEmpty ? 0 : 1};
    width: 20px;
    height: 20px;
    background-color: #e75757;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    transition: all 0.4s ease;

`
const Preview = styled.div`

    width: 90%;
    height: 50%;
    position: absolute;
    top: 17%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: scroll;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 1rem;
    
    .product-preview {
      padding: 1rem;
      text-align: center;
      background-color: white;
      width: 95%;
      height: 5rem;
      border-radius: 12px;
      box-shadow: -1px 2px 4px 0px #4b51577f;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      transition: all 0.3s ease;
    }

    .edit {
      display: flex;
      gap: 10px;
      align-items: center;
      color: #1b2229;
      
      padding: 0px 5px;
      border-radius: 20px;
    }

    .delete {
      position: absolute;
      font-size: 0.5rem;
      letter-spacing: 1.5px;
      bottom: 0.5rem;
      right: 1.5rem;
      color: #d56e6e;
      text-decoration: underline;
      cursor: pointer;
    }

    .disapear {
      opacity: 0;
    }



    .description2 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 50%;
    }

    .description2 b {
      font-size: 0.7rem;
      font-weight: 200;
    }
    

`

const Image = styled.div`

      
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background: url(${props => props.src}) no-repeat;

      background-position: center;
      background-size: cover;
      

`

const Popup = styled.div`

    display: none;

    @media screen and (max-width: 1080px){
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 4rem;
      height: ${props => props.isClicked ? '4rem' : '15rem'};
      background-color: #1d2227;
      opacity: ${props => props.isClicked ? 0 : 1};
      pointer-events: ${props => props.isClicked ? 'none' : 'all'};
      padding-top: 3rem;
      position: absolute;
      top: 1.5rem;
      right: 3rem;
      border-radius: 4rem;
      transition: all 0.4s ease-in-out;
      
      svg {

        fill: #9baab8;
      }
      
      
    }

`

export default App;
