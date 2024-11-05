import React from 'react'

export default function Carousel() {
    return (
        <div>
    <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
        <div className="carousel-inner" style={{ maxHeight: "500px" }}>
            <div className="carousel-caption" style={{ zIndex: "10" }}>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div className="carousel-item active">
                <img src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" className="d-block w-100" style={{ filter: "brightness(30%)", objectFit: "contain" }} alt="..." />
            </div>
            <div className="carousel-item">
                <img src="https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8fDA%3D" className="d-block w-100" style={{ filter: "brightness(30%)", objectFit: "contain" }} alt="..." />
            </div>
            <div className="carousel-item">
                <img src="https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDA%3D" className="d-block w-100" style={{ filter: "brightness(30%)", objectFit: "cover" }} alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
</div>

    )
}
