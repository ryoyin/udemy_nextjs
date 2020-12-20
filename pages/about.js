import React from 'react'

// functional component - arrow function
const About = () => {
    const message = 'Hello world'
    return (
        <h1>Hello about - {message}</h1>
    )
}

// const About = () => {
//     const message = 'Hello world'
//     return React.createElement('h1', null, 'I am generating this with createElement')
// }

// unfunctional component - normal function
// function About() {
//     return (
//         <h1>Hello about page</h1>
//     )
// }



export default About