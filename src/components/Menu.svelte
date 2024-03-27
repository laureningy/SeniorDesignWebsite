<div>
	<button><slot name="toggle" /></button>
	<menu><slot /></menu>
</div>

<style>
	div {
		transition: all 0.5s ease;
	}
	
  button {
    border: none;
    background-color: inherit;
    align-items: center;
    color: black;
    text-decoration: none;
  }

  menu {
    margin-block-start: 0;
    padding: 0;
    border: none;
    border-radius: 10%;
    background-color: white;
    visibility: hidden;
    opacity: 0;  
		right: 1%;
    overflow: hidden;
  }

  div:hover,
  div:focus,
  div:hover > menu,
  div:focus > menu {
    display: block;
    visibility: visible;
    opacity: 1;
  }
</style>