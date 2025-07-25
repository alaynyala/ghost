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
              <div class="slider-container">
                <slot></slot>
              </div>
    `;
  }
}

customElements.define('carousel-component', CarouselComponent);