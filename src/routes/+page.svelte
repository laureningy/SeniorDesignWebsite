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