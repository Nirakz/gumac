import { Card, Col, Container, Navbar, Row } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

function App() {
	return (
		<>
			<Header />
			<Main />
			<footer style={{ backgroundColor: "#d8eef1", paddingTop: "3rem", marginTop: "3rem" }}>
				<Container>
					<Row>
						<Col>
							<Row md={1}>
								<Col>
									<Card.Img
										style={{ width: "158px", height: "101px" }}
										src="../image/logo-footer.png"
									/>
								</Col>
								<Col className="mt-4" style={{ width: "295px" }}>
									Tự hào là thương hiệu Việt, không chỉ mang đến những sản phẩm đẹp mà còn trao gửi
									những Giá trị thật - Hạnh phúc đích thực đến tận tay khách hàng.
								</Col>
								<Col className="my-5">
									<FaFacebookF color="#3185d6" fontSize={30} />
									<SiZalo className="ms-3" fontSize={35} color="#36bef0" />
									<FaYoutube className="ms-3" fontSize={30} color="#f62e2f" />
									<FaTiktok className="ms-3" fontSize={25} />
								</Col>
							</Row>
						</Col>
						<Col>
							<span style={{ fontSize: "17px", cursor: "pointer" }} className="fw-bold">
								TRUY CẬP NHANH
							</span>
							<Row className="mt-4" md={2}>
								<Col>
									<Row md={1}>
										<Col>
											<Navbar.Brand className="top-menu-item" href="#">
												Trang Chủ
											</Navbar.Brand>
										</Col>
										<Col className="mt-3">
											<Navbar.Brand className="top-menu-item" href="#">
												Bộ sưu tập
											</Navbar.Brand>
										</Col>
										<Col className="mt-3">
											<Navbar.Brand className="top-menu-item" href="#">
												Tuyển dụng
											</Navbar.Brand>
										</Col>
									</Row>
								</Col>
								<Col>
									<Row style={{width: "256px"}} md={1}>
										<Col>
											<Navbar.Brand className="top-menu-item" href="#">
												Đầm
											</Navbar.Brand>
										</Col>
										<Col className="mt-3">
											<Navbar.Brand className="top-menu-item" href="#">
												Áo sơ mi
											</Navbar.Brand>
										</Col>
										<Col className="mt-3">
											<Navbar.Brand className="top-menu-item" href="#">
												Quần
											</Navbar.Brand>
										</Col>
										<Col className="mt-3">
											<Navbar.Brand className="top-menu-item" href="#">
												Áo thun
											</Navbar.Brand>
										</Col>
										<Col className="mt-3">
											<Navbar.Brand className="top-menu-item" href="#">
												Chân váy
											</Navbar.Brand>
										</Col>
										<Col className="mt-3">
											<Navbar.Brand className="top-menu-item" href="#">
												Quần short
											</Navbar.Brand>
										</Col>
									</Row>
								</Col>
							</Row>
						</Col>
						<Col>
							<span style={{ fontSize: "17px", cursor: "pointer" }} className="fw-bold">
								NÀNG HỎI - GU ĐÁP
							</span>
							<Row className="mt-4" md={1}>
								<Col>
									<Navbar.Brand className="top-menu-item" href="#">
										Hướng dẫn đặt hàng tại Gumac.vn
									</Navbar.Brand>
								</Col>
								<Col className="mt-3">
									<Navbar.Brand className="top-menu-item" href="#">
										Hướng dẫn chọn size váy - đầm cùng Gumac.vn
									</Navbar.Brand>
								</Col>
								<Col className="mt-3">
									<Navbar.Brand className="top-menu-item" href="#">
										Chính sách khách hàng thân thiết
									</Navbar.Brand>
								</Col>
								<Col className="mt-3">
									<Navbar.Brand className="top-menu-item" href="#">
										Chính sách bảo mật thông tin khách hàng
									</Navbar.Brand>
								</Col>
								<Col className="mt-3">
									<Navbar.Brand className="top-menu-item" href="#">
										Chính sách bảo hành và đổi sản phẩm
									</Navbar.Brand>
								</Col>
								<Col className="mt-3">
									<Navbar.Brand className="top-menu-item" href="#">
										Quy định về thanh toán và vận chuyển
									</Navbar.Brand>
								</Col>
								<Col className="mt-3">
									<Navbar.Brand className="top-menu-item" href="#">
										Liên hệ
									</Navbar.Brand>
								</Col>
							</Row>
						</Col>
						<Col>
							<span style={{ fontSize: "17px", cursor: "pointer" }} className="fw-bold">
								CÁCH THỨC THANH TOÁN
							</span>
							<Row className="mt-4" md={4}>
								<Col><Card.Img src="../image/money.svg"/></Col>
								<Col><Card.Img src="../image/banking.svg"/></Col>
								<Col><Card.Img src="../image/momo.svg"/></Col>
								<Col><Card.Img src="../image/vnpay.svg"/></Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</footer>
		</>
	);
}

export default App;
