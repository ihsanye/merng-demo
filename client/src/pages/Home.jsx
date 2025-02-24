import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { GET_POSTS } from '../graphql/query';
import { CREATE_POST } from '../graphql/mutation';

function Home() {

    const { data } = useQuery(GET_POSTS);
    const [post, setPost] = useState({ title: '', description: '', url: '' })
    const [createPost] = useMutation(CREATE_POST)

    const onChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <input type="text" name='title' value={post.title} onChange={onChange} placeholder='Title' />
            <input type="text" name='description' value={post.description} onChange={onChange} placeholder='Description' />
            <input type="text" name='url' value={post.url} onChange={onChange} placeholder='url' />
            <button onClick={() => createPost({ variables: { body: post } })}>Create Post</button>
            {
                data?.getPosts?.map((dt, i) => (
                    <div onClick={() => window.location = `/post/${dt.id}`} key={i}>
                        <strong>{dt.title}</strong>
                        <p> {dt.description} </p>
                    </div>
                ))
            }
        </div>
    )
}

export default Home