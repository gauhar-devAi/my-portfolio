
// Screen par majood saare skill fills ko select karlo
const skillFills = document.querySelectorAll('.skill-fill')

// Ek Observer (jasoos) banaya jo check karega ke section screen par kab aaya
const skillObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {

    // Agar user scroll kartye hue is section tak pohnch gaya hai
    if(entry.isIntersecting){
      const fill = entry.target;

      // HTML se uski target width read karo (jaise 90, 85 etc)
      const targetWidth = fill.getAttribute('data-width');

      // Width badha do taake bar fill ho jaye
      fill.style.width = targetWidth + '%';

      // Aik baar animation chal jaye to dubara trigger na ho (Performance ke liye)
      observer.unobserve(fill);
    }
  });

}, {threshold: 0.3});

// Har skill bar ko is observer par laga do
skillFills.forEach(fill => skillObserver.observe(fill));