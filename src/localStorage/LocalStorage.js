import React, { useState } from 'react';

const LocalStorage = () => {

    const [item, setItem] = useState("");

    const addItem = () => {   // ma'lumotni joylashtirish
        localStorage.setItem("Tekst", item);
    }

    const removeItem = () => { // ma'lum bir ma'lumotni o'chirish
        localStorage.removeItem("Tekst");
    }

    const clearLocalData = () => { // butun localni tozalash
        localStorage.clear();
    }

    return (
        <>
            <input type="text" placeholder="Write text..." value={item} onChange={(e) => setItem(e.target.value)}/> 

            <button onClick={addItem}>Add Item</button>
            <button onClick={removeItem}>Remove Item</button>
            <button onClick={clearLocalData}>Clear</button>

            {localStorage.getItem("Tekst") && (  // malumot olish uchun
                <div className="infos">
                    <p>{localStorage.getItem("Tekst")}</p>
                </div>
            )}
        </>
    );
};

export default LocalStorage;