<script lang="ts">
    let src = "src/lib/images/placeholder.png";
</script>

<div id="wrapper">
    <div class="imgbox">
        <img class="center-fit" {src} alt="MedFlex Duo Device"/>
    </div>
    <div id="title">
        <h1>MedFlex Tech</h1>
    </div>
</div>



<h2>MedFlex Duo</h2>
<hr>
<p>About the project</p>

<h2>Project Mission</h2>
<hr>
<p>Mission and Goals</p>




<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

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
        font-family: "Quicksand", sans-serif;
    }

</style>