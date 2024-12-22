"use client"

interface ErrorPageProps{
    error: Error;
    reset: () => void;
}

export default function Error({error, reset }: ErrorPageProps){
    return(
        <div>

            <h1>Error</h1>
            <p>Něco se pokazilo</p>
            

        </div>
    )
}