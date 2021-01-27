const MovieCreateForm = () => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/ >
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="somecheck" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
        </form>
    )
}

export default MovieCreateForm