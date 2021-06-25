import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
//@import '../node_modules/react-modal-video/scss/modal-video.scss';
@import '../node_modules/react-modal-video/css/modal-video.min.css';

  .link-light {
    &:hover {
      color: rgba(255,255,255,0.7);
    }
  }
  
  .link{
  text-decoration:none;
  color: black;
  
  &:hover {
      opacity: .7;
      color: black;
    }
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

`

export default GlobalStyle
