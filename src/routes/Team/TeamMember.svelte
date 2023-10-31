<script>
    export let name;
    export let role;
    export let bio;
    export let imageSrc;
  </script>
  
  <div class="team-member">
    <div class="team-member-image">
      <img src={imageSrc} alt={name} />
    </div>
    <div class="team-member-info">
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{bio}</p>
    </div>
  </div>
  
  <style>
    /* Add CSS styling here */
    .team-member {
    display: flex; 
    align-items: center;
    margin: 1rem 0;
  }

  .team-member-image {
    flex: 0 0 30%; 
    padding: 0 1rem; 
  }

  .team-member-image img {
    max-width: 100%;
    height: auto;
  }

  .team-member-info {
    flex: 1; 
  }
  </style>