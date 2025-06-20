import '../App.css'
import {useEffect} from 'react'
import  { useFoodStore } from '../store/food'
import Card from '../components/Card'

type CardProps = {
    id: string;
    name: string;
    price: number;
    image: string;
};

type FoodStore = {
  createFood: (food: CardProps) => void;
  fetchFood: () => void;
  foods: CardProps[];
};

const Homepage = () => {
  const {fetchFood,foods} = useFoodStore() as FoodStore;
  useEffect(()=>{
    fetchFood();
  },[fetchFood,foods]);

  return (
    <>
      <div className='p-10 bg-grey border-2 rounded-xl flex-wrap flex gap-2 h-11/12 w-full justify-center items-center'>
        {/* {<h1 className='font-bold '>{empty?"No products available":""}</h1>} */}
        {foods.map((food: CardProps) => (
          <Card key={food.id} {...food} />
        ))}
      </div>
    </> 
  )
}

export default Homepage
