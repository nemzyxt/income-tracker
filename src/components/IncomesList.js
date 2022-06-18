import IncomeItem from "./IncomeItem";

const IncomesList = ({ incomes, setIncomes}) => {
    const removeIncome = i => {
        let temp = incomes.filter((v, index) => index != i);
        setIncomes(temp);
    }

    const sortByDate = (a, b) => {
        return a.date - b.date;
    }

    return (
        <div className="income-list">
            {
                incomes.sort(sortByDate).map((value, index) => (
                    <IncomeItem 
                        key={index} 
                        income={value} 
                        index={index} 
                        removeIncome={removeIncome} 
                    />
                ))
            }
        </div>
    );
}

export default IncomesList;