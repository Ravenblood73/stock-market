export default function Home ({stocks}){
    console.log(stocks);
    return (
<main className="Homepage">
            {stocks.map((stock, index) => (
                <section key={index}>
                <h2>{stock.name}</h2>
                <h3>{stock.code}</h3>
                <div>
                    Preço: {stock.price} 10€
                </div>
            </section>
            ))

        }
</main>
    );
}