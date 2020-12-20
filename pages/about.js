import React from 'react'

// functional component - arrow function
// when to use:
// 1. for small components
// 2. reusable component
// 3. presentional components, pattialy right, we can use HOOKS and specify state
// const About = () => {
//     const message = 'Hello world'
//     return (
//         <h1>Hello about - {message}</h1>
//     )
// }

// const About = () => {
//     const message = 'Hello world'
//     return React.createElement('h1', null, 'I am generating this with createElement')
// }

// functional component - normal function
// function About() {
//     return (
//         <h1>Hello about page</h1>
//     )
// }

class About extends React.Component {
    render() {
        return (
            <h1>Hello I am class component</h1>
        )
    }
}

export default About