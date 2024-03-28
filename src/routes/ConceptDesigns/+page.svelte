<script>
  let sketch1 = '/Sketch1.jpg';
  let sketch2 = '/Sketch2.jpg';
  let sketch3 = '/Sketch3.jpg';

  let criteria = [
      {
          name: 'Cost',
          weight: '10%',
          ratings: [2, 4, 5, 5],
          weightedScores: [0.2, 0.4, 0.5, 0.5]
      },
      {
          name: 'Provides Muscle Stimulation',
          weight: '20%',
          ratings: [5, 5, 5, 5],
          weightedScores: [1, 1, 1, 1]
      },
      {
          name: 'Provides Bone Growth Stimulation',
          weight: '20%',
          ratings: [5, 5, 5, 5],
          weightedScores: [1, 1, 1, 1]
      },
      {
          name: 'Comfortability',
          weight: '10%',
          ratings: [3, 5, 3, 3],
          weightedScores: [0.3, 0.5, 0.3, 0.3]
      },
      {
          name: 'Safety',
          weight: '15%',
          ratings: [5, 5, 5, 5],
          weightedScores: [0.75, 0.75, 0.75, 0.75]
      },
      {
          name: 'Ease of Use',
          weight: '10%',
          ratings: [0, 5, 4, 3],
          weightedScores: [0, 0.5, 0.3, 0.3]
      },
      {
          name: 'Portability',
          weight: '10%',
          ratings: [0, 5, 5, 5],
          weightedScores: [0, 0.5, 0.5, 0.5]
      },
      {
          name: 'Adaptability',
          weight: '5%',
          ratings: [4, 5, 5, 5],
          weightedScores: [0.2, 0.35, 0.25, 0.25]
      }
  ];
  let totalScores = ['3.45', '4.90', '4.70', '4.60'];
  let ranks = ['4', '1', '2', '3'];
  let continues = ['No', 'Yes', 'Yes', 'Yes'];
</script>

