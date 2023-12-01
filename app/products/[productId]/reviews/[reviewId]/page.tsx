import React from 'react';

export default function Review({params}: {params: {productId: string, reviewId: string}}){
    return <>
        <h1 className="mb-5">app/products/[{params.productId}]/reviews/[{params.reviewId}]/page</h1>

        <h1>Product Review Page</h1>
    </>
}