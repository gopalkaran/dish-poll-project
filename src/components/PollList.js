import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import styles from '../css/Polllist.module.css'

const PollList = () => {

    const [dishList, setDishList] = useState([]);


    useEffect(() => {
        fetchItems();
    }, [])
    
    const fetchItems =async () =>{
        const dishes = JSON.parse(localStorage.getItem("dishes"))
        // setDishList(dishes);

        console.log(dishes)
        dishes.sort((a,b)=> (a.voteCount < b.voteCount ? 1 : -1))
        console.log(dishes)
        const ar2 = dishes.slice(1, dishes.length + 1);
        const ar3 = dishes.slice(2, dishes.length + 1);
        console.log(ar2)
        console.log(ar3)
        const maxElementFirst = dishes.reduce(function (p, v) {
            return ( p.voteCount > v.voteCount ? p : v )
        })
        console.log(maxElementFirst)  
        
        const maxElementSecond = ar2.reduce(function (p, v) {
            return ( p.voteCount > v.voteCount ? p : v )
        })
        console.log(maxElementSecond)  

        const maxElementThird = ar3.reduce(function (p, v) {
            return ( p.voteCount > v.voteCount ? p : v )
        })
        console.log(maxElementThird)  

        const modifiedDishes = dishes.map(dish => {
            if(dish.voteCount === maxElementFirst.voteCount) return {...dish, pointsReceived : 30}
            if(dish.voteCount === maxElementSecond.voteCount) return {...dish, pointsReceived : 20}
            if(dish.voteCount === maxElementSecond.voteCount) return {...dish, pointsReceived : 10}
            else return dish

        })
        console.log(modifiedDishes)
        setDishList(modifiedDishes)
    }


    const openIndividualDish = (id) => {
        const selectedDish = dishList.find(dish => {
            return dish.id === id ? dish : null
        })
        // console.log(selectedDish)
        localStorage.setItem('selectedDish', JSON.stringify(selectedDish));
    }


    return (
        <div className={styles.listView}>
            {
                dishList.map(dish => {
                       return(<Link to={`/${dish.id}`} key={dish.id} className={styles.dish} onClick={() => openIndividualDish(dish.id)}>
                            <img src={dish.image} alt={dish.name} className={styles.dishimg}></img>
                            <div className={styles.dishname}>{dish.dishName}</div>
                        </Link>)
                })
            }
        </div>
    )
}

export default PollList
