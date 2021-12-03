import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import styles from '../css/Dashboard.module.css'

const DishList = () => {

    const [dishList, setDishList] = useState([]);

    useEffect(() => {
        fetchItems();
    }, [])
    
    const fetchItems =async () =>{
        const dishes = JSON.parse(localStorage.getItem("dishes"))
        setDishList(dishes);
    }



    const openIndividualDish = (id) => {
        const selectedDish = dishList.find(dish => {
            return dish.id === id ? dish : null
        })
        // console.log(selectedDish)
        localStorage.setItem('selectedDish', JSON.stringify(selectedDish));
    }

    return (
        <div>

           <div className={styles.gridlist}>
            {
                dishList.map(dish => {
                    return(
                        <Link to={`/${dish.id}`} key={dish.id} className={styles.candidate} onClick={() => openIndividualDish(dish.id)}>
                            <img src={dish.image} alt={dish.name} className={styles.candidateimg}></img>
                            <div className={styles.candidatename}>{dish.dishName}</div>
                        </Link>
                    ) 
                })
            }
           </div>
            
        </div>
    )
}

export default DishList
