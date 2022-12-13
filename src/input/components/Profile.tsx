type ProfileProps = {
    name: string // checkboxの塊の名前
    value: string // 押したときにstateに入れたい名前
    val: string
    setVal: Function
    checked?:boolean
}

export default function Profile(props: ProfileProps){
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => props.setVal(e.target.value)
    return(
        <input
        type="radio"
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange = {(e) => handleChange(e)}
        />
    )
}