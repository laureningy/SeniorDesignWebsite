<script>
  import TeamList from './TeamList.svelte';

  const isVercel = import.meta.env.VITE_VERCEL_ENV === 'true'; // Check if running on Vercel

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
      imageSrc: isVercel ? '/images/LaurenPhoto.jpg' : '../../public/images/LaurenPhoto.jpg',
    },
    {
      id: 3,
      name: 'Colin Keady',
      role: 'Mechanical Engineer',
      bio: '',
      imageSrc: isVercel ? '/images/ColinPhoto.jpeg' : '../../public/images/ColinPhoto.jpeg',
    },
    {
      id: 4,
      name: 'Michael Goodall',
      role: 'Mechanical Engineer',
      bio: '',
      imageSrc: isVercel ? '/images/MikePhoto.jpg' : '../../public/images/MikePhoto.jpg',
    },
    {
      id: 5,
      name: 'Nicholas Dahdah',
      role: 'Mechanical Engineer',
      bio: '',
      imageSrc: isVercel ? '/images/NickPhoto.jpg' : '../../public/images/NickPhoto.jpg',
    },
    {
      id: 6,
      name: 'Nicole Waletzki',
      role: 'Mechanical Engineer',
      bio: '',
      imageSrc: isVercel ? '/images/NicolePhoto.jpeg' : '../../public/images/NicolePhoto.jpeg',
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