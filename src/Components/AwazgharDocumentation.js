import React, { useEffect, useState } from 'react'
// import documentation from '../../public/asset/documentation.md'
import documentation from '../asset/awaazghardocumentation.md'
import ReactMarkdown from 'react-markdown';
const Index = () => {
    const [markdown, setMarkdown] = useState('');
    useEffect(() => {
        fetch(documentation)
            .then((res) => res.text())
            .then((text) => setMarkdown(text));
    }, []);
    return (
        <div>
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    )
}

export default Index
