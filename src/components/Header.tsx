import React, { useState } from "react";
import "./Header.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import { FaMagnifyingGlassLocation, FaLocationDot } from "react-icons/fa6";
import Card from "react-bootstrap/Card";
import { BsPerson, BsHeart, BsCartCheck } from "react-icons/bs";
import { NavDropdown } from "react-bootstrap";

export default function Header() {
	const [showDropdown, setShowDropdown] = useState(false);

	const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

	const handleMouseEnter = () => {
		const id = setTimeout(() => {
			setShowDropdown(true);
		}, 300); // 200 milliseconds = 0.2 seconds
		setTimeoutId(id);
	};

	const handleMouseLeave = () => {
		if (timeoutId) {
			clearTimeout(timeoutId);
			setTimeoutId(null);
		}

		setShowDropdown(false);
	};

	const [showDropdown2, setShowDropdown2] = useState(false);

	const [timeoutId2, setTimeoutId2] = useState<NodeJS.Timeout | null>(null);

	const handleMouseEnter2 = () => {
		const id = setTimeout(() => {
			setShowDropdown2(true);
		}, 200); // 200 milliseconds = 0.2 seconds
		setTimeoutId2(id);
	};

	const handleMouseLeave2 = () => {
		if (timeoutId2) {
			clearTimeout(timeoutId2);
			setTimeoutId2(null);
		}

		setShowDropdown2(false);
	};

	return (
		<header>
			<Container
				fluid
				style={{
					backgroundImage: `url("../image/header_bg_top.jpg")`,
					backgroundSize: "cover",
					height: "3.125rem",
				}}
				className="t-header"
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
				<Row md={5} className="p-3 align-items-center bg-light">
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
								<NavDropdown
									title="THỜI TRANG"
									id="basic-nav-dropdown"
									show={showDropdown}
									onMouseEnter={handleMouseEnter}
									onMouseLeave={handleMouseLeave}
									className="top-menu-item"
								>
									<div className="mt-4">
										<Row className="d-flex align-items-center justify-content-center">
											<Col className="d-flex  justify-content-center">
												<Card.Img style={{ width: "300px" }} src="../image/1000x1190px.jpg" />
											</Col>
											<Col sm={5}>
												<Row lg={4}>
													<Col className="d-flex flex-column">
														<Navbar.Brand href="#" className="mb-1 top-menu-item fw-bold">
															Váy Đầm
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="my-1 top-menu-item fw-light text-secondary"
														>
															Váy Đầm Công Sở
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="my-1 top-menu-item fw-light text-secondary"
														>
															Váy Đầm Form A
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="my-1 top-menu-item fw-light text-secondary"
														>
															Váy Đầm Sơ Mi
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="my-1 top-menu-item fw-light text-secondary"
														>
															Váy Đầm Caro
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="my-1 top-menu-item fw-light text-secondary"
														>
															Váy Đầm Xuông
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="my-1 top-menu-item fw-light text-secondary"
														>
															Váy Đầm Xòe
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="my-1 top-menu-item fw-light text-secondary"
														>
															Váy Đầm Vest
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="my-1 top-menu-item fw-light text-secondary"
														>
															Váy Đầm Xếp ly
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="mt-1 top-menu-item fw-light text-secondary"
														>
															Váy Đầm Dự Tiệc
														</Navbar.Brand>
													</Col>
													<Col className="d-flex flex-column">
														<Navbar.Brand href="#" className="mb-1 top-menu-item fw-bold">
															Áo Sơ Mi
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="my-1 top-menu-item fw-light text-secondary"
														>
															Áo Sơ Mi Tay Dài
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="my-1 top-menu-item fw-light text-secondary"
														>
															Áo Sơ Mi Tay Ngắn
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="my-1 top-menu-item fw-light text-secondary"
														>
															Áo Sơ Mi Họa Tiết
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="my-1 top-menu-item fw-light text-secondary"
														>
															Áo Sơ Mi Kiểu
														</Navbar.Brand>
														<Navbar.Brand href="#" className="my-1 top-menu-item fw-bold">
															Áo Thun
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="my-1 top-menu-item fw-light text-secondary"
														>
															Áo Thun Nữ Cổ Tròn
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="my-1 top-menu-item fw-light text-secondary"
														>
															Áo Thun Nữ Polo
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="my-1 top-menu-item fw-light text-secondary"
														>
															Áo Thun Nữ Cố Tim
														</Navbar.Brand>
													</Col>
													<Col className="d-flex flex-column">
														<Navbar.Brand href="#" className="mb-1 top-menu-item fw-bold">
															Váy Đầm
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="my-1 top-menu-item fw-light text-secondary"
														>
															Áo Sơ Mi Tay Dài
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="my-1 top-menu-item fw-light text-secondary"
														>
															Áo Sơ Mi Tay Ngắn
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="my-1 top-menu-item fw-light text-secondary"
														>
															Áo Sơ Mi Họa Tiết
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="my-1 top-menu-item fw-light text-secondary"
														>
															Áo Sơ Mi Kiểu
														</Navbar.Brand>
														<Navbar.Brand href="#" className="my-1 top-menu-item fw-bold">
															Áo Thun
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="my-1 top-menu-item fw-light text-secondary"
														>
															Áo Thun Nữ Cổ Tròn
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="my-1 top-menu-item fw-light text-secondary"
														>
															Áo Thun Nữ Polo
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="my-1 top-menu-item fw-light text-secondary"
														>
															Áo Thun Nữ Cố Tim
														</Navbar.Brand>
													</Col>
													<Col className="d-flex flex-column">
														<Navbar.Brand href="#" className="mb-1 top-menu-item fw-bold">
															Váy Đầm
														</Navbar.Brand>
														<Navbar.Brand href="#" className="mb-1 top-menu-item fw-bold">
															Váy Đầm
														</Navbar.Brand>
														<Navbar.Brand href="#" className="mb-1 top-menu-item fw-bold">
															Váy Đầm
														</Navbar.Brand>
														<Navbar.Brand href="#" className="mb-1 top-menu-item fw-bold">
															Váy Đầm
														</Navbar.Brand>
														<Navbar.Brand href="#" className="mb-1 top-menu-item fw-bold">
															Váy Đầm
														</Navbar.Brand>
														<Navbar.Brand href="#" className="mb-1 top-menu-item fw-bold">
															Váy Đầm
														</Navbar.Brand>
														<Navbar.Brand href="#" className="mb-1 top-menu-item fw-bold">
															Váy Đầm
														</Navbar.Brand>
														<Navbar.Brand href="#" className="mb-1 top-menu-item fw-bold">
															Váy Đầm
														</Navbar.Brand>
														<Navbar.Brand href="#" className="mb-1 top-menu-item fw-bold">
															Váy Đầm
														</Navbar.Brand>
													</Col>
												</Row>
											</Col>
											<Col className="d-flex  justify-content-center">
												<Card.Img style={{ width: "300px" }} src="../image/1000x1190px2.jpg" />
											</Col>
										</Row>
									</div>
								</NavDropdown>
							</Col>
							<Col>
								<NavDropdown
									title="BỘ SƯU TẬP"
									id="basic-nav-dropdown"
									show={showDropdown2}
									onMouseEnter={handleMouseEnter2}
									onMouseLeave={handleMouseLeave2}
									className="top-menu-item d-flex"
								>
									<div className="mt-4">
										<Row className="d-flex align-items-center justify-content-center">
											<Col className="d-flex  justify-content-center">
												<Card.Img
													style={{ width: "300px" }}
													src="../image/toolbar-200x238px-1-2.jpg"
												/>
											</Col>
											<Col sm={5}>
												<Row lg={3}>
													<Col className="d-flex flex-column">
														<Navbar.Brand href="#" className="top-menu-item fw-bold-2">
															Váy Đầm
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="mt-2 top-menu-item fw-bold-2"
														>
															Váy Đầm
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="mt-2 top-menu-item fw-bold-2"
														>
															Váy Đầm
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="mt-2 top-menu-item fw-bold-2"
														>
															Váy Đầm
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="mt-2 top-menu-item fw-bold-2"
														>
															Váy Đầm
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="mt-2 top-menu-item fw-bold-2"
														>
															Váy Đầm
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="mt-2 top-menu-item fw-bold-2"
														>
															Váy Đầm
														</Navbar.Brand>
													</Col>
													<Col className="d-flex flex-column">
														<Navbar.Brand href="#" className="top-menu-item fw-bold-2">
															Váy Đầm
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="mt-2 top-menu-item fw-bold-2"
														>
															Váy Đầm
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="mt-2 top-menu-item fw-bold-2"
														>
															Váy Đầm
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="mt-2 top-menu-item fw-bold-2"
														>
															Váy Đầm
														</Navbar.Brand>
														<Navbar.Brand
															href="#"
															className="mt-2 top-menu-item fw-bold-2"
														>
															Váy Đầm
														</Navbar.Brand>
													</Col>
													<Col sm={8} className="d-flex flex-column">
														<Navbar.Brand
															href="#"
															className="mt-2 top-menu-item fw-bold-2"
														>
															THEO XU HƯỚNG
														</Navbar.Brand>
														<Row md={2} className="mt-2">
															<div
																className="d-flex flex-column text-center top-menu-item"
																style={{ cursor: "pointer" }}
															>
																<Card.Img
																	style={{ width: "80px" }}
																	className="rounded-circle"
																	src="../image/artboard-1.jpg"
																/>
																<span className="fw-lighter">CÔNG SỞ</span>
															</div>
															<div
																className="d-flex flex-column text-center top-menu-item"
																style={{ cursor: "pointer" }}
															>
																<Card.Img
																	style={{ width: "80px" }}
																	className="rounded-circle"
																	src="../image/artboard-4-1.jpg"
																/>
																<span className="fw-lighter">CÔNG SỞ</span>
															</div>
															<div
																className="d-flex flex-column text-center top-menu-item"
																style={{ cursor: "pointer" }}
															>
																<Card.Img
																	style={{ width: "80px" }}
																	className="rounded-circle"
																	src="../image/artboard-3.jpg"
																/>
																<span className="fw-lighter">CÔNG SỞ</span>
															</div>
															<div
																className="d-flex flex-column text-center top-menu-item"
																style={{ cursor: "pointer" }}
															>
																<Card.Img
																	style={{ width: "80px" }}
																	className="rounded-circle"
																	src="../image/artboard-2.jpg"
																/>
																<span className="fw-lighter">CÔNG SỞ</span>
															</div>
														</Row>
													</Col>
												</Row>
											</Col>
											<Col className="d-flex  justify-content-center">
												<Card.Img
													style={{ width: "300px" }}
													src="../image/toolbar-200x238px-2-2.jpg"
												/>
											</Col>
										</Row>
									</div>
								</NavDropdown>
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
