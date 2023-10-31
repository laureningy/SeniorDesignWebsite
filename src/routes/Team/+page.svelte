<script>
    import TeamList from './TeamList.svelte';
  
    let team = [
      {
        id: 1,
        name: 'Eshan Sharma',
        role: '',
        bio: '',
        imageSrc: '',
      },
      {
        id: 2,
        name: 'Lauren Ingraham',
        role: '',
        bio: '',
        imageSrc: '',
      },
      {
        id: 3,
        name: 'Colin Keady',
        role: '',
        bio: '',
        imageSrc: '',
      },
      {
        id: 4,
        name: 'Michael Goodall',
        role: '',
        bio: '',
        imageSrc: '',
      },
      {
        id: 5,
        name: 'Nicholas Dahdah',
        role: '',
        bio: '',
        imageSrc: '',
      },
      {
        id: 6,
        name: 'Nicole Waletzki',
        role: '',
        bio: '',
        imageSrc: '',
      },
    ];
  </script>
  
  <main>
    <h1>Meet the Team</h1>
    <TeamList {team} />
  </main>
  
  <style>
    /* CSS styling here */
  </style>