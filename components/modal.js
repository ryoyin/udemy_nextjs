const Modal = () => {

    let closeButton = null

    const submitModal = () => {
        alert('Submitting Modal')
        closeButton.click()
    }

    return (
        <>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              Create Movie
            </button>
            <div className="modal" tabIndex="-1" role="dialog" id="exampleModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={submitModal} type="button" className="btn btn-primary">Save changes</button>
                            <button ref={ele => closeButton = ele} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal