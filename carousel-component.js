import {LitElement, html} from 'lit';
import { styles } from './styles.js'; 


export class CarouselComponent extends LitElement {
  static styles = styles;

  static properties = {
    currentSlide: { type: Number },
    totalSlides: { type: Number },
  };

  constructor() {
    super();
    this.currentSlide = 0;
    this.totalSlides = 0;
  }
  firstUpdated() {
    const slot = this.shadowRoot.querySelector('slot');
    const slottedElements = slot.assignedElements();
    this.totalSlides = slottedElements.length;
    this.updateSlideVisibility();
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0; 
    }
    this.updateSlideVisibility();
    this.updateDots();
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.totalSlides - 1; 
    }
    this.updateSlideVisibility();
    this.updateDots();
  }

  updateSlideVisibility() {
    const slot = this.shadowRoot.querySelector('slot');
    const slides = slot.assignedElements();
    
    slides.forEach((slide, index) => {
      slide.style.position = 'absolute';
      slide.style.objectFit = 'contain';
      slide.style.borderRadius = '4px';
      slide.style.paddingRight = '1.75em';
      slide.style.transition = 'transform 0.3s ease-in-out';
      
      
      if (window.innerWidth < 480) {
        // Square aspect ratio for very small screens
        slide.style.width = `${window.innerWidth - 24}px`;
        slide.style.height = `${window.innerWidth - 24}px`;
        slide.style.aspectRatio = '1 / 1';
        slide.style.maxWidth = 'none';
        slide.style.maxHeight = 'none';
      } else if (window.innerWidth < 844) {
        // Scale down proportionally until 844px viewport width
        const scale = window.innerWidth / 844;
        slide.style.width = 'clamp(290px, 100%, 843px)';
        slide.style.height = 'auto';
        slide.style.aspectRatio = '843 / 463';
        slide.style.maxWidth = `${843 * scale}px`;
        slide.style.maxHeight = `${463 * scale}px`;
      } else {
        // Full size for larger screens
        slide.style.width = 'clamp(290px, 100%, 843px)';
        slide.style.height = 'auto';
        slide.style.aspectRatio = '843 / 463';
        slide.style.maxWidth = 'none';
        slide.style.maxHeight = 'none';
      }

      const translateX = (index - this.currentSlide) * 100;
      slide.style.transform = `translateX(${translateX}%)`;
    });
  }

  goToSlide(index) {
    this.currentSlide = index;
    this.updateSlideVisibility();
    this.updateDots();
  }

  updateDots() {
    const dots = this.shadowRoot.querySelectorAll('.slider-dot');
    dots.forEach((dot, index) => {
      if (index === this.currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }



  

 render() {
    return html`
      <div class="carousel">
        <div class="carousel-inner">
          <div class="carousel-left">
            <div class="navigation-buttons-dtp">
              <button class="carousel-button-lt" @click=${this.prevSlide}>
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66667 1L2.00001 7.66667L8.66667 14.3333"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    d="M2 7.66665L18 7.66666"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </button>
              <button class="carousel-button-rt" @click=${this.nextSlide}>
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.33333 1L16 7.66667L9.33333 14.3333"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    d="M16 7.66665L-4.76837e-07 7.66666"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </button>
            </div>
            <div class="carousel-left-content">
              <h2>The Roberts Family's Story</h2>
              <p>
                The circumstances that might lead to homelessness can include
                loss of income or transportation, a falling out with loved ones,
                or an abrupt economic downturn. For Brandon and Jennifer, it was
                all of these things.
              </p>
              <button class="carousel-button-cta">
                <span>
                  More Client Stories
                  <svg
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1.5L12 6.5L7 11.5"
                      stroke="#262861"
                      stroke-width="1.5"
                    />
                    <path
                      d="M12 6.5L0 6.5"
                      stroke="#262861"
                      stroke-width="1.5"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div class="carousel-right">
            <div class="slider-container-wrapper">
            <div class="navigation-buttons-t-mb">
              <button class="carousel-button-lt" @click=${this.prevSlide}>
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66667 1L2.00001 7.66667L8.66667 14.3333"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    d="M2 7.66665L18 7.66666"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </button>
              <button class="carousel-button-rt" @click=${this.nextSlide}>
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.33333 1L16 7.66667L9.33333 14.3333"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    d="M16 7.66665L-4.76837e-07 7.66666"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </button>
            </div>
            <div class="slider-dots">
              ${Array.from({length: this.totalSlides}).map((_, i) => html`
              <div class="slider-dot ${i === this.currentSlide ? 'active' : ''}" @click=${() => this.goToSlide(i)}></div>
            `)}
              </div>
              <div class="slider-container">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('carousel-component', CarouselComponent);