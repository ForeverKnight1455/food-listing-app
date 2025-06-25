import { useFoodStore } from "../store/food";
import {useState} from "react";
import Toast from "./Toast";

type Food = { _id: string;name: string; price: number; image: string };

type foodstore = {
    foods: Food[];
    deleteFood(id:string): Promise<{success:boolean,message:string}>; 
    editFood({_id,name,price,image}:Food): Promise<{success:boolean,message:string}>;
}

function Card({_id,name,price,image}:Food){
    const [updatedFood, setUpdatedFood] = useState({
        _id,
        name,
        price,
        image
    });
    
    const { deleteFood,editFood } = useFoodStore() as foodstore;
    const [showToast,setShowtoast] = useState({show:false,message:""});
    const handleDeleteFood = async (id:any) => {
        const { success } = await deleteFood(id);
        if(!success){
            // alert("failed to delete, " + message)
            setShowtoast({show:true,message:"failed to delete"});
        }   
        else{
            setShowtoast({show:true,message:"deleted successfully"});
        }
    }
    const handleEditFood = async ({_id,name,price,image}:Food) =>{
        const { success } = await editFood({_id,name,price,image});
        if(!success){
            // alert("updation failed " + message);
            setShowtoast({show:true,message:"updation failed"});
        } 
        else{
            // alert("updation successful " + message);
            setShowtoast({show:true,message:"updated successfully"});
        }
    } 
    return(
        <>
        <div className="bg-base-100 w-96 shadow-sm border-2 rounded-3xl">
            <figure>
                <img src={image} alt={name} className="object-cover h-100 w-100 rounded-3xl"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <button
                        className="btn btn-secondary"
                        onClick={() => {
                            const dialog = document.getElementById(`edit_panel_${_id}`) as HTMLDialogElement | null;
                            dialog?.showModal();
                        }}
                    >edit</button>
                        <dialog id={`edit_panel_${_id}`} className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Update</h3>
                            <p className="py-4">Press ESC key to go back</p>
                            <form className="flex flex-col gap-2">
                                <input
                                    type="text"
                                    placeholder="name"
                                    className="p-3"
                                    value={updatedFood.name}
                                    onChange={e => setUpdatedFood(prev => ({ ...prev, name: e.target.value }))}
                                />
                                <input
                                    type="number"
                                    placeholder="price"
                                    className="p-3"
                                    value={updatedFood.price}
                                    onChange={e => setUpdatedFood(prev => ({ ...prev, price: Number(e.target.value) }))}
                                />
                                <input
                                    type="text"
                                    placeholder="image url"
                                    className="p-3"
                                    value={updatedFood.image}
                                    onChange={e => setUpdatedFood(prev => ({ ...prev, image: e.target.value }))}
                                />
                            </form>
                            <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <input type="button" value="ok" className="btn btn-accent self-center" onClick={()=>{handleEditFood(updatedFood)}}/>    
                                <button className="btn">Close</button>
                            </form>
                            </div>
                        </div>
                        </dialog>
                    <button className="btn btn-primary" onClick={()=>handleDeleteFood(_id)}>delete</button>
                    <Toast 
                        message={showToast.message} 
                        show={showToast.show} 
                        onClose={()=> setShowtoast({show:false,message:""})}
                    />
                </div>
            </div>
        </div>
        </>
    );
}

export default Card;