import React, { useState, useEffect } from 'react'
import axios from 'axios'
import baseUrl from './baseUrl'
const GetPost = () => {
    const [posts, setposts] = useState([])
    useEffect(() => {
        axios.get(baseUrl+'/get-post').then((res) => {
            console.log(res.data.data)
            setposts(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            <table className='w-100 table table-dark text-light'>
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Category</th>
                        <th>Title</th>
                        <th>More</th>
                        <th>Date</th>
                        <th>Picture</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {posts.map((each, i) => (
                    <tbody>
                        <tr>
                            <td>{i + 1}</td>
                            <td>{each.category}</td>
                            <td>{each.title}</td>
                            <td>{each.more}</td>
                            <td>{each.date}</td>
                            <td>
                                <div style={{borderRadius:'90%'}}>{each.imagePath}
                                    <img src={`${baseUrl}/postimages/${each.imagePath}`}alt='postimages' style={{height:'10vh',width:'40%'}}/>
                                    <img src={each.imageLink} alt='postimages' style={{height:'10vh',width:'40%'}}/>
                                </div></td>
                            <td>
                                <button className='btn btn-primary '>Edit</button>
                                <button className='btn btn-danger '>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default GetPost