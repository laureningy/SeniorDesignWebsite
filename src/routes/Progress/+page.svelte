<script lang="ts">
    import Layout from "../+layout.svelte";
</script>

<div id="page">
    <h1>Progress</h1>

    <h2>Phase 1</h2>
    <hr>
    <div class="section">
        <p>To start the project, we begin by having brainstorming sessions to generate a variety of ideas, examining their practicality and feasibility. Following this, we undertake a careful analysis to prioritize our objectives and select the most promising concepts.</p>
    </div>

    <h2>Phase 2</h2>
    <hr>
    <div class="section">
        <p>Moving forward, we begin design and technical analysis. Here, we start on the creation of detailed designs, utilizing computer-aided design (CAD) tools to visualize our concepts. Additionally, we conduct simulations and perform calculations to ensure the viability and functionality of our designs. Additionally, we establish an initial project website to foster communication and transparency throughout the project's duration.</p>
    </div>

    <h2>Phase 3</h2>
    <hr>
    <div class="section">
        <p>Transitioning into the next phase, we focus on refining our engineering designs and constructing an initial prototype, often referred to as the alpha prototype. This stage entails a thorough examination of the design details, using the results of the previous phases to guide us. Once satisfied with the design, we proceed to fabricate the alpha prototype, which serves as a tangible representation of our concept for further evaluation and testing.</p>
    </div>

    <h2>Phase 4</h2>
    <hr>
    <div class="section">
        <p>Following the creation of the alpha prototype, our attention shifts towards rigorous testing to validate its functionality and performance under real-world conditions. We use the results of this testing to guide us in the next phase of creating a beta prototype.</p>
    </div>

    <h2>Phase 5</h2>
    <hr>
    <div class="section">
        <p>Upon completion of thorough testing and evaluation of the alpha prototype, we iterate on our design to develop an improved version, known as the beta prototype. Drawing insights from the testing phase, we implement refinements to enhance the design's performance and functionality.</p>
    </div>

    <h2>Phase 6</h2>
    <hr>
    <div class="section">
        <p>As we approach the end of the year long project, we conduct final adjustments based on the performance of the beta prototype. These refinements are aimed at fine-tuning the design to achieve optimal functionality and performance. Finally, we compile a comprehensive report detailing the design journey, testing methodologies, and outcomes achieved throughout the project lifecycle. The content of this website demonstrates the different phases that we completed from generating concept designs to our final prototype.</p>
    </div>
</div>

<style>
    h1, h2 {
        font-family: "Readex Pro Variable", sans-serif;
        font-weight: 500;
        margin-bottom: 0%;
    }
    #page {
        margin-top: 60px;
        margin-left: 15%;
        margin-right: 15%;
    }
    .section {
        margin-left: 5%;
        margin-right: 5%;
    }
    hr {
        border-top: 2px solid #194AA4;
        border-radius: 1px;
        padding: 0%;
    }
</style>
