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

class Roy extends React.Component {
    static async getInitialProps(ctx) {
        const res = await fetch('https://api.github.com/repos/vercel/next.js')
        const stars = await res.json()
        console.log(stars)
        return {stars: stars}       
    }

    renderStar(stars) {        
        return (
            <div>{stars.owner.login}</div>
        )
    }

    render() {
        return (
            <div className="container">
                <h1>Roy Testing Page</h1>
                <div>Next stars: {this.renderStar(this.props.stars)}</div>
            </div>
        )
    }
}

export default Roy