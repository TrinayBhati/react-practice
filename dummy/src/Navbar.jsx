const Navbar = ()=>{
	return(
		<nav className="navbar">
			<h1>Bloggy</h1>
			<div classname="links">
				<a href="/">Home</a>
				<a href="/create" style={{
					color:"white",
				}}>New Blog</a>
			</div>
		</nav>
		);
}
export default Navbar;