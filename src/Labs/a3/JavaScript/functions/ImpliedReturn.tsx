//2.2.6.3 Implied returns

const multiply = (a: number, b: number) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

function ImpliedReturn () {
    return (
        <>
            <h3>Implied Return</h3>
            fourTimesFive = { fourTimesFive }<br />
            multiply(2, 4) = { multiply(4, 5) }<br />
        </>
    )
}

export default ImpliedReturn