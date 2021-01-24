import Modal from './modal'

const renderCategories = (categories) => {
    return (
        <div className="list-group">
            {
                categories.map((category, idx) => (
                        <a key={idx} href="#" className="list-group-item">{category.name}</a>
                    )
                )
            }
            
            {/* <a href="#" className="list-group-item">Category 2</a>
            <a href="#" className="list-group-item">Category 3</a> */}
        </div>  
    )
}

const SideMnu = (props) => {
    const {appName, categories} = props
    return (
        <div>
            <Modal />
            <h1 className="my-4">{appName}</h1>
            {renderCategories(categories)}
        </div>
    )
}

export default SideMnu

