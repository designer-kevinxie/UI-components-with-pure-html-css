# UI-components-with-pure-html-css

## 1.Nav-bar-01
![preview](https://github.com/designer-kevinxie/UI-components-with-pure-html-css/blob/master/nav-bar-01/images/preview-default.png)
![hover](https://github.com/designer-kevinxie/UI-components-with-pure-html-css/blob/master/nav-bar-01/images/preview-hover.png)
### note
#### 01.how to create rounded button with gradient border by pure css?
html:add span between a

    <a class="login" href="#"><span>login</span></a>
    
css: padding make a bigger than white span,border-box can control the size of element with padding or border.

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
