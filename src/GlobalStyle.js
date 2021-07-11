import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
  }

  .container-blur {
    background: rgba(33,37,41,0.5);
    border-radius: 10px;
    padding: 10px;
  }

  .link {
    text-decoration:none;
    color: black;
  
    &:hover {
      opacity: .7;
      color: black;
    }
    
    &-bold {
      font-size: 1em;
      font-weight: bold;
    }
   
    &-light:hover {  color: rgba(255,255,255,0.7); }
   
  }
  
  .beforeDot {
  	position: relative;
	  padding-left: 20px;

    &:before {
      position: absolute;
      left: 10px;
      top: 50%;
  
      display: block;
  
      width: 5px;
      height: 5px;
  
      content: '';
      background-color: #fff;
      border-radius: 100%;
    }
  }
  
  .dividerBottom {
    position:relative;
    
    &:before {
      position: absolute;
      bottom: 0;
      left: 0;
      content:'';
      width: 100%;
      height: 1px;
      background-color: #d7d7d7;
    }
  }
  
  .dividerLeft {
    position:relative;
    padding-left: 20px !important;
    
    &:before {
      position: absolute;
      bottom: 0;
      left: 10px;
      content:'';
      width: 1px;
      height: 100%;
      background-color: #d7d7d7;
    }
  }
  
  .movieSideBarToolTip {
    width: 140px;
    text-align: center;
    display: none !important;
    
    @media (min-width: 992px) { display: block !important; }
  }
  
  .swiper-container { padding: 10px 0 30px; }
  
  .card-backdrop {
    border-radius: 10px;
    overflow: hidden;
    margin: 20px auto;
    width: 100%;
    max-width: 533px;
    height: 100%;
    max-height: 300px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    
    img {
      width: 100%;
      height: auto;
      transition: transform 0.3s;
      
	    &:hover { transform: scale(1.025); }
    }
  }
  
  .filters-title {
  	font-size: 1em;
	  font-weight: 300;
  }
  
  .info-text {
    color: #a4a4a4;
    font-size: 0.9em;
  }
  
  .test {
  fill: rgba(17,182,221,0.5);
  
  &:hover {
  fill: #11b6dd;
  }
  }
 
`

export default GlobalStyle
