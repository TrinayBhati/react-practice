import {useState} from 'react';	
import BlogList from './BlogList';

const Home =()=>{

	const[blogs, setBlogs] = useState([
		{ title: 'My new website', body: 'lorem ipsum...', author: 'Putin', id: 1 },
	    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'SatoshiNakamoto', id: 2 },
    	{ title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Shakespere', id: 3 }
		]);
	const handleDelete = (id) => {
		const newBlogs = blogs.filter(blog => blog.id !== id);
		setBlogs(newBlogs)
	};

	return(
		<div className="home">
			<BlogList blogs={blogs} title="ALL BLOGS!"handleDelete={handleDelete} />
			<BlogList blogs={blogs.filter((blog)=>blog.author == "SatoshiNakamoto")} title="Nakamoto's Blogs" handleDelete={handleDelete}/>
			<BlogList blogs={blogs.filter((blog)=>blog.author == "Shakespere")} title="Shakespere's Blogs" handleDelete={handleDelete}/>
		</div>
		)
}
export default Home;