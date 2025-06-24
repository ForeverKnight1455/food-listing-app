import '../App.css'
import {useEffect,useState,useRef} from 'react'
import  { useFoodStore } from '../store/food'
import Card from '../components/Card'

type Food = {
    _id: string;
    name: string;
    price: number;
    image: string;
};

type FoodStore = {
  createFood: (food: Food) => void;
  fetchFood: () => Promise<{success:boolean,message:string,length:number}>;
  foods: Food[];
};

const Homepage = () => {
  const [empty,setEmpty] =useState<boolean>(true);
  const {fetchFood,foods} = useFoodStore() as FoodStore;
  useEffect(() => {
    const fetchData = async () => {
      const { success, length } = await fetchFood();
      if (success && length > 0) {
        setEmpty(false);
      } else {
        setEmpty(true);
      }
    };
    fetchData();
  }, [fetchFood,foods]);

  return (
    <>
      <div className='p-10 bg-grey border-2 rounded-xl flex-wrap flex gap-2 h-11/12 w-full justify-center items-center'>
        {<h1 className='font-bold '>{ empty ? "No products available" : "" }</h1>}
        {foods.map((food: Food,index) => (
          <Card key={index} _id={food._id} name={food.name} price={food.price} image={food.image} />
        ))}
      </div>
    </> 
  )
}

export default Homepage
