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
        <div id="contact">
            <div>
                <img
                    key={item.img}
                    src={item.img || null}
                />
            </div>

            <div>
                <h1>
                    <>
                        {item.name}
                    </>
                </h1>

                {item.description && <p>{item.description}</p>}

                <div>
                    <Form action="edit">
                        <button type="submit">Edit</button>
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
                        <button type="submit">Delete</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

