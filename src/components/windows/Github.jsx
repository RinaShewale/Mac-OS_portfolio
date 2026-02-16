import React from 'react'
import githubData from "../../assets/github.json"
import "./github.scss"
import Macwindows from './Macwindows'


const GithubCards=({data= {id:1, image:"",title:"",tags:[],description:"",repoLink:"",demoLink:""}})=>{
  console.log(githubData);


    return <div className="card">
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p className='description'>{data.description}</p>

        <div className="tags">
            {data.tags.map(tag=>{
                return <p  key={tag} className='tag'>{tag}</p>
            })}
        </div>

        <div className="url">
            <a href={data.repoLink}>Repository</a>
           {data.demoLink && <a href={data.demoLink}> Demo link</a>}
        </div>
    </div>


}

const Github = () => {
      console.log("Github component loaded");
  return (
   <Macwindows>
      <div className="cards">
        {githubData.map(project=>{
            return <GithubCards key={project.id}  data={project} />
        })}
      </div>
   </Macwindows>
  )
}

export default Github
