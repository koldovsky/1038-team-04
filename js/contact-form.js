function handleFormSubmission() {
    const form = $('#contacts_us__form');
  
    form.on('submit', function(event) {
      event.preventDefault();
      const formData = form.serialize();
  
      $.post('http://localhost:3000/post', formData, function(response) {
        form[0].reset();
      }).fail(function() {
        // Виконуємо дії в разі, якщо відправка форми не вдалась
      });
    });
  }
  
  $(document).ready(function() {
    handleFormSubmission();
  });
  

