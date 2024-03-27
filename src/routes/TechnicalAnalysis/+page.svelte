<script>
    let strap = '/solidworksModelOfStrap.jpg';
    let box = '/solidworksModelOfBatteryPack.jpg';
    let stress = '/stressPlot.jpg';
    let displacement = '/displacementPlot.jpg';
</script>

<div id="page">
    <h1>Technical Analysis</h1>
    <hr/>
    <div class="paragraph">
        <p>For the final design we used a combination of concept design one and two. The final design will feature a strap with a single ultrasound transducer in the middle and two branches of muscle stim nodes. This strap will consist of two layers of a 15% rubber and 85% polyester strap with the wires hidden between the two layers to make the device more aesthetic.  This will all be powered and controlled by the equipment inside the battery pack, like that modeled in concept design three, and connected using a wire. The battery pack would contain two 9V batteries, an ultrasonic signal generator, and an Arduino board. The battery pack would feature two charging ports for the batteries as well as ports to connect the strap with the transducer and muscle stim nodes on it. The planned material for the battery pack housing is PPE plastic, which is more rigid and stronger than the plastic used for the unit in concept design three. However, during the testing phases, the prototypes will be 3D printed, preferably with ABS plastic. The back panel of the housing is detachable, with flanges on either side that friction fit into slots on the inside of the housing. SolidWorks models were created for both the strap and battery pack housing.</p>
        <img src={strap} alt="SolidWorks model of strap design">
        <img src={box} alt="SolidWorks model of battery pack">
        <p>A simulation was performed on the model of the battery pack in which a force of 90 lbf was applied over the top face of the housing. PPE was chosen as the material, which can be found in the SolidWorks materials library, and has a tensile strength of approximately 8,000 psi. The maximum stress value was 957.4 psi, so the housing does not fail from this load, and has a very high factor of safety for typical loads it will experience during use. The maximum displacement value was 0.013 in, so the current clearance of 0.2 in between the housing and electrical components is more than enough.</p>
        <img src={stress} alt="Stress plot for battery pack">
        <img src={displacement} alt="Displacement plot for battery pack">
        <p>The number of ultrasound transducers on the strap was reduced after further research found that ultrasonic physiotherapy is most effective when the ultrasonic signal is concentrated in one spot. The transducer would emit a signal with a frequency of 1MHz with an intensity ranging from 0.5-50 mW/cm2. This type of signal is referred to as low intensity pulsed ultrasound (LIPUS), which is becoming more common for therapeutic purposes.</p>
        <p>For the EMS portion of the device, we decided to move the muscles stimulation nodes from on the strap to branches off the side. The main reason we did this was so the user could easily place the nodes where they are most useful. To be the most effective the muscle stim nodes should be placed at either end of the muscle that is trying to be stimulated. When the stimulation nodes are stationary the user is only able to provide stimulation to a concentrated area instead of stimulating the entire muscle.</p>
        <p>To house the electrical components for this design, a housing was created, similar to the unit used in concept design 3. The electrical components of the design consist mainly of three components, the Arduino board, the ultrasonic signal generator for the BGS, and the electronic impulse generator for the EMS.</p>
    </div>

</div>


<style>
	h1{
	   font-family: "Readex Pro Variable", sans-serif;
	   font-weight: 500;
	   margin-bottom: 0%;
   }
   #page{
	margin-top: 65px;
	margin-left: 15%;
	margin-right: 15%;
    padding-bottom: 15%;
   }
   .paragraph{
	text-indent: 5%;
   }
   hr{
        border-top: 2px solid #194AA4;
        border-radius: 1px;
        padding: 0%;
    }
    .subsection{
        border-top: 2px solid #699BF7;
        border-radius: 1px;
        padding: 0%;
    }
</style>