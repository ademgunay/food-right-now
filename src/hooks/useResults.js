import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errMsg, setErrMsg] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('initialized SearchScreen');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            if (response.data != null) {
                setResults(response.data.businesses);
            } else {
                console.log('Response.data is null');
            }
        } catch (e) {
            setErrMsg(e.message);
        }
    };

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errMsg];
};