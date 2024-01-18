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