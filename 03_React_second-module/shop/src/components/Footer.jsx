function Footer() {
    return (
        <footer className="navbar bg-dark fixed-bottom">
            <div className="container-fluid">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text" href="#!">
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
