import axios from 'axios'
const baseUrl = 'http://localhost:5000/api/blogs'

let token = null

const setToken = (newToken) => {
    token = `bearer ${newToken}`
}

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then((response) => response.data)
}

const sendBlogCreation = async (newObject) => {
    const config = {
        headers: { Authorization: token },
    }

    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}

const changeBlog = async (newObject) => {
    const config = {
        headers: { Authorization: token },
    }

    const response = await axios.put(
        `${baseUrl}/${newObject.id}`,
        newObject,
        config
    )
    return response.data
}

const removeBlog = async (blog) => {
    let newObject = {}

    const response = await axios.delete(`${baseUrl}/${blog.id}`, {
        headers: { Authorization: token },
    })
    return response.data
}

export default { getAll, sendBlogCreation, setToken, changeBlog, removeBlog }
