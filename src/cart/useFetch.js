import { useState, useEffect } from "react";

export const useFetch = ({ items, url }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [isLoaded, setIsLoaded] = useState(false);
	let [getItems, setGetItems] = useState(items);
	const [totalItems, setTotalItems] = useState(10);
	let [totalPrice, setTotalPrice] = useState(1261.21);

	// getItems
	const shoppingItems = async () => {
		const res = await fetch(url);
		const data = await res.json();
		if (data) {
			console.log(data);
			setIsLoaded(true);
			setIsLoading(false);
			getItems = data.slice(0, 10);
			setGetItems(getItems);
		}
	};
	useEffect(() => {
		shoppingItems();
	}, []);

	return {
		isLoading,
		isLoaded,
		totalItems,
		setTotalItems,
		totalPrice,
		setTotalPrice,
        setGetItems,
        getItems
	};
};

