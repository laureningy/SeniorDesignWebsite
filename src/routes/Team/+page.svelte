<script>
    import TeamList from './TeamList.svelte';
  
    let team = [
      {
        id: 1,
        name: 'Eshan Sharma',
        role: 'Software Engineer',
        bio: '',
        imageSrc: '',
      },
      {
        id: 2,
        name: 'Lauren Ingraham',
        role: 'Software Engineer',
        bio: '',
        imageSrc: 'src/lib/images/LaurenPhoto.jpg',
      },
      {
        id: 3,
        name: 'Colin Keady',
        role: 'Mechanical Engineer',
        bio: '',
        imageSrc: 'src/lib/images/ColinPhoto.jpeg',
      },
      {
        id: 4,
        name: 'Michael Goodall',
        role: 'Mechanical Engineer',
        bio: '',
        imageSrc: 'src/lib/images/MikePhoto.jpg',
      },
      {
        id: 5,
        name: 'Nicholas Dahdah',
        role: 'Mechanical Engineer',
        bio: '',
        imageSrc: 'src/lib/images/NickPhoto.jpg',
      },
      {
        id: 6,
        name: 'Nicole Waletzki',
        role: 'Mechanical Engineer',
        bio: '',
        imageSrc: 'src/lib/images/NicolePhoto.jpeg',
      },
    ];
  </script>
  
  <main>
    <h1>Meet the Team</h1>
    <TeamList {team} />
  </main>
  
  <style>
     h1{
        font-family: 'Oswald Variable', sans-serif;
        font-weight: 500;
    }
  </style>