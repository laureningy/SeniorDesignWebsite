<script lang="ts">
    import { onMount } from 'svelte';
  
    let src = "/Logo.svg";
    let team = [
    {
      id: 1,
      name: 'Eshan Sharma',
      role: 'Software Engineer',
      bio: '',
      imageSrc: '/EshanPhoto.jpg', 
    },
    {
      id: 2,
      name: 'Lauren Ingraham',
      role: 'Software Engineer',
      bio: '',
      imageSrc: '/LaurenPhoto.jpg',
    },
    {
      id: 3,
      name: 'Colin Keady',
      role: 'Mechanical Engineer',
      bio: '',
      imageSrc: './ColinPhoto.jpg',
    },
    {
      id: 4,
      name: 'Michael Goodall',
      role: 'Mechanical Engineer',
      bio: '',
      imageSrc: '/MikePhoto.jpg',
    },
    {
      id: 5,
      name: 'Nicholas Dahdah',
      role: 'Mechanical Engineer',
      bio: '',
      imageSrc: '/NickPhoto.jpg',
    },
    {
      id: 6,
      name: 'Nicole Waletzki',
      role: 'Mechanical Engineer',
      bio: '',
      imageSrc: '/NicolePhoto.jpg',
    },
  ];


  </script>

<div id="wrapper" class="title">
    <div class="imgbox">
        <img class="center-fit" {src} alt="MedFlex Duo Device"/>
    </div>
</div>
<div class="spacer layer1" ></div>

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
    <p>MedFlex Tech is committed to aiding patients in the recovery process who need the convenience of at home 
        treatment options, so that they can focus on what matters to them while healing. MedFlex Duo is a 
        medical device that combines prescription level muscle and bone growth stimulation utilizing innovative
         technologies that make patient care more accessible. In combination with the mobile application 
         MedFlex Connect, comprehensive care can be provided at home with treatment and physician interactions.
          MedFlex Tech will provide patients with the care they deserve, with faster, easier, and just as 
          effective treatments. </p>
</div>

<div class="circle layer2">
    <div class="row">
        {#each team as item}
            {#if item.id <= 3 }
            <div class="column">
                <img src={item.imageSrc} alt={item.name}>
                <div class="description">
                    <h4 class="descriptionText">{item.name}</h4>
                    <p class="descriptionText">{item.role}</p>
                    <p class="descriptionText">{item.bio}</p>
                </div>
            </div>
            {/if}
        {/each} 
    </div>
    <h3>Meet Our Team</h3>
    <div class="row">
        {#each team as item}
            {#if item.id > 3 }
            <div class="column">
                <img src={item.imageSrc} alt={item.name}>
                <div class="description">
                    <h4 class="descriptionText">{item.name}</h4>
                    <p class="descriptionText">{item.role}</p>
                    <p class="descriptionText">{item.bio}</p>
                </div>
            </div>
            {/if}
        {/each} 
    </div>
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
    .line{
        position: absolute;
        width: 100%;
        height: auto;
        text-align: center;
        overflow: hidden;
    }
    svg{
        display: inline-block;
  
    }
    .title{
        background-color: #CDDEFF;
        padding-top: 5%;
        width: 100%;
    }
    #wrapper{
        display: grid;
        position: relative;
    }
    .section{
        margin: 5%;
        position: relative;
 
    }
    h3,h2{
        font-family: "Readex Pro Variable", sans-serif;
        font-weight: 500;
    }

    h3{
        text-align: center;
        font-size: 52px;
        margin: 0%;
    }

    h2{
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
    .spacer{
        aspect-ratio: 960/300;
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        height: 150px;
    }
    .layer1 {
        background-image: url('./layered-waves.svg');
    }
    .layer2{
        background-image: url(./Circles.svg);
        background-size:cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 800px;
        width: 100%;
    }
    .row {
        padding: 30px;
        display: flex;
        justify-content: center;

    }
    .column {
        align-content: space-evenly;
        padding-left: 30px;
        padding-right: 30px;
        position: relative;
    }
    @media (hover: hover){
        .description{
            position: absolute;
            background-color: rgba(25,74,164,.85);
            color: white;
            visibility: hidden;
            top: 0;
            left: 30px;
            width: 203px;
            height: 257px;
        }
        .descriptionText{
            padding-left: 8px;
            margin-bottom: 0;
            width: 100%;
        }
        .column:hover .description{
            visibility: visible;
        }
    }


</style>