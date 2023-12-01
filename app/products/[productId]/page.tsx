import React from 'react';

export default function ProductDetails({ params }: { params: { productId: string } }){
    return <h1>app/products/[{params.productId}]/page</h1>
}