<script lang="ts">
    import TeamMember from './TeamMember.svelte';
  
    export let team;
  </script>
  
  <div class="team-list">
    {#each team as member (member.id)}
      <TeamMember name={member.name} role={member.role} bio={member.bio} imageSrc={member.imageSrc} />
    {/each}
  </div>
  
  <style>
    /* Add CSS styling here */
  </style>