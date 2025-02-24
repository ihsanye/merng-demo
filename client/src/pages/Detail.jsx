import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_POST } from '../graphql/query';

function Detail() {
    const { id } = useParams()
    const { data, refetch } = useQuery(GET_POST, {
        variables: { postId: "" },
        pollInterval: 500,
    });
    console.log(data)
    return (
        <div>
            {id}
            <button onClick={() => refetch({ postId: id })}>
                Get Post
            </button>
        </div>
    )
}

export default Detail