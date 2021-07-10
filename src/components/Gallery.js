function Gallery(){
    return (
        <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100 slider_custom" src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="First slide" />
          </div>
          <div className="carousel-item ">
            <img className="d-block w-100 slider_custom" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X6g4OFwA7sd7ZmukqKRkLy38jf6SrITG5rps5fUDip414ygRA1mhbagGQxco8_3qVSE&usqp=CAU" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 slider_custom" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
}

export default Gallery;