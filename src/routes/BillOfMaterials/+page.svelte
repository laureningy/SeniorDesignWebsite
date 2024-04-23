<script>
    let budget = '/budget.jpg';
</script>

<div id="page">
    <h1>Project Budget</h1>
    <hr/>
    <div class="paragraph">
        <p>The team was awarded a $700 budget by the  Mechanical Engineering Department. Our team used $374.33 leaving us with $325.67 leftover.</p>
        <img src={budget} alt="Project Budget">
    </div>
</div>



<style>
	h1{
	   font-family: "Readex Pro Variable", sans-serif;
	   font-weight: 500;
	   margin-bottom: 0%;
   }
   #page{
	margin-top: 60px;
	margin-left: 15%;
	margin-right: 15%;
   }
   .paragraph{
	text-indent: 5%;
    font-size: 18px;
    justify-content: center;
    align-items: center;
   }
   hr{
        border-top: 2px solid #194AA4;
        border-radius: 1px;
        padding: 0%;
    }
    img{
        width: 75%;
    }
</style>