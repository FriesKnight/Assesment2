function checkLoyaltyPoints() {
    const phoneNumberInput = document.getElementById('phoneNumber');
    const phoneNumber = phoneNumberInput.value;
  
    // Assuming the phone number is valid
    if (phoneNumber === '+60173527250') {
      window.location.href = 'page2.html';
    } else if (phoneNumber === '173527250') {
        window.location.href = 'page2.html';
    } else if (phoneNumber === '0173527250') {
        window.location.href = 'page2.html';
    }
     else {
      alert('Invalid phone number. Please enter +60173527250.');
    }
  }
  
  function displayPage3() {
    const name = document.getElementById('name').value;
    const birthday = document.getElementById('birthday').value;
    const email = document.getElementById('email').value;
  
    // Assuming Page 3 is page3.html
    window.location.href = `page3.html?name=${name}&birthday=${birthday}&email=${email}`;
  }
  