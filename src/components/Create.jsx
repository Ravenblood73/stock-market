import { useState } from "react";

export default function Create (){

    const [formData, setFormData] = useState({
        name:"",
        code:"",
        price:0
    });

    function handleChange(event){

        //console.log("handleChange: ", event.target.value);

        //destructor

        const {name, value} = event.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    // fetch para fazer o submit dos dados "POST"... ver cheatguide JS Avançado do Ivo

    function handleSubmit(event){
        event.preventDefault();

        fetch("https://justivo.com/stockws.php?add", {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(result => console.log(result));
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nome
                        <input type="text" name="name" required minLength="4" maxLength="60"                    
                        onChange={handleChange} value={formData.name} />
                    </label>
                </div>
                <div>
                    <label>
                        Código
                        <input type="text" name="code" required minLength="3" maxLength="3"
                        onChange={handleChange} value={formData.code} />
                    </label>
                </div>
                <div>
                    <label>
                        Preço
                        <input type="number" name="price" required min="1" max="9999"
                        onChange={handleChange} value={formData.price} />
                    </label>
                </div>
                <div>
                    <button type="submit">Guardar</button>
                </div>
            </form>
        </main>
    );
}