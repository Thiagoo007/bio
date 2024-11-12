import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Carousel, Container, Navbar, Row, Col } from "react-bootstrap";
import Footer from "@/components/Footer";

function WelcomePage() {
  const [showCarousel, setShowCarousel] = useState(true);

  return (
    <>
      <Navbar
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{
          backgroundImage: "linear-gradient(to right, #5E887C, #8D9E96, #8D9E96, #8D9E96, #5E887C)"
        }}
        variant="primary"
      >
        <Container className="d-flex justify-content-center align-items-center">
          <Navbar.Brand href="/" className="text-white">
            Biologar
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Banner de Boas-Vindas */}
      <Container className="my-5 text-center">
        <h1>Bem-vindo ao Biologar</h1>
        <p>Descubra o mundo fascinante da biologia com conteúdos e cursos de qualidade.</p>
      </Container>

      {/* Carrossel de Imagens */}
      {showCarousel && (
        <Container className="mb-5">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block mx-auto"
                src="https://blog.estacio.br/wp-content/uploads/2020/02/medicina.jpg"
                alt="Ecossistema Marinho"
                style={{ width: "50%" }} // Ajuste de largura da imagem
              />
              <Carousel.Caption>
                <h3>Medicina:</h3>
                <p>Veja este guia com informações sobre a carreira!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block mx-auto"
                src="https://blog.ead.unipar.br/wp-content/uploads/2021/04/ti.jpg"
                alt="Genética"
                style={{ width: "50%" }} // Ajuste de largura da imagem
              />
              <Carousel.Caption>
                <h3>TI</h3>
                <p>tecnologia da informação e qual a sua importância.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block mx-auto"
                src="https://saoluis.edufor.edu.br/uploads/courses/2022/02/graduacao-em-direito-1644868791.jpg"
                alt="Ecologia e Sustentabilidade"
                style={{ width: "50%" }} // Ajuste de largura da imagem
              />
              <Carousel.Caption>
                <h3>.Direito</h3>
                <p>Compreenda a importância da conservação ambiental</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      )}

      {/* Cards de Navegação */}
      <Container className="mb-5">
        <Row className="d-flex justify-content-around">
          <Col md={4}>
            <Card className="text-center mb-3">
              <Card.Body>
                <Card.Title>Explorar Biologia</Card.Title>
                <Card.Text>
                  Descubra conteúdos sobre os diversos ramos da biologia.
                </Card.Text>
                <Button variant="primary" href="/explorar">Saiba Mais</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center mb-3">
              <Card.Body>
                <Card.Title>Descubra Pesquisadores</Card.Title>
                <Card.Text>
                  Conheça especialistas que dedicam suas vidas à ciência.
                </Card.Text>
                <Button variant="primary" href="/pesquisadores">Saiba Mais</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center mb-3">
              <Card.Body>
                <Card.Title>Cursos em Destaque</Card.Title>
                <Card.Text>
                  Aprenda com nossos cursos práticos e interativos.
                </Card.Text>
                <Button variant="primary" href="/cursos">Saiba Mais</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Seção de Destaque */}
      <Container className="my-5 text-center">
        <h2>Curso em Destaque</h2>
        <p>
          <strong>Analise e desenvolvimento de Sistemas</strong> - Descubra o mundo das células e dos processos biológicos que sustentam a vida.
        </p>
        <Button variant="success" href="/cursos/destaque">Inscreva-se</Button>
      </Container>

      <Footer />
    </>
  );
}

export default WelcomePage;
