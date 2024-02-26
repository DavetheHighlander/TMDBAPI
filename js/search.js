const searchForm = document.querySelector('searchForm');


searchForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const userInput = document.querySelector("#input").value;
    const term = document.querySelector('input[name="radio-button"]:checked').value;
  
    if(term === 'movie'){
      fetchMovies(term, userInput, displayMovies); 
      updateMainHeading('Movies')
    }
               
    else if(term === 'person'){
      fetchMovies(term, userInput, displayPerson); 
      updateMainHeading('Person')
        
    }
  
    const clearUserInput = document.querySelector('#user-input');
    clearUserInput.value = ""; 
  
  });



  // Attach a submit event listener to the 'searchForm' element
searchForm.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior, which would cause a page reload
  event.preventDefault();

  // Retrieve the user input from the element with id 'input'
  const userInput = document.querySelector("#input").value;

  // Retrieve the value of the selected radio button named "radio-button"
  const term = document.querySelector('input[name="radio-button"]:checked').value;

  // Check if the selected term is 'movie'
  if (term === 'movie') {
      // If it's 'movie', fetch movie data using the fetchMovies function
      // and display the results using the displayMovies callback function
      fetchMovies(term, userInput, displayMovies);
      
      // Update the main heading to indicate 'Movies'
      updateMainHeading('Movies');
  }
  // If the selected term is 'person'
  else if (term === 'person') {
      // Fetch person data using the fetchMovies function
      // and display the results using the displayPerson callback function
      fetchMovies(term, userInput, displayPerson);
      
      // Update the main heading to indicate 'Person'
      updateMainHeading('Person');
  }

  // Clear the user input field with id 'user-input'
  const clearUserInput = document.querySelector('#user-input');
  clearUserInput.value = "";
});
