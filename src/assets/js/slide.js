function Slider( element ) {
    this.el = document.querySelector( element );
    this.init();
}

Slider.prototype = {
    init: function() {
        this.links = this.el.querySelectorAll( "#slider-nav a" );
        this.wrapper = this.el.querySelector( "#slider-wrapper" );
        this.navigate();
    },
    navigate: function() {

        for( let i = 0; i < this.links.length; ++i ) {
            let link = this.links[i];
            this.slide( link );
        }
    },

    animate: function( slide ) {
        let parent = slide.parentNode;
        let caption = slide.querySelector( ".caption" );
        let captions = parent.querySelectorAll( ".caption" );
        for( let k = 0; k < captions.length; ++k ) {
            let cap = captions[k];
            if( cap !== caption ) {
                cap.classList.remove( "visible" );
            }
        }
    },

    slide: function( element ) {
        let self = this;
        element.addEventListener( "click", function( e ) {
            e.preventDefault();
            let a = this;
            self.setCurrentLink( a );
            let index = parseInt( a.getAttribute( "data-slide" ), 10 ) + 1;
            let currentSlide = self.el.querySelector( ".slide:nth-child(" + index + ")" );
            self.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
            self.animate( currentSlide );

        }, false);
    },
    setCurrentLink: function( link ) {
        let parent = link.parentNode;
        let a = parent.querySelectorAll( "a" );

        link.className = "current";

        for( let j = 0; j < a.length; ++j ) {
            let cur = a[j];
            if( cur !== link ) {
                cur.className = "";
            }
        }
    }
};

document.addEventListener( "DOMContentLoaded", function() {
    new Slider( "#slider" );
});








