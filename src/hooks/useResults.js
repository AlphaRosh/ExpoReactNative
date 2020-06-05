import { useEffect, useState } from "react"
import zomato from '../api/zomato'
import { ENTITY_ID, ENTITY_TYPE } from '../../assets/constants/constants'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const SearchApi = async (searchTerm) => {
        try {
            // const response = await zomato.get(`/search?entity_id=${ENTITY_ID}&entity_type=${ENTITY_TYPE}&q=${searchTerm}`);
            const response = await zomato.get('/search', {
                params: {
                    entity_id: ENTITY_ID,
                    entity_type: ENTITY_TYPE,
                    q: searchTerm
                }
            })
            setResults(response.data.restaurants)
        } catch (err) {
            setErrorMessage('Something went wrong in the Universe');
        }
    }

    useEffect(() => {
        SearchApi('chinese')
    }, [])

    return [SearchApi, results, errorMessage]
}