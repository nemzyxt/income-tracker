const Header = ({ totalIncome }) => {
    return (
        <header>
            <h1>Income Tracker</h1>
            <div className="total-income">Kshs.{totalIncome}</div>
        </header>
    );
}

export default Header;