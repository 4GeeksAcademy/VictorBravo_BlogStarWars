import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
	const { store, actions } = useContext(Context);
	const [category, uid] = actions.setCategory();

	// Cargar detalles del personaje cuando el componente se monta
	useEffect(() => {
		actions.getEntityDetails(category, uid);
	}, [category, uid, actions]);

	return (
		<div className="container mt-5">
			{store.selectedPerson ? (
				<div className="card">
					<div className="row g-0">
						<div className="col-md-4">
							<img 
								src={actions.getImageUrl(category, item.uid)} 
								className="img-fluid rounded-start" 
								alt={store.selectedPerson.name} 
								onError={(e) => e.target.src = "https://via.placeholder.com/300x400"} 
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h1 className="card-title">{store.selectedPerson.name}</h1>
								<p><strong>Height:</strong> {store.selectedPerson.height} cm</p>
								<p><strong>Mass:</strong> {store.selectedPerson.mass} kg</p>
								<p><strong>Hair Color:</strong> {store.selectedPerson.hair_color}</p>
								<p><strong>Skin Color:</strong> {store.selectedPerson.skin_color}</p>
								<p><strong>Eye Color:</strong> {store.selectedPerson.eye_color}</p>
								<p><strong>Birth Year:</strong> {store.selectedPerson.birth_year}</p>
								<p><strong>Gender:</strong> {store.selectedPerson.gender}</p>
								<p><strong>Homeworld:</strong> {store.selectedPerson.homeworldName}</p>
								<p><strong>Species:</strong> {store.selectedPerson.speciesNames.join(", ")}</p>
								<p><strong>Starships:</strong> {store.selectedPerson.starshipNames.join(", ")}</p>
								<p><strong>Vehicles:</strong> {store.selectedPerson.vehicleNames.join(", ")}</p>
								<p><strong>Films:</strong> {store.selectedPerson.filmNames.join(", ")}</p>

								<Link to="/">
									<button className="btn btn-primary">Back home</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			) : (
				<p>Cargando detalles del personaje...</p>
			)}
		</div>
	);
};
