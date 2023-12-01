'use client';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewOrder() {

    const [orderCount, setOrderCount] = useState(0);
    const router = useRouter();

    const handleClick = () => {
        if (orderCount == 6) {
            router.push("/");
        }
        setOrderCount(orderCount + 1);
    }

    return (
        <>
            <div className="mb-5">
                <h1>app/orders/new</h1>
                <p>routing programmatically</p>
            </div>

            <h2 className="">{orderCount}</h2>

            <button onClick={handleClick}>
                Make a new Order
            </button>
        </>
    )
}