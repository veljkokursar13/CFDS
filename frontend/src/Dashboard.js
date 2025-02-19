import React, { useState } from 'react';

const Dashboard = () => {
    const [txHash, setTxHash] = useState('');
    const [result, setResult] = useState(null);

    const checkRisk = async () => {
        const res = await fetch(`/api/transaction/${txHash}`);
        const data = await res.json();
        setResult(data);
    };

    return (
        <div>
            <h1>Crypto Fraud Detection Dashboard</h1>
            <input value={txHash} onChange={(e) => setTxHash(e.target.value)} placeholder="Enter Transaction Hash" />
            <button onClick={checkRisk}>Check Risk</button>
            {result && <div>Fraud Score: {result.risk_score}</div>}
        </div>
    );
};

export default Dashboard;
