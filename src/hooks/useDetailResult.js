import yelp from "../api/yelp";
import { useState, useEffect } from "react";

export default (id) => {
    const [result, setResult] = useState(null);
    const [errMsg, setErrMsg] = useState('');

    const getDetailResult = async (id) => {
        try {
            const response = await yelp.get(`/${id}`);
            console.log(response.data);
            setResult(response.data);
        } catch (e) {
            setErrMsg(e.message);
            console.log(e);
        }
    };

    useEffect(() => { getDetailResult(id) }, []);

    return [result, errMsg];
}