export default function Input({number1, setnumber1, number2, setnumber2}){
    return (
        <>
        <label htmlFor="ichigo">
            First number
        </label>
        <input
            id="ichigo" value={number1} name="Number one" type="number" onChange={(e)=>{setnumber1(e.target.value)}} 
        />
        <label htmlFor="vegeta">
        Second number
        </label>
        <input id="vegeta" value={number2} name="Number two" type="number" onChange={(e)=>{setnumber2(e.target.value)}}
        />
        </>
    )
}