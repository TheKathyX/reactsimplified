import { useState useEffect } from "react"

// youi want to put those on top because hooks can never be called conditionally

function App() {
    const [count, setCount ] = useState(0)

    useEffect(() => {
        DocumentFragment.title = count 
    }, [count])


    return (
        <>
        <Button onClick={() => setCount(c => c - 1)}>-</Button>
        {count}
        <Button onClick={() => setCount(c => c + 1)}>+</Button>
        </>
    )
}