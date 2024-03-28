<script>
  // Your existing script content (if any)
</script>

<div class="menu-container">
	<button><slot name="toggle" /></button>
	<div class="dropdown-content">
		<slot />
	</div>
</div>

<style>
.menu-container {
	position: relative;
	display: inline-block;
}

button {
	border: none;
	background-color: inherit;
	font-size: 16px;
}

.dropdown-content {
	display: none;
	position: absolute;
	background-color: #f9f9f9;
	min-width: 160px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	padding: 12px 16px;
	z-index: 1;
}

.menu-container:hover .dropdown-content {
	display: block;
}

.menu-container:hover button {
	background-color: #f1f1f1;
}

/* Ensuring font uniformity */
button, .dropdown-content {
	font-family: inherit; /* Adjust this line to match your desired font, or use 'inherit' to use the parent's font */
	font-size: 16px; /* Adjust as needed */
}

/* Adjust dropdown content box */
.dropdown-content {
    /* Other styles remain unchanged */
    box-sizing: border-box; /* This ensures padding is included in the width */
}

</style>
