(function(){
    emailjs.init('Q3gPxq0m0I1zqnIaT')
})()

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_3jdfcj7';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'SUBMIT';
      alert('Sent!');
    }, (err) => {
      btn.value = 'SUBMIT';
      alert(JSON.stringify(err));
    });
});