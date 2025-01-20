import React, {useEffect, useState} from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] =useState(1);
    const pageSize= 12//blogs per page

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);


    useEffect(()=>{
        async function fetchBlogs() {
            let url =` http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

            // filter buy category
            if(selectedCategory){
              url+=`&category=${selectedCategory}`;

            }

            const responce = await fetch(url);
            const data = await responce.json();
            setBlogs(data);
        }

        fetchBlogs();
    },[currentPage, pageSize, selectedCategory])
    // page changing btn

    const handlePageChange = (pageNumber)=>{
      setCurrentPage(pageNumber);
    }

    const handleCategoryChange =(category)=>{
      setSelectedCategory(category);
      setCurrentPage(1);
      setActiveCategory(category);
    }

  return (
    <div>
      {/* category section  */}

        <div>
          <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
        </div>

         {/* blogCard section */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* blog cards component */}
          <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory ={selectedCategory} pageSize ={pageSize}/>
            {/* sidebar component */}
          <div>
           <SideBar/>
          </div>
        </div>

         {/* Pagination section  */}
        <div>
          <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize}/>
          </div>
    </div>
  )
}

export default BlogPage