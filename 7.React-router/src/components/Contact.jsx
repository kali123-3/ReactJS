import {useParams} from "react-router-dom";

export default function Contact() {
    const params = useParams();
    return (
        <>
            <h1>La page contact ...l id selecitonne est {params.id}</h1>

        </>
    )
}


