import React, { useState, useEffect } from "react";
import axios from "axios";


function Cats() {
	const [data, setData] = useState([]);

	const getCatsData = async () => {
		const response = await axios.get("https://api.thecatapi.com/v1/images/search");

    console.log(response)
    setData(response.data.breeds)
  
	};

	useEffect(() => {
		getCatsData();
	}, []);

	return (
		<div className="cat">
			<h3 className="cat-text">
				<em>{data}</em>
			</h3>
			<button className="cat-button" onClick={getCatsData}>
				Click
			</button>
		</div>
	);
}

export default Cats;