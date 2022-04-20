import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

export default function Detail(){

    const params = useParams();
    const [stock, setStock] = useState();

    useEffect(() => {

        fetch("https://justivo.com/stockws.php?get&code=" + params.code)
        .then(response => response.json())
        .then(dataReceived => setStock(dataReceived));

    }, [params.code]);

    // reatribui tudo de novo senão limpa a página... Isto é do botão mais abaixo

    function toggleFavorite() {
        setStock(prevState => ({...prevState, isFavorite: !prevState.isFavorite}));
    }

    function Display() {
        if (stock) {

            if(stock.code) {

                return (
                    <section>  
                        <h2>{stock.name}</h2>
                        <h3>{stock.code}</h3>
                        <div>
                            Preço:{stock.price}€
                        </div>
                        <div>
                            <button onClick={toggleFavorite}>
                                { stock.isFavorite ? "Remover " : "Marcar "}
                                Favorito
                            </button>
                        </div>
                    </section>
                )

            }

            else {
                return (<p>Stock Inexistente</p>);
            }
        }

        else {
            return (<p>Aguarde um momento</p>);
        }
    }

    //conditional rendering porque o fetch é async tem de ser envolvido num elemento <></>
    // transformado num if ? else : para retornar Stock Inesxistente
    
    return (
        <Display/>
    )
}