import React, { Component } from "react";

export default class NewsItem extends Component {

  

  render() {
    let { title, desc, imageurl ,newsUrl,publishedAt,author} = this.props;
    return (
      <div className="my-2">
        <div className="card" style={{ width: "18rem",minHeight:"55vh" }}>
          <img src={imageurl} className="card-img-top" style={{maxHeight:"20vh"}} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
                {desc}....
            </p><small className="text-muted">By: {author?author:"Unknown"} ,On{new Date (publishedAt).toGMTString()}</small><br />
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary my-2">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
