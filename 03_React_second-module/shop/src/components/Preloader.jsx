function Preloader() {
    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: '60vh' }}
        >
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Preloader;
