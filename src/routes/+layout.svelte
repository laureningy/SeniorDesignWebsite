<script lang='ts'>
    const navItems = [
        {label: "Home", a: "/"},
        {label: "Concept Designs", a:"/ConceptDesigns"},
        {label: "Our Team", a:"/OurTeam"}
    ];
</script>

<style>
    nav{
        height: 45px;

    }
    a{
        color: #fff;
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