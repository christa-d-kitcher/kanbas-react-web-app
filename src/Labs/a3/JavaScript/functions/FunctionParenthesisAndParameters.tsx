//2.2.6.4 Optional parenthesis and parameters

const square  = (a: number) => a * a;
const plusOne = (a: number) => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);

function FunctionParenthesisAndParameters() {
    return (
        <>
            <h3>FunctionParenthesisAndParameters</h3>
            twoSquared = {twoSquared}<br/>
            squareTwo = {square(2)}
            threePlusOne = {threePlusOne}<br/>
            AddOneToThree = {plusOne(3)}<br/>
        </>
    )
}

export default FunctionParenthesisAndParameters