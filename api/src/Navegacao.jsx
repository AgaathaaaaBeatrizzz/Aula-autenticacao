return (
        <>
            <Navbar style={estiloNavbar}>
                <Container>
                    <Navbar.Brand href="/" style={estiloNavOptions}>Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/pessoas" style={estiloNavOptions}>Pessoas</Nav.Link>
                    </Nav>
                    <Button href='/login' variant='light'>Login</Button>
                    <Button variant='light' onClick={logout}>Sair</Button>  {/* botão para o usuário sair do sistema */}
                </Container>
            </Navbar>
        </>
    );