 
 import React, {useState } from "react";
 
 function Calculo() {

    const [lvCalculo, setLvCalculo] = useState("1");
    const [bonusConj, setBonusConj] = useState("1");
    const [BBM, setBBM] = useState("0");
    const [BposC, setBposC] = useState("0");
    const [BpreC, setBpreC] = useState("0");
    const [denominador, setDenominador] = useState("4"); 
    let mana;
    let setMana;
    const manaArray = [];

    console.log(lvCalculo)
    console.log(bonusConj)
    console.log(BBM)
    console.log(BposC)
    console.log(BpreC)
    console.log(denominador)
    console.log(manaArray)
    
    for (let i = 1; i <= lvCalculo; i++) {
        if (i > 1) {
            setMana = Math.round(mana + ((mana + BpreC) - denominador) + BposC);
            mana = setMana;
            manaArray.push(setMana)
        } else {
            mana = bonusConj * 2 + BBM
            manaArray.push(mana)
        }
    }

    function lvCalculoInput(event) {
        setLvCalculo(event.target.value)

    }

    function bonusConjInput(event) {
        setBonusConj(event.target.value)
    }

    function BBMInput(event) {
        setBBM(event.target.value)
    }

    function BposCInput(event) {
        setBposC(event.target.value)
    }

    function BpreCInput(event) {
        setBpreC(event.target.value)
    }

    function denominadorInput(event) {
        setDenominador(event.target.value)
    }

    const mapMana = manaArray.map(lv => 
    <li>
        {lv}
    </li>
    );

    return (
        <>
            <div className="input-box">
                <input type="number" value={lvCalculo} onChange={lvCalculoInput}/>
                <input type="number" value={bonusConj} onChange={bonusConjInput}/>
                <input type="number" value={BBM} onChange={BBMInput}/>
                <input type="number" value={BposC} onChange={BposCInput}/>
                <input type="number" value={BpreC} onChange={BpreCInput}/>
                <input type="number" value={denominador} onChange={denominadorInput}/>
            </div>
            <div>
                <ul>
                    {mapMana}
                </ul>
            </div>
        </>
    );
 }

 export default Calculo