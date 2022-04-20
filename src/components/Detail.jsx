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

    //conditional rendering porque o fetch é async tem de ser envolvido num elemento <></>
    
    return (
        <>
        { stock && (
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
        )}
        </>
    )
}