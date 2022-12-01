import React from 'react';
import ReactDOM from 'react-dom/client'

export default function Main() {
    return (
        <div>
            <p>unko</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(<Main />)