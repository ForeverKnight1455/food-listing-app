import '../App.css'
import {useEffect} from 'react'
import  { useFoodStore } from '../store/food'
import Card from '../components/Card'

type Food = { name: string; price: number; image: string };

type FoodStore = {
  createFood: (food: Food) => void;
  fetchFood: () => void;
  foods: Food[];
};

const Homepage = () => {
  const {fetchFood,foods} = useFoodStore() as FoodStore;
  useEffect(()=>{
    fetchFood();
    console.log(foods)
  },[fetchFood]);

  return (
    <>  
      <div className='p-10 bg-grey border-2 rounded-xl flex h-11/12 w-full gap-5'>
        {foods.map((food) => (
          <Card key={food.name} name={food.name} price={food.price} image={food.image}/>
        ))}
      </div>
    </> 
  )
}

export default Homepage
