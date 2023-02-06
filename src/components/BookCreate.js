import { useState } from "react";

function BookCreate({onCreate}) {

    const [title, setTitle] = useState('');

    //Este handler estara cada vez qe el user haga un cambio con enter
    const handleChange = (event) => {
        setTitle(event.target.value)
    }


    //cambio presionando el button
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
    //Esto limpia el input, para que el user pueda ingresar otro libro 
        setTitle('');
    }

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input  className="input" value={title} onChange={handleChange}/>
                <button className="button">Create!</button>            
            </form>
        </div>
    )
}

export default BookCreate;