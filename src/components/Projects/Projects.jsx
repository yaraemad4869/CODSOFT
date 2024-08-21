import React from 'react'
import ECommerce from "../../assets/E-Commerce Project.png"
import Movies from "../../assets/Movies Project.png"
import Todo from "../../assets/Todo Project.png"
const Projects = () => {
    return (
        <section id='projects'>
            <h1 className='capitalize projects-heading'>projects</h1>
            <div className='flex-row-sm'>

                <div className='col-12 col-md-6 col-lg-4 project'>
                    <div className='space'>
                        <img className='project-img' src={ECommerce} alt="E-Commerce Project" />
                        <h3>E-Commerce Project</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fuga cumque quaerat nisi id distinctio beatae numquam tenetur. Quis, sunt sit? Vitae ipsum quam consequuntur ipsam voluptate sit dolores rem.</p>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 project'>
                    <div className='space'>
                        <img className='project-img' src={Movies} alt="Movies Project" />
                        <h3>Movies Project</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius expedita itaque dolorum enim beatae ipsum sit possimus minima magni. Neque, suscipit eaque aut quaerat dignissimos beatae voluptas ea natus. Distinctio!</p>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 project'>
                    <div className='space'>
                        <img className='project-img' src={Todo} alt="Todo Project" />
                        <h3>Todo Project</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo quos aperiam atque deserunt, sequi at mollitia ab voluptates incidunt modi cupiditate molestiae corporis a? Repellendus ratione non magni vero voluptatum.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
