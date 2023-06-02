import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./Gallery.css";
import { FC } from "react";
interface GalleryProps {
	name: string;
}
const Gallery: FC<GalleryProps> = ({ name }) => {
	const renderTooltip = (text: string) => (
		<Tooltip id="tooltip">{text}</Tooltip>
	);

	return (
		<div className="photo-gallery">
			<div className="row">
				<div className="col-md-6">
					<OverlayTrigger
						placement="top"
						overlay={renderTooltip("Butham Saranam Gachami!")}
					>
						<img
							src="/with_budha.jpeg"
							alt="Budha"
							className="photo"
						/>
					</OverlayTrigger>
				</div>
				<div className="col-md-6">
					<OverlayTrigger
						placement="top"
						overlay={renderTooltip(
							"Oooo, this iss veery creeppy! LOL"
						)}
					>
						<img src="/alley.jpeg" alt="Alley" className="photo" />
					</OverlayTrigger>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6">
					<OverlayTrigger
						placement="top"
						overlay={renderTooltip(`Thanks for the cake, ${name}!`)}
					>
						<img src="/cake.jpg" alt="Cake" className="photo" />
					</OverlayTrigger>
				</div>
				<div className="col-md-6">
					<OverlayTrigger
						placement="top"
						overlay={renderTooltip(
							`Huh?, you should not be here! Sorry, ${name}; Awwwww SO CUTEE`
						)}
					>
						<img
							src="/codingcat.png"
							alt="Catie"
							className="photo"
						/>
					</OverlayTrigger>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
