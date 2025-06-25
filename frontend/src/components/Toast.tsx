type toast = {
    message: string;
    show: boolean;
    onClose:() => void;
}

function Toast({message,show,onClose}:toast){
    if (!show) return null

    setTimeout(() => {
        onClose();
    }, 2000);
    
    return(
    <>
        <div className="toast toast-bottom toast-end">
            <div className="alert alert-success">
                <span>{message}</span>
            </div>
        </div>
    </>
    )
}

export default Toast;