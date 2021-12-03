import React, {useState, useEffect} from 'react'

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


        // dishes.map(dish => {
            
        // })
    }


    return (
        <div>
            gopal
        </div>
    )
}

export default PollList
