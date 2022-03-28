import React from 'react'
import StyleLayout from '/styles/StyleLayout.module.css'
import PostList from "./PostList.js";
function Home() {
  return (
      <div class="col-sm-9">
          <div className={StyleLayout.setting_mg}>
            <PostList />
          </div>
      </div>
    
  )
}

export default Home