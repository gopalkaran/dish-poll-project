import React, {useEffect, useState} from 'react'
import styles from '../css/Dashboard.module.css'
import { Link } from 'react-router-dom';


const Dashboard = () => {
    const [dishList, setDishList] = useState([]);
    const [selectionList, setSelectionList] = useState([]);
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

export default Dashboard
