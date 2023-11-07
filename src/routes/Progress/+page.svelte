
<script lang="ts">
    //import PageProgress from "svelte-page-progress";
    import Layout from "../+layout.svelte";
    import Phase1 from "./phase1.svelte";
	import Phase2 from "./phase2.svelte";
	import Phase3 from "./phase3.svelte";
	import Phase4 from "./phase4.svelte";
	import Phase5 from "./phase5.svelte";
	import Phase6 from "./phase6.svelte";

</script>
<style>
	 h1,h2{
        font-family: "Oswald Variable", sans-serif;
    }
</style>

<h1>Progress</h1>

<h2>Phase 1</h2>
<Phase1 />

<h2>Phase 2</h2>
<Phase2/> 

<h2>Phase 3</h2>
<Phase3 />

<h2>Phase 4</h2>
<Phase4/>

<h2>Phase 5</h2>
<Phase5 />

<h2>Phase 6</h2>
<Phase6/>