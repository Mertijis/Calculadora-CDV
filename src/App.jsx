 
 import React, {useState } from "react";
 
 function App() {

    let [lvCalculo, setLvCalculo] = useState(1);
    let [bonusConj, setBonusConj] = useState(0);
    let [BBM, setBBM] = useState(0);
    let [BposC, setBposC] = useState(0);
    let [BpreC, setBpreC] = useState(0);
    let [denominador, setDenominador] = useState(4); 
    let mana;
    let setMana;
    let manaArray = [];

    console.log(lvCalculo);
    console.log(bonusConj);
    console.log(BBM);
    console.log(BposC);
    console.log(BpreC);
    console.log(denominador);
    console.log(manaArray);
    
    for (let i = 1; i <= lvCalculo; i++) {
        if (i > 1) {
            setMana = Math.round(mana + ((mana + BpreC) / denominador) + BposC);
            mana = setMana;
            manaArray.push(setMana);
        } else {
            mana = Math.round((bonusConj * 2) + BBM)
            setMana = mana
            manaArray.push(setMana);
        }
    }

    function lvCalculoInput(event) {
        setLvCalculo(Number(event.target.value));

    }

    function bonusConjInput(event) {
        setBonusConj(Number(event.target.value));
    }

    function BBMInput(event) {
        setBBM(Number(event.target.value));
    }

    function BposCInput(event) {
        setBposC(Number(event.target.value));
    }

    function BpreCInput(event) {
        setBpreC(Number(event.target.value));
    }

    function denominadorInput(event) {
        setDenominador(Number(event.target.value));
    }

    const mapMana = manaArray.map((lv, id) => 
    <li>
        <label>Seu Lv: {id+1} </label>  <label>Sua Mana: {lv}</label>
    </li>
    );

    return (
          <>
            <section className="input-box">
                <div className="input-field">
                  <p>Lv para calculo</p>
                  <input type="number" value={lvCalculo} onChange={lvCalculoInput}/>
                </div>
                <div className="input-field">
                  <p> Bonus de Conjuração</p>
                  <input type="number" value={bonusConj} onChange={bonusConjInput}/>
                </div>
                <div className="input-field">
                  <p>Bonus Base de Mana</p>
                  <input type="number" value={BBM} onChange={BBMInput}/>
                </div>
                <div className="input-field">
                  <p> Bonus pos calculo</p>
                  <input type="number" value={BposC} onChange={BposCInput}/>
                </div>
                <div className="input-field">
                  <p> Bonus pre calculo</p>
                  <input type="number" value={BpreC} onChange={BpreCInput}/>
                </div>
                <div className="input-field">
                  <p>Denominador</p>
                  <input type="number" value={denominador} onChange={denominadorInput}/>
                </div>
              </section>
              <div>
                  <ul>
                    {mapMana}
                  </ul>
            </div>
          </>
    );
 }

 export default App