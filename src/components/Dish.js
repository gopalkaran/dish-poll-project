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
                var voteCount = 0
                if(dish.votedBy){
                    votedBy = dish.votedBy
                    voteCount = dish.voteCount
                    var present = false
                    for(let i = 0 ; i<votedBy.length; i++){
                        if(votedBy[i].username === loggedUser.username) present = true
                    }
                    if(!present) {
                        votedBy.push({username : loggedUser.username})
                        voteCount = voteCount + 1
                    }
                }
                else{
                    votedBy.push({username : loggedUser.username})
                    voteCount = voteCount + 1
                }
                return {...dish, voteCount: voteCount, votedBy : votedBy }
            }
            else{
                return dish
            }
        })
        console.log(dishList)
        
        // setSelectedDish({...selectedDish, voteCount: selectedDish.voteCount+1, votedBy: votedBy})
        localStorage.setItem('dishes', JSON.stringify(dishList));
        
    }
    const dislikeYourFavDish = (id) => {
        const dishes = JSON.parse(localStorage.getItem("dishes"))
        const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
        console.log(loggedUser)
        console.log(id)
        const dishList = dishes.map(dish =>{
            if(id === dish.id){
                console.log(dish.votedBy)
                var votedBy =[]
                var voteCount = 0
                if(dish.votedBy){
                    votedBy = dish.votedBy
                    voteCount= dish.voteCount
                    // var present = false
                    for(let i = 0 ; i<votedBy.length; i++){
                        if(votedBy[i].username === loggedUser.username) {
                            // present = true
                            votedBy.splice(i,1)
                            console.log(votedBy)
                            voteCount = voteCount - 1
                        }
                    }
                    // if(present) votedBy.push({username : loggedUser.username})
                }
                // else{
                //     votedBy.push({username : loggedUser.username})
                // }
                return {...dish, voteCount: voteCount, votedBy : votedBy }
            }
            else{
                return dish
            }
        })
        console.log(dishList)
        
        // setSelectedDish({...selectedDish, voteCount: selectedDish.voteCount+1, votedBy: votedBy})
        localStorage.setItem('dishes', JSON.stringify(dishList));
        
    }

    return (
        <div className={styles.candidate}>
           <img src={selectedDish.image} alt={selectedDish.dishName} className={styles.candidateimg} />
           <div className={styles.candidatename}>{selectedDish.dishName}</div>
           <div className={styles.btngroup}>
               <button className={styles.btn} onClick={() => voteYourFavDish(selectedDish.id)}>Like</button>
               <button className={styles.btn} onClick={() => dislikeYourFavDish(selectedDish.id)}>Dislike</button>
           </div>          
        </div>
    )
}

export default Dish