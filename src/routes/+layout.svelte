<script lang='ts'>
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
        height: 45px;
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
<slot></slot>