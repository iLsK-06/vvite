import {data} from './data.jsx'
import {useState, useEffect} from 'react'


function Etudiants(){
    const [groupes, setGroupes] = useState([])
    const [selectedGr, setSelectedGr] = useState()
    const [etudiants, setEtudiants] = useState([])

    useEffect(function(){
        setGroupes(Object.keys(data))
    }, [])

    useEffect(function(){
        if(selectedGr){
            setEtudiants(data[selectedGr])
        }
    }, [selectedGr])

    return(
        <>
            <select onChange={(e)=>setSelectedGr(e.target.value)}>
                {groupes.map(function(item, i){
                    return <option key={i} value={item}>{item}</option>
                })}
            </select>

            {etudiants.map(function(item,i){
                return <div key={i} className="rounded-xl bg-white p-5 shadow">
                    <h3 className="text-lg font-bold">
                        {item.nom}
                    </h3>

                    <p className="mt-2 text-slate-500">
                        Note : {item.note} / 20
                    </p>
                </div>
            })}

            <label>{selectedGr}</label>
        </>
    )
}
export default Etudiants