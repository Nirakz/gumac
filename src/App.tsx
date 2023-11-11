import React from "react";
import "./App.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Header from "./components/Header";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

function App() {
	return (
		<>
			<Header />
			<main>
				<Container fluid className="mt-4 d-flex justify-content-center">
					<Card style={{ backgroundImage: `url("../image/ticket.png")`, backgroundSize: "cover" }} className="m-4 d-flex flex-row justify-content-center align-items-center">
						<Card.Body className="text-white fw-bold fs-4 text-center ms-2" style={{width: "146px"}}>GIẢM 30K</Card.Body>
						<Card.Body style={{ fontSize: "13px", width: "285px" }} className="ms-3">
							<Card.Title className="fw-bold fs-6 text-uppercase">VOUCHER 30K</Card.Title>
							<Card.Text className="fw-lighter">
								VOUCHER MUA HÀNG 30K ÁP DỤNG CHO TẤT CẢ ĐƠN HÀNG
							</Card.Text>
							<Button className="rounded-pill fw-bold" variant="dark">COPY MÃ</Button>
						</Card.Body>
					</Card>
					<Card style={{ backgroundImage: `url("../image/ticket.png")`, backgroundSize: "cover" }} className="m-4 d-flex flex-row justify-content-center align-items-center">
						<Card.Body className="text-white fw-bold fs-4 text-center ms-2" style={{width: "146px"}}>GIẢM 50K</Card.Body>
						<Card.Body style={{ fontSize: "13px", width: "285px" }}>
							<Card.Title className="fw-bold fs-6 text-uppercase">VOUCHER 50K</Card.Title>
							<Card.Text style={{ fontSize: "13px" }}>
								VOUCHER MUA HÀNG 50K ÁP DỤNG CHO ĐƠN HÀNG TỪ 300K
							</Card.Text>
							<Button className="rounded-pill fw-bold" variant="dark">COPY MÃ</Button>
						</Card.Body>
					</Card>
				</Container>
				<Container fluid>
					<Row md={3} className="justify-content-md-center">
						<Col className="img-container" style={{width: "432px", height: "189px"}}><Card.Img src="../image/artboard-1-1.jpg"/></Col>
						<Col className="img-container" style={{width: "432px", height: "189px"}}><Card.Img src="../image/artboard-2-1.jpg"/></Col>
						<Col className="img-container" style={{width: "432px", height: "189px"}}><Card.Img src="../image/artboard-3-1.jpg"/></Col>
					</Row>
				</Container>
				<Container>
					<Row md={5}>
						<Col className="p-2">
							<Card>
								<Card.Body className="d-flex flex-column justify-content-center align-items-center slick-slide">
									<Card.Img style={{width: "13%"}} src="../image/shirt.png"/>
									<Card.Text className="fw-lighter">Áo Sơ Mi Họa Tiết</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col className="p-2">
							<Card>
								<Card.Body className="d-flex flex-column justify-content-center align-items-center slick-slide">
									<Card.Img style={{width: "13%"}} src="../image/shirt.png"/>
									<Card.Text className="fw-lighter">Áo Sơ Mi Họa Tiết</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col className="p-2">
							<Card>
								<Card.Body className="d-flex flex-column justify-content-center align-items-center slick-slide">
									<Card.Img style={{width: "13%"}} src="../image/shirt.png"/>
									<Card.Text className="fw-lighter">Áo Sơ Mi Họa Tiết</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col className="p-2">
							<Card>
								<Card.Body className="d-flex flex-column justify-content-center align-items-center slick-slide">
									<Card.Img style={{width: "13%"}} src="../image/shirt.png"/>
									<Card.Text className="fw-lighter">Áo Sơ Mi Họa Tiết</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col className="p-2">
							<Card>
								<Card.Body className="d-flex flex-column justify-content-center align-items-center slick-slide">
									<Card.Img style={{width: "13%"}} src="../image/shirt.png"/>
									<Card.Text className="fw-lighter">Áo Sơ Mi Họa Tiết</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col className="p-2">
							<Card>
								<Card.Body className="d-flex flex-column justify-content-center align-items-center slick-slide">
									<Card.Img style={{width: "13%"}} src="../image/shirt.png"/>
									<Card.Text className="fw-lighter">Áo Sơ Mi Họa Tiết</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col className="p-2">
							<Card>
								<Card.Body className="d-flex flex-column justify-content-center align-items-center slick-slide">
									<Card.Img style={{width: "13%"}} src="../image/shirt.png"/>
									<Card.Text className="fw-lighter">Áo Sơ Mi Họa Tiết</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col className="p-2">
							<Card>
								<Card.Body className="d-flex flex-column justify-content-center align-items-center slick-slide">
									<Card.Img style={{width: "13%"}} src="../image/shirt.png"/>
									<Card.Text className="fw-lighter">Áo Sơ Mi Họa Tiết</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col className="p-2">
							<Card>
								<Card.Body className="d-flex flex-column justify-content-center align-items-center slick-slide">
									<Card.Img style={{width: "13%"}} src="../image/shirt.png"/>
									<Card.Text className="fw-lighter">Áo Sơ Mi Họa Tiết</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col className="p-2">
							<Card>
								<Card.Body className="d-flex flex-column justify-content-center align-items-center slick-slide">
									<Card.Img style={{width: "13%"}} src="../image/shirt.png"/>
									<Card.Text className="fw-lighter">Áo Sơ Mi Họa Tiết</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</main>
		</>
	);
}

export default App;
