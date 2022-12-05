type PriceProps = {
    price: number
    setPrice: Function
}

export default function Price(props: PriceProps){
    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => props.setPrice(e.target.value)

    return (
        <input onChange={(e) => HandleChange(e)}
        type={""}
        />
    )
}