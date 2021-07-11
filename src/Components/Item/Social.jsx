import React from 'react'
import Reviews from './Reviews'

const Social = () => {
	return (
		<div className="mt-4">
			<ul className="nav nav-tabs" id="myTab" role="tablist">
				<li className="nav-item" role="presentation">
					<h3 className="h5 mt-2 px-3">
						<strong>Social</strong>
					</h3>
				</li>
				<li className="nav-item" role="presentation">
					<button
						className="nav-link active"
						id="home-tab"
						data-bs-toggle="tab"
						data-bs-target="#home"
						type="button"
						role="tab"
						aria-controls="home"
						aria-selected="true"
					>
						Reviews
					</button>
				</li>
			</ul>
			<div className="tab-content" id="myTabContent">
				<div
					className="tab-pane fade show active"
					id="home"
					role="tabpanel"
					aria-labelledby="home-tab"
				>
					<Reviews />
				</div>
			</div>
		</div>
	)
}

export default Social
