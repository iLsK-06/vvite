import  {useState, useEffect} from 'react'
export default function Student() {
    useEffect(function(){
        console.log(nom)
        console.log("visited")
        setNom("Youssef")
    },[])
    useEffect(function(){
        console.log("le nom a change")
    }, [nom])
    function tester(){
        setNom('Khalid')
    }
    return(
        <>
            <label>Welcome {nom}</label>
            <button onClick={tester}>Tester</button>
        </>
    )

}
