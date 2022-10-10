function Card1K(props) {
  return (
    <div>
      <div className="container wid1k">
        <div className="row">
          <ul className="list-group">
            {props.karir.map((e, i) => (
              <li style={{ border: "none", height: "70px" }} key={i} className="list-group-item d-flex justify-content-between">
                <div className="content-box card-textHome item-carrier item-carrierq" style={{ fontWeight: "700"}}>
                  {e}
                </div>
                <div className="btn-box">
                  <button type="button" className="btn-link12 btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    See more
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex={"-1"} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1K;
