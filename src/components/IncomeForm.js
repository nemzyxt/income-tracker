import React, { useRef } from 'react';

const IncomeForm = ({ incomes, setIncomes }) => {
    const desc = useRef(null);
    const amt = useRef(null);
    const date = useRef(null);

    const addIncome = (e) => {
        e.preventDefault();

        // this section is so that we can ensure all the fields are filled
        // before successfull addition of the income item to the incomes list
        let inp1 = desc.current.value;
        let inp2 = amt.current.value;
        let inp3 = date.current.value;
        if(inp1 === "" || inp2 === "" || inp3 === "") {
            return;
        }
        
        let d = date.current.value.split("-");
        let newDate = new Date(d[0], d[1], d[2]);

        // update the incomes list
        setIncomes([...incomes, {
            "desc": desc.current.value,
            "amt": amt.current.value,
            "date": newDate.getTime()
        }]);

        // clear the input fields
        desc.current.value = "";
        amt.current.value = null;
        date.current.value = null;

        // just for confirming that all has gone well
        // console.log('Success !');
    }

    return (
        <form className='income-form' onSubmit={addIncome}>
            <div className='form-inner'>
                <input type="text" ref={desc} name="desc" id="desc" placeholder='Income Description ...' />
                &nbsp;
                <input type="number" ref={amt} name="amt" id="amt" placeholder='Income Amount ...' />
                &nbsp;
                <input type="date" ref={date} name="date" id="date" placeholder='Income Date ...' />
                &nbsp;
                <input type="submit" value="Add Income" />
            </div>
        </form>
    )
}

export default IncomeForm;