


# UI-components-with-pure-html-css-js

* [1.Nav-bar-01](#1nav-bar-01)
* [2.Newsletter-input-card](#2newsletter-input-card)
* [3.Nav-bar-02](#3nav-bar-02)
* [4.Sign-in-card-page](#4sign-in-card-page)
* [5.content-card-01:animation](#5content-card-01animation)

## 0.Design file
https://www.figma.com/file/9ZXdkPBquoloWAQ47ahWwn/UI-components?node-id=0%3A1
## 1.Nav-bar-01
![preview](https://github.com/designer-kevinxie/UI-components-with-pure-html-css/blob/master/1.nav-bar-01/images/nav-bar-01-preview.gif)

### #-------------------note----------------------------#
#### 01.how to create rounded button with gradient border by pure css?
html:add span element between a element

    <a class="login" href="#"><span>login</span></a>
    
css: padding make a element bigger than white span element,border-box can control the size of element which include padding or border.

      a {
      text-decoration: none;
      font-weight: 700;
      font-size: 1.2rem;
      text-transform: uppercase;
      color: #BC9CFF;
      height: 3.5rem;
      background: linear-gradient(262.73deg, #A49CFF 11.74%, #F78BF9 92.89%);
      border-radius: 2.2rem;
      margin-left: 2rem;
      padding: 2px;/* padding as border */
      box-sizing: border-box;
      }

      span{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background: #fff;
      border-radius: 2.2rem;
      padding:1rem 2rem;
      box-sizing: border-box;
    }
    
    
#### 02.font-weight may change the size of element
     .dropdown:hover .dropdown-button {
          padding: 2rem 0;
          color: rgba(31, 32, 65, 0.75);
          /*font-weight: 700;*/
    }
#### 03.add some padding for dropdown-button when hover so that the white space will not break the hover event.
     .dropdown:hover .dropdown-button {
          padding: 2rem 0;
          color: rgba(31, 32, 65, 0.75);
          /*font-weight: 700;*/
    }
## 2.Newsletter-input-card
![preview](https://github.com/designer-kevinxie/UI-components-with-pure-html-css/blob/master/2.newsletter%20input%20card/images/preview.gif)
### #-------------------note----------------------------#
#### 01.input border style and placehoder 
html:

        <div class="input-box">
          <p class="">Receive the latest news, products and promotions straight in your inbox!</p>
          <input placeholder="Your email address" type="email" name="email" value="">
        </div>
css :

        /*input box*/
        .input-box p {
          font-weight: 400;
          font-size: 1.4rem;
          line-height: 2rem;
          color: rgba(31, 32, 65, 0.75);
          max-width: 28rem;
        }

        p, .input-box {
          margin-bottom: 2rem;
        }

        input {
          font-size: 1.6rem;
          text-indent: 1.5rem;
          /*placeholder text also*/
          width: 28rem;
          height: 4.4rem;
          border-style: solid;
          /*default is none*/
          border-width: 1px;
          /*default is 0*/
          border-color: rgba(31, 32, 65, 0.25);
          border-radius: 1rem;
          color: rgba(31, 32, 65, 0.5)
            /*input text color*/
        }

        ::placeholder {
          font-size: 1.4rem;
          color: rgba(31, 32, 65, 0.25);
        }

        input, .button:focus {
          outline: none;
        }

        /*default: Webkit browsers use outline: 5px auto -webkit-focus-ring-color;.
        On Macs -webkit-focus-ring-color is blue rgb(94, 158, 214) (or #5E9ED6),
        but on Windows and Linux it’s gold rgb(229, 151, 0) (or #E59700)*/
        input:focus::placeholder {
          color: transparent !important;
        }
        
#### 02.button with text and icon;layout with flexbox 
html : button element with text and icon

        <button class="button" name="button">
      <span href="#">subscribe</span>
      <img class="arrow" src="images/arrow.svg" alt="arrow icon">
    </button>
    
css :  flexbox align text to center ；icon absolute position 

    /* button */
    .button {
      border-style: none;
      position: relative;
      /*for arrow's absolute position */
      border-radius: 22px;
      width: 28rem;
      height: 4.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(262.73deg, #A49CFF 11.74%, #F78BF9 92.89%);
      cursor: pointer;
    }

    .button span {
      color: #fff;
      font-size: 12px;
      font-weight: 700;
      line-height: 15px;
      text-transform: uppercase;
    }

    .arrow {
      position: absolute;
      right: 2rem;
      transition: transform .5s;
    }

    /*hover effect*/
    .button:hover {
      box-shadow: 0 0 10px rgba(31, 32, 65, 0.1);
    }

    .button:hover .arrow {
      transform: translateX(1rem);
    }
#### 03.how to make 1rem=10px?
css

        html { font-size: 10px; }
        
        
## 3.Nav-bar-02
![preview](https://github.com/designer-kevinxie/UI-components-with-pure-html-css/blob/master/3.nav-bar-02/images/nav-bar-02-preview.gif)
### #-------------------note----------------------------#
#### 01.underline animation
#### 02.layout with flex and table-cell
#### 03.create layers layout with Pseudo-elements ::before and ::after
#### 04.scale animation of image with backround-size


## 4.Sign-in-card-page
![preview](https://github.com/designer-kevinxie/UI-components-with-pure-html-css-js/blob/master/4.sign-in-card-01/images/preview.gif)
### #-------------------note----------------------------#
#### 01.form with label,input,button html structure
        
     <form>
      <label for="fname">First name:</label><br>
      <input type="text" id="fname" name="fname"><br>
      <label for="lname">Last name:</label><br>
      <input type="text" id="lname" name="lname">
      <button class="submit_button" type="submit" name="button"><span class="button_text">Sign in</span></button>
    </form>
        
#### 02.img element or background-image ?


## 5.content-card-01:animation
![preview](https://github.com/designer-kevinxie/UI-components-with-pure-html-css-js/blob/master/5.content-card-01/images/preview.gif)
### #-------------------note----------------------------#
#### 01.add animation to every card with for loop & addEventListener function 
    var cards = document.querySelectorAll(".card-item");
    
    for(var i = 0 ;i<cards.length;i++){
      console.log(cards[i]);

       cards[i].addEventListener("mouseenter",function(){
      this.classList.toggle("card-hover");
    });

    cards[i].addEventListener("mouseleave",function(){
    this.classList.toggle("card-hover");
    });

    }

#### 02. circle to rectangle animation with css
    .card-item::before {
      content: "";
      width: 100%;
      height: 100%;
      background: #1F182F;
      position: absolute;
      top: 0;
      left: 0;
      clip-path: circle(5% at 84% 27%);
      transition: clip-path .5s ease-in-out;
    }

    .card-hover::before {
      clip-path: circle(100%);
    }
