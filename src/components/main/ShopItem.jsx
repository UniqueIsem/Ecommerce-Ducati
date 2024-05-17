import React from 'react'

export const ShopItem = () => {
    const item = {
        img: 'url',
        name: 'Item 1',
        description: '',
        price: 10,
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

