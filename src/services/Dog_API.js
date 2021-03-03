import React, { useState, useEffect } from "react";
import axios from "axios";


function Dogs() {
	const [data, setData] = useState([]);

	const getDogsData = async () => {
		const response = await axios.get("https://api.thedogapi.com/v1/images/search");

    console.log(response)
    setData(response.data.breeds)
  
	};

	useEffect(() => {
		getDogsData();
	}, []);

	return (
		<div className="dog">
			<h3 className="dog-text">
				<em>{data}</em>
			</h3>
			<button className="dog-button" onClick={getDogsData}>
				Click
			</button>
		</div>
	);
}

export default Dogs;