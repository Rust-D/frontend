type PriceProps = {
    price: number
    setPrice: Function
}

export default function Price(props: PriceProps){

    const handleForm = (event: React.ChangeEvent<HTMLInputElement>) =>{
        props.setPrice(event.target.value)
        console.log(props.price)
    }
    return (
        <input
            onChange={(event) => handleForm(event)}
            type={""}
        />
        
    )
}