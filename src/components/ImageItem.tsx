import "./ImageItem.css";
import { useState } from "react";
import "./ImageItem.css";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

interface Images {
	url1: string;
	url1Change: string;
	url2: string;
	name1: string;
	name2: string;
	price: string;
	priceDiscount: string;
}

export default function ImageItem(prop: Images) {
	const [imageSrc1, setImageSrc1] = useState(prop.url1);

	const imageSrc2 = prop.url2;

	const handleMouseOver = () => {
		setImageSrc1(prop.url1Change);
	};

	const handleMouseOut = () => {
		setImageSrc1(prop.url1);
	};

	return (
		<Col className="mt-3">
			<div className="d-flex flex-column align-items-start">
				<Card.Img
					style={{ width: "240px", height: "388px" }}
					src={imageSrc1}
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}
					alt="Image"
				/>
				<div
					style={{
						border: "1px solid #00aeef",
						borderRadius: "50%",
						width: "2.25rem",
						height: "2.25rem",
					}}
					className="d-flex justify-content-center align-items-center mt-3"
				>
					<Card.Img style={{ width: "30px", height: "30px", cursor: "pointer" }} src={imageSrc2} />
				</div>
				<span className="mt-2">{prop.name1}</span>
				<span className="text-secondary mt-2">{prop.name2}</span>
				<div className="mt-3 d-flex d-flex justify-content-between" style={{ width: "240px" }}>
					<span className="text-danger fw-bold fs-5">{prop.priceDiscount}</span>
					<span className="text-secondary text-decoration-line-through fs-5">{prop.price}</span>
				</div>
			</div>
		</Col>
	);
}
