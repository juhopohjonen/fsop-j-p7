import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { Notification } from '../components/messages'

const CreateNew = ({ setBlogs, blogs, createBlogFunc }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')


    const [newVisible, setNewVisible] = useState(false)

    const showWhenVisible = { display: newVisible ? '' : 'none' }
    const showWhenHidden = { display: newVisible ? 'none' : '' }

    const dispatch = useDispatch()

    const sendBlog = async (event) => {
        event.preventDefault()

        try {
            const createdBlog = await createBlogFunc({ title, author, url })
        
            dispatch(setNotification(`A new blog ${title} by ${author} added`))


            setBlogs(blogs.concat(createdBlog))

            setNewVisible(false)
        } catch (e) {
            dispatch(setNotification('Blog creation failed.'))
        }
    }

    return (
        <div>
            <Notification />

            <h2>create new</h2>

            <button
                style={showWhenHidden}
                onClick={() => setNewVisible(!newVisible)}
            >
                new note
            </button>

            <form onSubmit={sendBlog} style={showWhenVisible}>
                <div>
                    title:
                    <input
                        id="titleinput"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    author:
                    <input
                        id="authorinput"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div>
                    url:
                    <input
                        id="urlinput"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </div>

                <input type="submit" id="createButton" value={'create'} />
            </form>
            <button
                style={showWhenVisible}
                onClick={() => setNewVisible(false)}
            >
                cancel
            </button>
        </div>
    )
}

export default CreateNew
