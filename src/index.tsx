import React from 'react'
import ReactDOM from'react-dom/client';
import App from "./App"

function Test(){
    return(
        <div>
            <App />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<Test />);
