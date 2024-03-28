<li><slot /></li>

<style>
  li {
      position: relative;
      display: block;
      padding: 8px 12px; /* Adjusted padding, you can tweak it */
      transition-duration: 0.5s;
      inline-size: 100%;
      box-sizing: border-box; /* Ensures padding is included in the element's total width and height */
      margin: 0; /* Removes any default margin */
      font-family: inherit; /* This makes sure the font is consistent with the dropdown */
      font-size: 16px; /* Adjust as needed */
  }
  
  li:hover, li:focus {
      background-color: #CDDEFF;
      cursor: pointer;
  }
  </style>
  