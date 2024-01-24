<script>
    // Define your contact information
    let contactInfo = {
      email: 'contact@example.com',
      phoneNumber: '+1 (123) 456-7890',
      socialMedia: {
        twitter : 'https://twitter.com',
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
      },
    };

    // Define a function to handle form submission
  function submitForm(event) {
    event.preventDefault();

    // You can add your form submission logic here
    console.log('Form submitted');
  }
  
  </script>
  
  <div class="contact-us">
    <h1>Contact Us</h1>
    <p>Feel free to get in touch with us:</p>
  
    <!-- Display email and phone number -->
    <div class="contact-info">
      <p>Email: <a href={'mailto:' + contactInfo.email}>{contactInfo.email}</a></p>
      <p>Phone: {contactInfo.phoneNumber}</p>
    </div>
  
    <!-- Social media links -->
    <div class="social-media">
      <h2>Connect with us on social media:</h2>
      <ul>
        <li><a href={contactInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer">X (formerly twitter)</a></li>
        <li><a href={contactInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href={contactInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
      </ul>
    </div>
  
    <p>Or you can use the form below:</p>
  
    <form on:submit={submitForm}>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>

  <style>
    .contact-us{
      margin-top: 45px;
    }
  </style>