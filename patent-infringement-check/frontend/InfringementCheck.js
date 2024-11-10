import React, { useState } from 'react';
import axios from 'axios';

function InfringementCheck() {
    const [patentId, setPatentId] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async () => {
        const response = await axios.post('/check_infringement', {
            patent_id: patentId,
            company_name: companyName,
        });
        setResult(response.data);
    };

    return (
        <div>
            <input type="text" placeholder="Patent ID" onChange={e => setPatentId(e.target.value)} />
            <input type="text" placeholder="Company Name" onChange={e => setCompanyName(e.target.value)} />
            <button onClick={handleSubmit}>Check Infringement</button>
            {result && <div>{JSON.stringify(result)}</div>}
        </div>
    );
}

export default InfringementCheck;