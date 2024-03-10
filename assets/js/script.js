// if you use jQuery, you need to start your .js file with this.
// otherwise you can delete everything here.
$(document).ready(function() {

// First we select the element we want to target
const target = document.querySelector('.intro');
const target1 = document.querySelector('.chapter-1');
const target2 = document.querySelector('.chapter-2');
const target3 = document.querySelector('.chapter-3');
const target4 = document.querySelector('.chapter-4');
const target5 = document.querySelector('.conclusion');
const target6 = document.querySelector('.workscited');


/*
const chapterHeadings = document.querySelectorAll( 'h2' );
const menuItems = document.querySelectorAll( '.menu a' );
function proportionizeMenuItems( ) {
  chapterHeadings.forEach( function( chapterHeading, headingIndex ) {
    // let documentHeight = document.body.clientHeight;


    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
  );
    let chapterHeight = 0;

    if ( headingIndex == chapterHeadings.length - 1 ) {
      chapterHeight = documentHeight - chapterHeading.offsetTop;
    } else {
      chapterHeight = chapterHeadings[ headingIndex + 1 ].offsetTop - chapterHeading.offsetTop;
    }
    menuItems[ headingIndex ].style.width = `${ 100 * chapterHeight / documentHeight }%`;

    if ( headingIndex == 0 ) {
      menuItems[ headingIndex ].parentNode.style.paddingLeft = `${ 100 * chapterHeading.offsetTop / documentHeight }%`
    }

    // console.log( chapterHeadings[headingIndex + 1 ] )
    // console.log( chapterHeading.offsetTop / document.body.clientHeight );
  } );
}
window.addEventListener( 'resize', proportionizeMenuItems );
proportionizeMenuItems( );
*/
function updateMenuProgress( ) {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
  const scrollPercentage = scrollTop / scrollHeight;


  document.querySelector( '.menu' ).style.setProperty( '--progress-width', scrollPercentage )
  console.log( scrollPercentage );
}
window.addEventListener( 'scroll', updateMenuProgress );
updateMenuProgress( );


// Next we want to create a function that will be called when that element is intersected
function handleIntersection(entries) {

    entries.push(target, target1, target2, target3, target4, target5, target6);
  // The callback will return an array of entries, even if you are only observing a single item
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    } else {
      entry.target.classList.remove('visible')
    }
  });
}

// Next we instantiate the observer with the function we created above. This takes an optional configuration
// object that we will use in the other examples.
const observer = new IntersectionObserver(handleIntersection);

const targets = document.querySelectorAll(".target");

// Finally start observing the target element
observer.observe(target);

[...targets].forEach((i) =>{
    if(i){
        observer.observe(i);
    }
    
})

document.addEventListener('DOMContentLoaded', function() {
  var sidenoteNumbers = document.querySelectorAll('.sidenote-number');
  
  sidenoteNumbers.forEach(function(sidenoteNumber) {
    sidenoteNumber.addEventListener('click', function() {
      var sidenote = this.nextElementSibling; // Get the sibling element with class 'sidenote'
      sidenote.classList.toggle('visible'); // Toggle the 'visible' class
    });
  });
});





});