import React from 'react';
import styles from './Home.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
    const pizzas = [
        {
            name: 'Cheese Pizza',
            slug: 'cheese-pizza',
            toppings: ['mozzarella cheese'],
            image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80',
            price: 9.99, 
        },
        {
            name: 'Meat Feast',
            slug: 'meat-feast',
            toppings: ['ham', 'bacon', 'pepperoni', 'sausage'],
            image: 'https://images.unsplash.com/photo-1590083745251-4fdb0b285c6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=478&q=80',
            price: 15.99, 
        },
        {
            name: 'Supreme',
            slug: 'supreme',
            toppings: ['olives', 'pineapple', 'ham', 'pepperoni'],
            image: 'https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
            price: 12.99, 
        },
        {
            name: 'Pepperoni Pizza',
            slug: 'pepperoni-pizza',
            toppings: ['pepperoni'],
            image: 'https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            price: 14.99, 
        },
        {
            name: 'Smoked Sausage Pizza',
            slug: 'smoked-sausage-pizza',
            toppings: ['sausage', 'tomato', 'olive'],
            image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            price: 9.99, 
        },
        {
            name: 'Egg & Sausage Pizza',
            slug: 'egg-and-sausage-pizza',
            toppings: ['sausage', 'egg'],
            image: 'https://images.unsplash.com/photo-1605591099585-087b3d54cd45?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=742&q=80',
            price: 13.99, 
        },
    ]

    const [keyword, setKeyword] = useState('')

    const filteredPizzas = pizzas.filter(
      pizza => 
      pizza.name.toLowerCase().includes(keyword) || pizza.toppings.includes(keyword))

  
    const onInputChange = (e) =>{
      e.preventDefault();
  
      setKeyword(e.target.value.toLowerCase());
    }

    return (
        <div>
            <div className={styles.searchWrapper}>
            <input placeholder="Search for pizza or toppings..." className={styles.searchBar} onChange={onInputChange} />
            </div>
            <div className={styles.pizzaContainer}>
                {filteredPizzas < 1 ? 
                (
                    <div className={styles.nopeContainer}>There is no pizza or topping with that.</div>
                ) 
                : 
                (
                    filteredPizzas.map(pizza => {
                        return(
                        <div className={styles.pizzaItem}>
                            <Link href={`/${pizza.slug}`}><a className={styles.pizzaImageBox}>
                            <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} />
                            </a></Link>
                            <div className={styles.pizzaText}>
                            <p className={styles.pizzaHeader}>{pizza.name}</p>
                            <p className={styles.pizzaToppings}>{pizza.toppings.map( topping => topping).join(', ')}</p>
                            <p className={styles.pizzaPrice}>€{pizza.price}</p>
                            </div>
                            </div>
                            )
                    })
                )}
            </div>
        </div>
    )
}
