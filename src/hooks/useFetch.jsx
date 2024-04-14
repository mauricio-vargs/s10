import { useState, useEffect } from "react"

function useFetch(url){

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then(res => res.json())
        .then(json => {
            setData(json)
        })
        .catch(err => {alert('Erro')
        console.error(err)})
        .finally(() =>  setLoading(false))
    }, [url])

    return [data, loading]
}

export default useFetch;