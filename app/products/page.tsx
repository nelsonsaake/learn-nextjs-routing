import React from "react";
import Link from "next/link";

export default function Products() {

    let products = [
        'Chocolate',
        'Sugar',
        'Groundnut',
        'Gari',
    ];

    return (
        <>
            <h1 className="mb-5">app/products/page</h1>

            <h1 className="mb-5">
                <Link href="/"> Go Home</Link>
            </h1>

            {
                products.map((product, index) => {
                    return <div  key={index}>
                        <Link href={`products/${product}`} replace>{product}</Link>
                    </div>
                })
            }
        </>
    );
}