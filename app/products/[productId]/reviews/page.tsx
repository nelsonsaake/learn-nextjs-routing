import React from 'react';

export default function Reviews({params}: {params:{productId: string}}) {
return <>
    <h1 className="mb-5">app/products/[{params.productId}]/reviews/page</h1>
</>
}