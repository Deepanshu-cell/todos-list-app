import React from 'react'
export const About = () => {
    return (
        <div>
            <h2>This is About page</h2>
            <p>The definition is a simple one. It's a list of tasks you need to complete, or things that you want to do. Most typically, they're organised in order of priority. Traditionally, they're written on a piece of paper or post it notes and acts as a memory aid. Quidem, blanditiis molestias ut, commodi error nam nostrum temporibus minima et consectetur quod maiores!</p>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/1400x400/?macbooks,laptops
            " className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Welcome to MyTodosList.com</h2>
                            <p>web development , news , Technology</p>
                            <button type="button" className="btn btn-outline-light">Web development</button>
                            <button type="button" className="btn btn-outline-light">Softwares</button>
                            <button type="button" className="btn btn-outline-light">Technology</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/1400x400/?technology,Softwares
            " className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Technology &amp; Softwares</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/1400x400/?code,programmers
            " className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Coders &amp; programmers</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <p>The definition is a simple one. It's a list of tasks you need to complete, or things that you want to do. Most typically, they're organised in order of priority. Traditionally, they're written on a piece of paper or post it notes and acts as a memory aid. Quidem, blanditiis molestias ut, commodi error nam nostrum temporibus minima et consectetur quod maiores!</p>
                <p>What is a todo list and how can it help in business and daily life?

                    Do any of the following seem familiar?

                    You often feel completely overwhelmed with the amount of work you've got to do?
                    You sometimes forget to do things that are important
                    People have to chase you to get things done
                    You find it a struggle to keep to deadlines
                    Don't think you're unusual because there are thousands of people who struggle with the same every day, not just in the workplace but in their personal life too. Luckily, there is something very simple you can do to keep your life and work more organised.</p>
            </div>

        </div>


    )
}
