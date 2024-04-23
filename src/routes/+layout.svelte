<script lang='ts'>
    import '@fontsource-variable/readex-pro';
    import '@fontsource-variable/quicksand';
    import Menu from '../components/Menu.svelte'
	import MenuItem from '../components/MenuItem.svelte'

</script>

<style>
    nav{
        height: 35px;
        margin-top: 15px;
        background-color: #FBFBFB;
        position: relative;
    }
    hr{
        border-top: 2px solid #699BF7;
        margin-top: 0%;
        margin-bottom: 0%;
        width: 100%;
        display: grid;
        position:inherit;

    }
    a, span{
        color: black;
        text-decoration: none;
        font-size: 16px;
        font-weight: 400;
    }
    .navwrapper{
        position: fixed;
        width: 100%;
        background-color: #FBFBFB;
        z-index: 10;
        top: 0;
        left: 0;
        height: auto;
        max-height: 50px;
    }
    .right{
        margin-left: 15px;
    } 

    #home{
        position: absolute; 
        top: 0; 
        left: 0; 
    }

    *,
	*::before,
	*::after {
  	box-sizing: border-box;
	}

    li{
        align-items: center;
        padding: 0 15px;
        margin: 0;
    }
	
	ul {
        margin: 0;
		padding: 0;
        display: flex;
		list-style-type: none;
        justify-content: flex-end;
	}
	

</style>

<div class="navwrapper">
    <nav>
		<ul>
            <li id="home">
                <a href="/">Med Flex Tech</a>
            </li>
            <li class="right">
                <a href="/Research">Research</a>
            </li>
            <li class="right">
                <a href="/Progress">Progress</a>
            </li>
            <li class="right">
                <a href="/ConceptDesigns">Concept Designs</a>
            </li>
            <li class="right">
				<Menu>
					<span slot='toggle'>Prototypes</span>
                        <!-- <MenuItem><a href="/FinalPrototype">Final Prototype</a></MenuItem> -->
                        <MenuItem><a href="/Software">Software</a></MenuItem>
                        <MenuItem><a href="/BetaPrototype">Beta Prototype</a></MenuItem>
                        <MenuItem><a href="/AlphaPrototype">Alpha Prototype</a></MenuItem>
                        <MenuItem><a href="/TechnicalAnalysis">Technical Analysis</a></MenuItem>
                        <MenuItem><a href="/BillOfMaterials">Bill of Materials</a></MenuItem>
                </Menu>
			</li>
            <li class="right">
                <a href="/ContactUs">Contact Us</a>
            </li>
		</ul>
	</nav>

    <!-- <button on:click={clickHandler}>Menu</button>
	{#if isExpanded}
	<ul  transition:slide>
		<li>Home</li>
		<li>About</li>
		<li>Projects</li>
		<li>Contact</li>
	</ul>
	{/if} -->
    <!-- <nav>
        {#each navItems as item}
            {#if item.a == "/"}
                <a href={item.a}>{item.label}</a>
            {:else if item.label != 'Prototypes'}
                <a id="right" href={item.a}>{item.label}</a>
            {/if}
        {/each}
    </nav> -->
    <hr>
</div>

<slot></slot>