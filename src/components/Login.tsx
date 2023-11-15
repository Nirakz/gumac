import { Button, Card, Container, Form } from "react-bootstrap";
import "./Login.css";

const Login: React.FC = () => {
	return (
		<>
			<main style={{ backgroundColor: "#f6eee1" }}>
				<Container fluid className="d-flex">
					<Card
						style={{ maxWidth: "28.875rem", position: "absolute", width: "600px", left: "150px" }}
						className="mt-5"
					>
						<Form className="mx-4 my-5 ">
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label className="fs-2 fw-bold">Đăng nhập</Form.Label>
								<br />
								<Form.Text className="text-muted">
									Trở thành thành viên của Gumac{" "}
									<span style={{ color: "#00aeef", cursor: "pointer" }}>Đăng ký ngay</span>
								</Form.Text>
								<br />
								<Form.Label className="text-muted mt-4">Email/Số điện thoại</Form.Label>
								<Form.Control className="rounded-pill" type="text" />
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label className="text-muted">Mật khẩu</Form.Label>
								<Form.Control className="rounded-pill" type="password" />
							</Form.Group>
							<div className="d-flex flex-row align-items-center justify-content-between">
								<Button className="rounded-pill fw-bold px-4 py-2" variant="dark" type="submit">
									Đăng nhập
								</Button>
								<span style={{ color: "#00aeef", cursor: "pointer" }}>Quên mật khẩu</span>
							</div>
						</Form>
					</Card>
					<Card.Img style={{ marginLeft: "500px" }} src="../image/image83.png" />
				</Container>
			</main>
		</>
	);
};

export default Login;