<article>
  <h1>Concept Designs</h1>
  <!-- Concept Design 1 Section -->
  <section>
      <h2>Concept Design 1</h2>
      <p> The first concept design created is shown in Figure 1. This design includes a section of an elastic material that has the nodes for muscle stimulation as well as the bone growth transducers. At either end of the elastic strap are sections of velcro that would wrap around the body part that the patient needs treatment on. The strap would be 6” wide, the elastic section would be 12” long with 3” of velcro on either end. The elastic would be able to stretch to get around any body part and the velcro would hold in place. This design would also have the ability to add a 12” extender strap if the original length of the strap is not long enough. There are two wires coming out of the strap; one wire is for the muscle stim nodes the other is for the bone growth transducers. Each individual stim node and bone growth transducer will be connected within the strap to reduce the number of wires coming out of the strap. The two wires will be connected to a box that will house the battery pack, signal generator, and circuit board to receive information from the mobile app. The battery pack will power both stim nodes and the bone growth transducers. The signal generator is what is going to send the ultrasound signal to the bone growth transducers. The mobile app will control the settings and modes of the stim so there are not any physical controls on the box. The only exterior features of the box are an on/off switch as well as a charging port.  </p>
      <figure>
          <img src={sketch1} alt="Concept Design 1" />
          <figcaption>Figure 1: Concept Design 1</figcaption>
      </figure>
  </section>
  <!-- Concept Design 2 Section -->
  <section>
      <h2>Concept Design 2</h2>
      <p>The second concept design is shown in Figure 2. This design shares a lot of similar components to concept design 1, the main difference is in how it is attached to the patient. This design features a patch that is 6”x 6” that would stick on to the patients. There is a strip of replaceable double-sided tape on the outside of the patch that would keep the patch in place when the device is providing muscle or bone stimming. The product features a similar box as concept design1 however it is attached to the back of the patch. This removes the need for exterior wires all together. The box still features the battery pack, signal generator, and mobile phone receiver.  </p>
      <figure>
          <img src={sketch2} alt="Concept Design 2" />
          <figcaption>Figure 2: Concept Design 2</figcaption>
      </figure>
  </section>
  <!-- Concept Design 3 Section -->
  <section>
      <h2>Concept Design 3</h2>
      <p>The third concept design, shown in Figure 3, is slightly different that the first two. One of the biggest differences is that the nodes and transducers are separated, and each have their own wire. The box that the nodes and transducers are connected to is the same as the first two designs where it has the battery, signal generator, and mobile phone receiver. The muscle stims and bone growth transducers will be connected to the box using individual wires. The muscled stim nodes and bone growth transducers will be attached to the patient using a sticky pad that way they could be placed in optimized locations for maximum effectiveness. </p>
      <figure>
          <img src={sketch3} alt="Concept Design 3" />
          <figcaption>Figure 3: Concept Design 3</figcaption>
      </figure>
  </section>
  <!-- Design Selection Section -->
  <section>
      <h2>Design Selection</h2>
      <p>To compare our three concept designs it was necessary to evaluate how each of our designs met our selection criteria. Our selection process would also see how these products compare to other products that are on the market. Our results for concept selection are shown in Table 1. After completing the concept selection matrix, we decided to continue with concept 1. We found that all three designs will provide a similar level of BGS and EMS, but concept 1 would be the most comfortable and easy to use out of the three designs. The soft elastic material would not bother the patients if it had to be used for a long period of time. The sticky tape of the other two designs would be uncomfortable to remove when done and would also require more maintenance to replace the tape. This initial decision is based on limited testing, in phase II we will continue to do more extensive testing and modeling on all three concept designs to make the most effective product. </p>
      <table>
          <thead>
              <tr>
                  <th>Selection Criteria</th>
                  <th>Weight</th>
                  <th colspan="2">A<br>Reference</th>
                  <th colspan="2">B<br>Design 1</th>
                  <th colspan="2">C<br>Design 2</th>
                  <th colspan="2">D<br>Design 3</th>
              </tr>
          </thead>
          <tbody>
              {#each criteria as crit}
              <tr>
                  <td>{crit.name}</td>
                  <td>{crit.weight}</td>
                  <td>{crit.ratings[0]}</td>
                  <td>{crit.weightedScores[0]}</td>
                  <td>{crit.ratings[1]}</td>
                  <td>{crit.weightedScores[1]}</td>
                  <td>{crit.ratings[2]}</td>
                  <td>{crit.weightedScores[2]}</td>
                  <td>{crit.ratings[3]}</td>
                  <td>{crit.weightedScores[3]}</td>
              </tr>
              {/each}
              <tr>
                  <td colspan="2">Total Score</td>
                  <td colspan="2">{totalScores[0]}</td>
                  <td colspan="2">{totalScores[1]}</td>
                  <td colspan="2">{totalScores[2]}</td>
                  <td colspan="2">{totalScores[3]}</td>
              </tr>
              <tr>
                  <td colspan="2">Rank</td>
                  <td colspan="2">{ranks[0]}</td>
                  <td colspan="2">{ranks[1]}</td>
                  <td colspan="2">{ranks[2]}</td>
                  <td colspan="2">{ranks[3]}</td>
              </tr>
              <tr>
                  <td colspan="2">Continue?</td>
                  <td colspan="2">{continues[0]}</td>
                  <td colspan="2">{continues[1]}</td>
                  <td colspan="2">{continues[2]}</td>
                  <td colspan="2">{continues[3]}</td>
              </tr>
          </tbody>
      </table>
  </section>
</article>

<style>
  article {
      /* Styles for the article */
  }
  section {
      /* Styles for each section */
  }
  h1 {
      margin-top: 75px; /* Adjust the value as needed */
  }
  h2, figure, p {
      margin-bottom: 20px; /* Space below each section element */
  }
  img {
      max-width: 100%; /* Responsive images */
      height: auto;
  }
  table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px; /* Space above the table */
  }
  th, td {
      border: 1px solid black;
      padding: 8px;
      text-align: center;
  }
  thead th {
      background-color: #000;
      color: #fff;
  }
</style>
