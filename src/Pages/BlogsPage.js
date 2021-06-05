
import Title from '../Components/Title';
import allBlogs from '../Components/allBlogs';

const BlogsPage = () => {
    return (
        <div >
            <div className="b-title">
                <Title title={'Recent Blogs'} span={'Recent Blogs'} />
            </div>
            <div className="BlogsPage">
                {
                    allBlogs.map((blog)=>{
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                
                                <a href={blog.link} className="blog-link">
                                <img src={blog.image} alt=""/>
                                    {blog.title}
                                </a>
                            </div>
                        </div>
                    })
                }
            </div>
            
        </div>
    )
}
export default BlogsPage;