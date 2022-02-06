import '../styles/Quote.css'
import { useState, useEffect } from 'react';

function Quote() {

    const [quote, setQuote] = useState("")

    useEffect(() => {
        fetch("https://api.chucknorris.io/jokes/random")
            .then(res => res.json())
            .then(
                (quote) => {
                    setQuote(quote.value)
                }
            )
    }, [])

    let fetchNewQuote = () => {
        fetch("https://api.chucknorris.io/jokes/random")
            .then(res => res.json())
            .then(
                (quote) => {
                    setQuote(quote.value)
                }
            )
    }

    if (!quote) {
        return <p>Chargement...</p>
    }

    return (
        <div className='quote'>
            <div className='quote-border'>
                <div className='quote-value'>
                    <h2>{quote}</h2>
                </div>
            </div>
            <button className='quote-button' onClick={fetchNewQuote}>
                Bouton
            </button>
        </div>
    )
}

// Enregistrer les favoris
// Choix catégories

export default Quote;