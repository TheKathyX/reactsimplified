import { useEffect, useState } from "react"

export function Child() {
    const [age, setAge] = useState(0)
    const [name, setName] = useState("")


    useEffect(() => {
        console.log("Mount")

        return () => {
            console.log("Unmount")
        }
    }, [])

    return (
        
    )

}