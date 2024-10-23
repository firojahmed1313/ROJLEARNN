import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Cartitemloder from './Cartitemloder';

const Carts = ({ cartItems }) => {
    console.log(cartItems);
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    //cartItems = []
    console.log(total);
    return (
        <>


            <section>

                <div className="mx-auto w-fit px-4 py-8 sm:px-6 sm:py-12 lg:px-8 text-white ">
                    {(cartItems.length == 0) ? <h2 className="text-xl font-bold  sm:text-3xl">Your Cart is Empty</h2> :
                        <div className="mx-auto ">
                            <header className="text-center">
                                <h1 className="text-xl font-bold  sm:text-3xl">Your Cart</h1>
                            </header>

                            <div className="mt-8">
                                
                                    
                                    <Cartitemloder item={cartItems}  />
                                
                                

                                
                            </div>
                        </div>
                    }
                </div>
            </section>
        </>
    )
}

export default Carts