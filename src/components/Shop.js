import React ,  {useState}from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
import Card from './Card';
import Nav from './Nav';
import TotalCard from './TotalCard';
import itemData from '../itemData';

function Shop(){

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [items, setItems] = useState(itemData);

    function handleClick(){
        setModalIsOpen(true)
    }

    function closeModal(){
        setModalIsOpen(false)
    }

    function increment(event){
        const update = items.map(prevState => {
                if(prevState.name === event.target.name){
                        prevState.value = prevState.value +1;                    
                }
                return prevState;
            })
        setItems(update)
    }

    function decrement(event){
        const update = items.map(prevState => {
                if(prevState.name === event.target.name){
                    if(prevState.value > 0 ){
                        prevState.value = prevState.value -1;               
                    }        
                }
                return prevState;
            })
        setItems(update)
    }


    function calculateTotal(){
        let total=0;

        items.forEach(item=> {
            total = total + item.value*item.price;
        })
        return total;
    }
    function displayTotal(){
        const products = [];
        items.forEach(item => {
            if(item.value > 0) {
                products.push(item);
            }
        })
        return products;
    }

   
    const cards = items.map(item => (<Card name={item.name} key={items.indexOf(item)} price= {item.price} value= {item.value} link={item.link} onClick={handleClick} increment={increment} decrement={decrement}/>))
    const totalCard = displayTotal().map(item=> (<TotalCard key= {displayTotal().indexOf(item)}name={item.name} price={item.price} value= {item.value} src={item.link}/>))
    return (
        <div id="container">
          <Nav/>
          <div className="products" >
                <div className="container">  
                    {cards}
                </div> 
                {modalIsOpen && <Modal displayTotal= {totalCard} total={calculateTotal()} />}
                {modalIsOpen && <Backdrop onClick={closeModal}/>}
          </div>
          <footer></footer>
         </div>
       
    )
}

export default Shop;