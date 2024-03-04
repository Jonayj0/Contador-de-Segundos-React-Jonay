import React from "react";


//create your first component
const Home = (props) => {
	return (
	<div className="d-flex justify-content-center bg-dark text-white pb-5 m-3">
		<div className="card text-center d-flex bg-secondary mt-5 m-2 border-opacity-10 p-4">
			<h1><svg xmlns ="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-clock" viewBox="0 0 16 16">
				<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
				<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
				</svg>
			</h1>
		</div>
			<h1 className="card text-center bg-secondary mt-5 m-2 border-opacity-10 p-4">{props.digito6}</h1>
			<h1 className="card text-center bg-secondary mt-5 m-2 border-opacity-10 p-4">{props.digito5}</h1>
			<h1 className="card text-center bg-secondary mt-5 m-2 border-opacity-10 p-4">{props.digito4}</h1>
			<h1 className="card text-center bg-secondary mt-5 m-2 border-opacity-10 p-4">{props.digito3}</h1>
			<h1 className="card text-center bg-secondary mt-5 m-2 border-opacity-10 p-4">{props.digito2}</h1>
			<h1 className="card text-center bg-secondary mt-5 m-2 border-opacity-10 p-4">{props.digito1}</h1>
			
	</div>
	);
};


export default Home;
