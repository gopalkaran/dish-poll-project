import React, { useEffect, useState } from 'react';
import styles from '../css/Dish.module.css';

const Dish = ({match}) => {
    const [selectedDish, setSelectedDish] = useState({});
    const [shortlisted, setShortlisted] = useState(false);
    const [id, setId] = useState('');
    useEffect(() => {
        fetchItem();
    },[]);

    const fetchItem = () =>{
        const selectedDish = JSON.parse(localStorage.getItem("selectedDish"))
        console.log(selectedDish)
        setSelectedDish(selectedDish)
    }

    const voteYourFavDish = (id) => {
        const dishes = JSON.parse(localStorage.getItem("dishes"))
        const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
        console.log(loggedUser)
        console.log(id)
        const dishList = dishes.map(dish =>{
            if(id === dish.id){
                console.log(dish.votedBy)
                var votedBy =[]
                if(dish.votedBy){
                    votedBy = dish.votedBy
                    var present = false
                    for(let i = 0 ; i<votedBy.length; i++){
                        if(votedBy[i].username === loggedUser.username) present = true
                    }
                    if(!present) votedBy.push({username : loggedUser.username})
                }
                else{
                    votedBy.push({username : loggedUser.username})
                }
                return {...dish, voteCount: dish.voteCount+1, votedBy : votedBy }
            }
            else{
                return dish
            }
        })
        console.log(dishList)
        
        // setSelectedDish({...selectedDish, voteCount: selectedDish.voteCount+1, votedBy: votedBy})
        localStorage.setItem('dishes', JSON.stringify(dishList));
        
    }
    // const onClickHandler = (id) =>{
 
    //     setShortlisted(shortlisted => !shortlisted);
    //     console.log(id);
    //     setId(id);

    // }

    // useEffect(() => {
    //     const candidateList = JSON.parse(localStorage.getItem("candidateList"))
    //     console.log(candidateList);
    //     const modifiedList = candidateList.map(candidate => {
    //         return candidate.id === id ? {...candidate , shortlisted : shortlisted} : candidate;
    //     })
    //     console.log(modifiedList)
    //     localStorage.setItem('candidateList', JSON.stringify(modifiedList));
    // }, [shortlisted])

    return (
        <div className={styles.candidate}>
           <img src={selectedDish.image} alt={selectedDish.dishName} className={styles.candidateimg} />
           <div className={styles.candidatename}>{selectedDish.dishName}</div>
           <div className={styles.btngroup}>
               <button className={styles.btn} onClick={() => voteYourFavDish(selectedDish.id)}>Vote</button>
           </div>          
        </div>
    )
}

export default Dish