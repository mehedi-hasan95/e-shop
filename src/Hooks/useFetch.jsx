import { useEffect, useState } from "react";
import MainUrl from "../Components/MainUrl/MainUrl";

const useFetch = (url) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await MainUrl.get(url);
                setProducts(res.data.data)
            }
            catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
        fetchData();
    }, [url]);
    return {products, loading};
};

export default useFetch;