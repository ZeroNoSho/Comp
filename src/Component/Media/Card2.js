function Card2(props) {
  return (
    <div id="rilis" className="container">
      <div className="row">
        {props.nam1.map((e, index) => (
          <div key={index} className="col-md-3 col-key">
            <div className="card cardM">
              <img src={props.foto[index]} className="card-img-top" alt="" />
              <div className="card-body">
                <h5>{e}</h5>
                <button className="btnM btn btn-primary" type="button">
                  <b> READ ARTICLE</b>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card2;
