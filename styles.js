import { css } from "lit";

export const styles = [
  css`
    /* Carousel Structure */

    .carousel {
      display: flex;
      flex-direction: row;
      justify-content: end;
      align-items: center;
      position: relative;
      width: 100vw;
      height: 888px;
      background: linear-gradient(90deg, #f15c22 0%, #f7931d 50%, #ffc840 100%);
      overflow: hidden;
      padding: 0em;
    }
    .carousel-inner {
     display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
    width: clamp(290px, 86vw, 88vw);
    height: 560px;
    border: solid 1px red;
    overflow: hidden;
    align-content: center;
    align-items: center;
    justify-content: start;
    }

    .carousel-left {
      width: clamp(280px, 10vw, 298px);
      margin-right: clamp(1.5rem, 5vw, 5rem);
      }

  .carousel-right {
    width: clamp(290px, 67vw, 1510px);
    height: clamp(300px, 430px, 510px);
  }

    /*Buttons*/

    .navigation-buttons {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: start;
      gap: clamp(0.75rem, 2vw, 1.5rem);
      margin-bottom: clamp(0.75rem, 2vw, 1.5rem);
    }

    .navigation-buttons-dtp {
      display: flex;
      flex-direction: row;
      justify-content: start;
      gap: clamp(0.75rem, 2vw, 1.5rem);
    }
    .navigation-buttons-t-mb {
      display: none;
    }

    .carousel-button-lt,
    .carousel-button-rt {
      width: clamp(1.5rem, 4vw, 2rem);
      height: clamp(1.5rem, 4vw, 2rem);
      background-color: #262861;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }
    .carousel-button-lt:hover,
    .carousel-button-rt:hover {
      transform: scale(1.1);
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    }

    .carousel-button-cta {
      min-width: 16.81em;
      width: 100%;
      height: clamp(2.5rem, 5vw, 2.5rem);
      background-color: #ffc840;
      border-radius: 34px;
      border: none;
      cursor: pointer;
      font-family: "Roboto Mono", monospace;
      font-size: clamp(0.875rem, 1vw, 1rem);
      font-weight: 500;
      color: #262861;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s ease-in-out;
    }
    .carousel-button-cta:hover {
      transform: scale(1.05);
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    }
   
    .carousel-button-cta span:hover {
      gap: 0.75rem;
    }


    .carousel-button-cta span {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 0.6rem;
      line-height: 1rem;
      padding: clamp(0.25rem, 1vw, 0.8rem) clamp(0.5rem, 2vw, 1rem);
      transition: all 0.2s ease-in-out;
    }

    /*Text*/

    h2 {
      width: 100%;
      font-family: "Roboto", sans-serif;
      font-size: clamp(1.75rem, 3vw, 2.85rem);
      font-weight: 700;
      color: #f2f2f2;
      letter-spacing: -0.02em;
      line-height: 2.6875rem;
      margin: clamp(1rem, 2vw, 1.5rem) 0 0 0;
      font-smoothing: antialiased;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    p {
      max-width: 18.75rem;
      font-family: "Roboto", sans-serif;
      font-size: clamp(0.875rem, 2vw, 1rem);
      font-weight: 400;
      line-height: 1.4rem;
      color: #f2f2f2;
      margin: clamp(1rem, 2vw, 1.5rem) 0 2.625rem 0;
      font-smoothing: antialiased;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /*Slider*/

    .slider-container-wrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      aspect-ratio: 16/9;
    }

    .slider-container {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: start;
      gap: 1.75em;
      overflow: hidden;
      border-radius: clamp(4px, 1vw, 8px);
    }

    .slide {
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      width: 75%;
      height: 100%;
      flex-shrink: 0;
      margin-right: clamp(1rem, 2vw, 1.75em);
    }
    .slide img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: clamp(4px, 1vw, 8px);
    }

    /*Slider Dots*/

    .slider-dots {
      width: 100%;
      height: 16px;
      position: absolute;
      bottom: -40px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      gap: clamp(0.5rem, 2vw, 1rem);
      z-index: 10;
    }
    .slider-dot {
      width: clamp(0.75rem, 2vw, 1rem);
      height: clamp(0.75rem, 2vw, 1rem);
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.27);
      cursor: pointer;
      transition: all 0.1s ease-in-out;
    }
    .slider-dot:hover {
      scale: 1.2;
    }
    .slider-dot.active {
      background-color: rgb(255, 255, 255);
    }

    /* Responsive Breakpoints */

    @media (max-width: 1280px) {
    
      .carousel-inner {
        display: grid;
        grid-template-columns: auto auto;
        gap: 10px;
        width: clamp(290px, 88vw, 90vw);
        height: 530px;
        border: solid 1px red;
        overflow: hidden;
        align-content: center;
        align-items: center;
        justify-content: start;
      }
    }

    @media (max-width: 1024px) {
      
    /*Tablet Landscape Carousel Structure*/

      .carousel-inner {
        grid-template-columns: minmax(260px, 30%) 1fr;
        grid-template-rows: auto auto;
        gap: clamp(1rem, 5vw, 3.75rem);
        
      }


      /*Tablet Landscape Text*/
      
      h2 {
        font-size: clamp(1.5rem, 5vw, 2.25rem);
        line-height: clamp(1.5rem, 5.25vw, 2.25rem);
      }

      p {
        font-size: clamp(0.875rem, 2vw, 1rem);
        line-height: clamp(0.875rem, 2.75vw, 1.25rem);
      }
      /*Tablet Landscape Buttons*/

      .carousel-button-cta {
        font-size: clamp(0.875rem, 1vw, 1rem);
      }

      .carousel-button-cta span {
        font-size: clamp(0.875rem, 1vw, 1rem);
      }
    }

    @media (max-width: 840px) {
      .carousel-left {
      width: 255px;
      }

      .carousel-right {
      height: 100%;
      
      }
    }
       /*Tablet Portrait Carousel Structure*/

    @media (max-width: 768px) {

      .carousel {
        height: 100vh;
        overflow: visible;
      }
      
      .carousel-inner {
        width: 100%;
        height: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        margin: 0 auto;
        text-align: center;
        align-content: center;
        justify-content: space-evenly;
        align-items: center;
        justify-items: center;
        padding: 3rem;
        overflow: hidden;
        
      }

      .carousel-left {
        order: 1;
        width: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
      }

      .carousel-left-content {
        order: 2;
        width: 45%;
      }

      .carousel-left h2 {
        text-align: left;
        font-size: clamp(1.5rem, 6.5vw, 3.25rem);
        line-height: clamp(1.5rem, 7.5vw, 3.25rem);
      }

      .carousel-left p {
        text-align: left;
        width: 100%;
        font-size: 1.25rem;
        line-height: 1.55rem;

      }
      .carousel-button-cta {
        width: 100%;
      }
      .carousel-button-cta span {
        width: 100%;
        font-size: 1rem;
      }

      .carousel-right {
        order: 2;
        height: 100%;
        width: 100%;
      }

      /*Portrait Tablet Buttons*/
      .navigation-buttons-dtp {
        display: none;
      }

      .navigation-buttons-t-mb {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: clamp(0.75rem, 2vw, 1.5rem);
        justify-content: center;
        order: 1;
        margin: 0 auto;
        width: 100%;
        z-index: 10;
       
      }

      .carousel-left-content {
        order: 1;
        width: 80%;
        padding: 2rem 3rem;
      }

      /*Portrait Tablet Slider*/

      .slider-container-wrapper {
        height: 100%;
        aspect-ratio: unset;

      }

      .slider-container {
        order: 2;
        min-height: 500px;
        justify-content: center;
      }

      .slide {
        width: 100%;
      }

      /*Portrait Tablet Slider Dots*/

      .slider-dots {
        bottom: clamp(-6rem, 1vw, 3rem);
      }

      /*Tablet Text*/

      h2 {
        text-align: center;
        max-width: 80%;
      }

      p {
        text-align: center;
        max-width: none;
        font-size: 1rem;
      }
    }

    @media (max-width: 480px) {
      /*Mobile Carousel Structure*/

    .carousel {
        height: 100vh;
        flex-direction: column;

        
      }

      .carousel-inner {
        padding: clamp(0.5rem, 2vw, 1rem);
        justify-content: space-around;
      }

      .carousel-left: {
        align-items: start;
        flex-direction: column;
        justify-content: center;
        height: 50vh;
      }

      .carousel-left-content: {
        padding: 5rem 3rem;
        order: 1;
      }

      .slider-container-wrapper {
        height: 50vh;
        min-height: 250px;
      }

      /*Mobile Buttons*/

      .navigation-buttons {
        gap: clamp(1rem, 4vw, 2rem);
      }
    }

    /* Large screens */
    @media (min-width: 1600px) {
      
    .carousel-inner {
        max-width: 1600px;
        margin: 0;
      }

    .carousel-left {
     margin-right: 5.5em; 
      }
    }

  `,
];
