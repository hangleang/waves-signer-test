import ReactDOM from 'react-dom/client'
import React, { useEffect, useState, useMemo } from 'react';
import { Signer } from '@waves/signer';
import { ProviderWeb } from '@waves.exchange/provider-web';
import Home from './Home';
import './index.css'

const signer = new Signer({
  // Specify URL of the node on Testnet
  NODE_URL: 'https://nodes-testnet.wavesnodes.com'
});
signer.setProvider(new ProviderWeb('https://testnet.waves.exchange/signer'));

function App(): React.ReactElement {
    const [isIncognito, setIncognito] = useState(false);

    useEffect(() => {
        try {
            localStorage.setItem('___test_storage_key___', 'test');
            localStorage.getItem('___test_storage_key___');
            localStorage.removeItem('___test_storage_key___');
        } catch (e) {
            setIncognito(true);
        }
    }, [signer]);

    if (isIncognito)
        return (
            <p>
                The authorization in the incognito mode is unavailable. Please,
                exit from the incognito mode and try again.
            </p>
        );
    
    return <Home signer={signer} />;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App />
)
