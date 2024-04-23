<script>
    let requirements = '/softwareRequirementsBrainstorm.jpg';
    let appDesign1 = '/appDesign1.jpg';
    let appDesign2 = '/appDesign2.jpg';
</script>

<div id="page">
    <h1>Software</h1>
    <hr/>
    <div class="paragraph">
        <p>The software team worked in a few main stages: requirements discovery and analysis, design, and development, closely following the software development lifecycle with a heavy focus on the app. Requirements discovery and analysis included understanding who and what this application needed to be. It was determined that the app, MedFlex Connect would be an application that was able to connect via Bluetooth Low Energy to the physical MedFlex Duo device. The app will act as a way for patients to track treatments, view their treatment progress, and interact with their doctors. The app should make it easy for patients to starts and complete treatments, help establish routines, and facilitate communication between patient and prescriber. Additionally, the team identified some general demographics about who our customers are to better understand their needs. </p>
        <img src={requirements} alt="Requirements Brainstorming">
        <p>Once requirements were established, the team focused on the design of the app using a software called Figma. This allowed the group to visualize the flow of the app, how views would interact, and what data should be present on each page. The team decided on a blue color theme as this is a color typically used in the medical field to provide a calming effect. The app features a home screen with bottom navigation to a Profile and Help page, plus additional navigation on the page itself to Start Treatment, Calendar, Journal, and History. </p>
        <img src={appDesign1} alt="App Design">
        <img src={appDesign2} alt="App Design">
        <p>The team began development using React-Native and Expo, but very soon ejected from Expo in order to implement and test Bluetooth functionality. React-Native is a JavaScript framework for developing native apps and features configuration options for both Android and IOS. GitHub was used for version control and Jira for tracking project progress. Additionally, Firebase was used for authentication and data storage. </p>
    </div>
    <p>Our source code can be viewed in our GitHub Organization: <a href="https://github.com/MedFlexTech">MedFlexTech </a></p>
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
   }
   hr{
        border-top: 2px solid #194AA4;
        border-radius: 1px;
        padding: 0%;
    }
</style>