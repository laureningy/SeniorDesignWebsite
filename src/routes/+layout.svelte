<script lang='ts'>
    import '@fontsource-variable/oswald';
    import '@fontsource-variable/quicksand';
    
    const navItems = [
        {label: "MedFlex Tech", a: "/"},
        {label: "Research", a: "/Research"},
        {label: "Concept Designs", a:"/ConceptDesigns"},
        {label: "Progress", a:"/Progress"},
        {label: "Team", a:"/Team"}
    ];
</script>

<style>
    nav{
        height: 35px;
        margin-top: 15px;
    }
    hr{
        border-top: 1px solid #699BF7;
        margin-top: 0%;
    }
    a{
        color: black;
        text-decoration: none;
        display: float;
        height: 45px;
        align-items: center;
        padding: 0 10px;
        font-size: 16px;

    }
   
</style>

<nav>
    {#each navItems as item}
        <a href={item.a}>{item.label}</a>
    {/each}
</nav>
<hr>
<slot></slot>