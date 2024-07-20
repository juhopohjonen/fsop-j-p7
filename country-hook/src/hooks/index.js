import axios from "axios"
import { useEffect, useState } from "react"

const BASE_API = 'https://studies.cs.helsinki.fi/restcountries/api'

export const useCountry = (query) => {

    const [country, setCountry] = useState(null)

    const getByName = async (name) => {
        if (!name) {
            return null
        }

        const country = await axios.get(`${BASE_API}/name/${name}`)
        return country.data
    }

    useEffect(() => {
        getByName(query)
            .then(country => setCountry(country))
            .catch(err => {
                console.error('error', err)
                setCountry(null)
            })

    }, [query])

    if (!query)
    {
        return null
    }
 
    return {
        query,
        data: country,
        found: Boolean(country),
    }
}   

