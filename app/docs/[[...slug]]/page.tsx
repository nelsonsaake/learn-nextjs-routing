import React from 'react';

export default function Doc({ params }: { params: { slug: string[] } }) {
    return <>
        <h1 className="mb-5">app/docs/[[...slug]]/page</h1>

        <h2>slug</h2>
        {  
            params.slug?.map((slug, index, ls) => {
                return <> {slug}  {(index != ls.length-1) && (<>,</>)} </>
            })
        }
    </>
}