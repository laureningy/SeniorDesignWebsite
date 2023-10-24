<script lang="ts">
    let src = "src/lib/images/placeholder.png";
</script>


<div class="imgbox">
    <img class="center-fit" {src} alt="MedFlex Duo Device"/>
</div>
<h1>MedFlex Tech</h1>

<h2>MedFlex Duo</h2>
<p>About the project</p>

<h2>Project Mission</h2>
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
    
    h1,h2{
        font-family: "Oswald Variable", sans-serif;
    }

    h1{
        text-align: center;
        font-size: 52px;
    }

    h2{
        font-weight: 500;
    }

</style>