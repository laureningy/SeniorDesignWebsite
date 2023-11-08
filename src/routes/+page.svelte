<script lang="ts">
    import { onMount } from 'svelte';
  
    let src = "src/lib/images/MedFlexTechLogo.png";
  
    // Function to invert image colors
    function invertImageColors() {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
  
      const img = new Image();
      img.src = src;
  
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
  
        // Draw the image on the canvas
        ctx.drawImage(img, 0, 0, img.width, img.height);
  
        // Get the image data
        const imageData = ctx.getImageData(0, 0, img.width, img.height);
        const data = imageData.data;
  
        // Invert the colors by modifying each pixel
        for (let i = 0; i < data.length; i += 4) {
          data[i] = 255 - data[i]; // Red
          data[i + 1] = 255 - data[i + 1]; // Green
          data[i + 2] = 255 - data[i + 2]; // Blue
        }
  
        // Put the modified image data back to the canvas
        ctx.putImageData(imageData, 0, 0);
  
        // Update the src with the inverted image
        src = canvas.toDataURL();
      };
    }
  
    onMount(() => {
      invertImageColors(); // Automatically invert the image colors when the component is mounted (client-side).
    });
  </script>

<div id="wrapper">
    <div class="imgbox">
        <img class="center-fit" {src} alt="MedFlex Duo Device"/>
    </div>
</div>


<div class="section">
    <h2>MedFlex Duo</h2>
    <hr>
    <p>By combining prescription level bone growth and muscle stimulation into one, we are bringing office level care to you on your own time.
        In combination with MedFlex Connect, our mobile application, you will be able to recieve custom treatments from your provider.

    </p>
</div>

<div class="section">
    <h2>Project Mission</h2>
    <hr>
    <p>To help take the stress out of patient recovery.</p>
</div>

<style >
    .imgbox {
        display: grid;
        height: 100%;
    }
    .center-fit {
        max-width: 100%;
        max-height: 100vh;
        margin: auto;
    }
    #title{
        position: relative;
        height: 60px;
        top: -120%;
    }
    #wrapper{
        display: grid;
    }
    .section{
        margin: 5%;
    }
    h1,h2{
        font-family: "Oswald Variable", sans-serif;
    }

    h1{
        text-align: center;
        font-size: 52px;
    }

    h2{
        font-weight: 500;
        margin-bottom: 0;
    }
    hr{
        border-top: 2px solid #194AA4;
        border-radius: 1px;
        padding: 0%;
    }
    p{
        font-family: "Quicksand Variable", sans-serif;
        margin-left: 2%;
        margin-right: 2%;
    }

</style>