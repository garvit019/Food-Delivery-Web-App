import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

export default function
    () {
    const [search, setsearch] = useState('');
    const [foodcat, setfoodcat] = useState([]);
    const [fooditem, setfooditem] = useState([]);

    const loaddata = async () => {
        let response = await fetch("http://localhost:4000/api/fooddata", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        response = await response.json();
        // console.log(response[0],response[1]);

        setfoodcat(response[1]);
        setfooditem(response[0]);
    }

    useEffect(() => {
        loaddata();
    }, [])


    return (
        <div>
            <div><Navbar /></div>
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                    <div className="carousel-inner" style={{ maxHeight: "500px" }}>
                        <div className="carousel-caption" style={{ zIndex: "10" }}>
                            <div className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}} />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </div>
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
            <div className='container'>
                {
                    foodcat !== []
                        ? foodcat.map((data) => {
                            return (
                                <div className='row mb-3'>
                                    <div key={data._id} className='fs-3 m-3'>{data.CategoryName}</div>
                                    <hr />
                                    {fooditem !== []
                                        ? fooditem.filter((item) => (item.CategoryName === data.CategoryName)&&(item.name.toLowerCase().includes(search.toLocaleLowerCase()))).map(filteritems => {
                                            return (
                                                <div key={filteritems._id} className='col-12 col-md-6 col-lg-3 '>
                                                    <Card foodItem={filteritems}
                                                        options={filteritems.options[0]}
                                                        ></Card>
                                                </div>
                                            )
                                        })
                                        : <div>No such data exists</div>}
                                </div>



                            )
                        })
                        : <div>""</div>
                }


            </div>
            <div><Footer /></div>
        </div>
    )
}
