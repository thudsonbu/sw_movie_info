import React, { useState, useEffect } from "react";

function SWMovies() {
    return (
        <div>
            <h1>Pick A Movie</h1>
            <select>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
            </select>
        </div>
    );
}

export default SWMovies;