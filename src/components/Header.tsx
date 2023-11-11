import React from "react";
import "./Header.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import { FaMagnifyingGlassLocation, FaLocationDot } from "react-icons/fa6";
import Card from "react-bootstrap/Card";
import { BsPerson, BsHeart, BsCartCheck } from "react-icons/bs";

export default function Header() {
	return (
		<header>
			<Container
				fluid
				style={{
					backgroundImage: `url("../image/header_bg_top.jpg")`,
					backgroundSize: "cover",
					height: "3.125rem",
				}}
			>
				<Row
					className="align-items-center text-white text-center"
					style={{
						height: "3.125rem",
						fontSize: "14px",
					}}
				>
					<Col md={4}>
						<Navbar.Brand href="#">Hotline đặt hàng 18006013</Navbar.Brand>
					</Col>
					<Col className="ms-6">
						<Row className="align-items-center" md={3}>
							<Col className="ms-5" md="auto">
								<FaMagnifyingGlassLocation />
								<Navbar.Brand className="ms-1" href="#">
									Tra cứu tình trạng đơn hàng
								</Navbar.Brand>
							</Col>
							<Col className="ms-5" md="auto">
								<FaLocationDot />
								<Navbar.Brand className="ms-1" href="#hme">
									Hệ thống Showroom
								</Navbar.Brand>
							</Col>
							<Col className="ms-5" md={4}>
								<Form.Control
									className="text-white"
									style={{
										backgroundColor: `hsla(0,0%,100%,.24)`,
										borderRadius: "1.375rem",
										height: "2.375rem",
									}}
									type="email"
									placeholder="Tìm kiếm sản phẩm"
								/>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
			<Container fluid className="bg-light">
				<Row className="p-3 align-items-center">
					<Col>
						<Card.Img style={{ width: "100%", height: "30px" }} src="../image/gumac-headerlogo.svg" />
					</Col>
					<Col sm={7}>
						<Row md={7} className="text-center">
							<Col className="fw-bold text-danger">
								<Navbar.Brand href="#">DEAL SỐC</Navbar.Brand>
							</Col>
							<Col className="fw-bold text-danger">
								<Navbar.Brand href="#">FLASH SALE</Navbar.Brand>
							</Col>
							<Col>
								<Navbar.Brand className="top-menu-item" href="#">
									HÀNG MỚI
								</Navbar.Brand>
							</Col>
							<Col>
								<Navbar.Brand className="top-menu-item" href="#">
									THỜI TRANG
								</Navbar.Brand>
							</Col>
							<Col>
								<Navbar.Brand className="top-menu-item" href="#">
									BỘ SƯU TẬP
								</Navbar.Brand>
							</Col>
							<Col>
								<Navbar.Brand className="top-menu-item" href="#">
									TIN TỨC
								</Navbar.Brand>
							</Col>
							<Col>
								<Navbar.Brand className="top-menu-item" href="#">
									VỀ GUMAC
								</Navbar.Brand>
							</Col>
						</Row>
					</Col>
					<Col>
						<Row className="ms-4 large-icon">
							<Col md="auto">
								<Navbar.Brand href="#">
									<BsPerson />
								</Navbar.Brand>
							</Col>
							<Col md="auto">
								<Navbar.Brand href="#">
									<BsHeart />
								</Navbar.Brand>
							</Col>
							<Col md="auto">
								<Navbar.Brand href="#">
									<BsCartCheck />
								</Navbar.Brand>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
			<Container className="slider" fluid>
				<div className="slide">
					<Card.Img src="../image/1600x635-2.jpg"></Card.Img>
				</div>
			</Container>
		</header>
	);
}
