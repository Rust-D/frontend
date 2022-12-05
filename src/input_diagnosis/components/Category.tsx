type RelationshipProps = {
    val : Array<string>
    setVal : Function
    value : string //押したときにstateに入れたい名前

}
export default function Relationship(props: RelationshipProps){

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        // 押されたとき、ONなのかOFFなのかを判定する

        if (props.val.includes(e.target.value)){
            // stateの配列の中にvalueのやつがもうあったらOFF
            // 今押されたやつ以外をset
            props.setVal(props.val.filter(item => item !== e.target.value))
        }
        else {
            // 今のstateの末尾に押されたやつを追加
            props.setVal([...props.val, e.target.value])
        }
    }

    return (
        <input 
        type="checkbox" 
        value={props.value} 
        onChange={(e) => handleChange(e)}
        />
    );
    

}