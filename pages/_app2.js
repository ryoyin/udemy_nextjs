import App from 'next/app'

class MovieApp extends App {

    render() {
        const {Component} = this.props

        return(
            <Component />
        )
    }

}

export default MovieApp