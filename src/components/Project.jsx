function Project() {
    return(
        <div className='projectCard'>
            <h1>{projectData.title}</h1>
            <a>Deployed</a>
            <a>Github</a>
            <img src={projectData.image} alt={projectData.title}/>
        </div>
    )
}

export default Project;