function Card({name,price,image}){
    if(!name || !price || !image) return null;
    return(
        <>
            <div className="card bg-base-100 w-96 shadow-sm border-2">
                <figure>
                    <img
                    src={image}
                    alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{name}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">delete</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;