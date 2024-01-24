<script lang='ts'>
    import '@fontsource-variable/readex-pro';
    import '@fontsource-variable/quicksand';
    
    const navItems = [
        {label: "MedFlex Tech", a: "/"},
        {label: "Contact Us", a:"/ContactUs"},
        {label: "Progress", a:"/Progress"},
        {label: "Concept Designs", a:"/ConceptDesigns"},
        {label: "Research", a: "/Research"},
    ];
</script>

<style>
    nav{
        height: 35px;
        margin-top: 15px;
        background-color: #FBFBFB;
    }
    hr{
        border-top: 2px solid #699BF7;
        margin-top: 0%;
        margin-bottom: 0%;
        width: 100%;
        display: grid;
        position:inherit;

    }
    a{
        color: black;
        text-decoration: none;
        display: float;
        height: 45px;
        align-items: center;
        padding: 0 15px;
        font-size: 16px;

    }
    .navwrapper{
        position: fixed;
        width: 100%;
        background-color: #FBFBFB;
        z-index: 10;
        top: 0;
        left: 0;
        overflow: hidden;
        height: auto;
        max-height: 50px;
    }
    #right{
        float: right;
    } 

</style>

<div class="navwrapper">
    <nav>
        {#each navItems as item}
            {#if item.a == "/"}
                <a href={item.a}>{item.label}</a>
            {:else}
                <a id="right" href={item.a}>{item.label}</a>
            {/if}
        {/each}
    </nav>
    <hr>
</div>

<slot></slot>