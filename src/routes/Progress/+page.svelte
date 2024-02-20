
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

<div id="page">
	<h1>Progress</h1>

	<h2>Phase 1</h2>
	<hr>
	<div class="section">
	<Phase1 />
	</div>

	<h2>Phase 2</h2>
	<hr>
	<div class="section">
		<Phase2 />
	</div>

	<h2>Phase 3</h2>
	<hr>
	<div class="section">
		<Phase3 />
	</div>

	<h2>Phase 4</h2>
	<hr>
	<div class="section">
		<Phase4 />
	</div>

	<h2>Phase 5</h2>
	<hr>
	<div class="section">
		<Phase5 />
	</div>

	<h2>Phase 6</h2>
	<hr>
	<div class="section">
		<Phase6 />
	</div>
</div>

<style>
	h1,h2{
	   font-family: "Readex Pro Variable", sans-serif;
	   font-weight: 500;
	   margin-bottom: 0%;
   }
   #page{
	margin-top: 60px;
	margin-left: 10%;
	margin-right: 10%;
   }
   .section{
	margin-left: 5%;
	margin-right: 5%;
   }
   hr{
        border-top: 2px solid #194AA4;
        border-radius: 1px;
        padding: 0%;
    }
</style>