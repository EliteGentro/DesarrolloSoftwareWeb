import { useEffect, useState } from 'react'

const useFetch = <T,>(url: string) => {
    const [state, setState] = useState<{
        data: T | null
        isLoading: boolean
        hasError: any | null
    }>({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async () => {
        setState(prev => ({ ...prev, isLoading: true }))
        try {
            const resp = await fetch(url)
            const data: T = await resp.json()
            setState({
                data,
                isLoading: false,
                hasError: null,
            })
        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                hasError: error,
            })
        }
    }

    useEffect(() => {
        getFetch()
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}

export default useFetch