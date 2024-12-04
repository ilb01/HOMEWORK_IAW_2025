<<<<<<< HEAD
import { useState } from "react"

export default function Form({ getLocation }) {
=======
import useState from "react"

export default function Form({newLocation}){
>>>>>>> 213392e21f81c3a09e1daf3ba48e46cf7ab43f66
    const [search, setSearch] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
<<<<<<< HEAD
        if (search == "" || !search) return;
        getLocation(search);
    }

    return (
        <div className="containet">
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3 mx-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                        className="btn btn-primary input-group-text"
                        type="submit">Search</button></div>
            </form>
        </div>
    )
}
=======
        if(search=="" || !search) return;
        newLocation(search);
    }

    return(
        <div className="containet">
        <form onSubmit={onSubmit}>
           <div className="input-group mb-3 mx-auto">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Ciudad"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="btn btn-primary input-group-text" type="submit">Search</button>
            </div>
        </form>
     </div>
    )
}

>>>>>>> 213392e21f81c3a09e1daf3ba48e46cf7ab43f66
