import React from 'react'
import { Form } from 'react-router-dom';

export const ShopItem = () => {
    const item = {
        img: 'https://images.ctfassets.net/x7j9qwvpvr5s/6Vy7PTvkJpSb4eQBJTDsvi/ad005023bb347bf0e6003da5797aa9fd/PV2-Rd-MY22-Model-Preview-1050x650-v06.png',
        name: 'Item 1',
        description: 'DUCATI PANIGALE',
        price: 10000,
    };

    return (
        <div className="item-container">
            <div className='item-info-container'>
                <div className='item-image'>
                    <img
                        key={item.img}
                        src={item.img || null}
                        width={800}
                        height={500}
                    />
                </div>

                <div className='item-text-container'>
                    <div className='item-name'>
                        <h1>
                            {item.name}
                        </h1>
                    </div>

                    <div className='item-description'>
                        {item.description && <p>{item.description}</p>}
                    </div>

                    <div className='item-price'>
                        <h2>${item.price} MX</h2>
                    </div>

                    <div className='item-buttons'>
                        <Form action="edit">
                            <button className='btn-buy' type="submit">Buy</button>
                        </Form>
                        <Form
                            method="post"
                            action="destroy"
                            onSubmit={(event) => {
                                if (
                                    !confirm(
                                        "Please confirm you want to delete this record."
                                    )
                                ) {
                                    event.preventDefault();
                                }
                            }}
                        >
                            <button className='btn-add-to-cart' type="submit">Add to cart</button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

