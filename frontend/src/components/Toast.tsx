function Toast({message,show,onClose}){
    if (!show) return null
    return(
    <>
        <div className="toast toast-bottom toast-end">
            <div className="alert alert-success">
                <span>{message}</span>
                <button className="btn btn-sm btn-ghost" onClick={onClose}>X</button>
            </div>
        </div>
    </>
    )
}

export default Toast;