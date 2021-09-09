import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export default class News extends Component {

  // async updateNews(){
  //   this.setState({loading :true});
  //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b8c1ad4eb0554371acc135f473c81976&page=${this.state.page}&pageSize=${this.props.pageSize}`
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   // console.log(parsedData);
  //   this.setState({articles:parsedData.articles,
  //     totalResults:parsedData.totalResults,
  //         loading :false 
  //   })
  //     }

static defautProps={
  country :"in",
  pageSize :8,
}  
static propTypes={
  country:  PropTypes.string,
  pageSize: PropTypes.number,
  category : PropTypes.string,
}
   
  constructor() {
    super();
    this.state = {
      articles:[],
      loading: false,
      page : 1,
    };
  }

 async componentDidMount(){
   this.setState({loading :true});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b8c1ad4eb0554371acc135f473c81976&page=1&pageSize=${this.props.pageSize}`
let data = await fetch(url);
let parsedData = await data.json();
// console.log(parsedData);
this.setState({articles:parsedData.articles,
  totalResults:parsedData.totalResults,
    loading :false 
})
  };



 handleNextClick =async()=>{
   this.setState({loading :true});
      if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){  
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b8c1ad4eb0554371acc135f473c81976&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({articles:parsedData.articles,       
           page : this.state.page + 1,
          loading : false,
          });
  }

  // this.setState({
  //   page : this.state.page + 1,
  // });
  // this.updateNews()
  };

  handlePrevClick =async()=>{
    this.setState({loading :true});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b8c1ad4eb0554371acc135f473c81976&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({articles:parsedData.articles,       
       page : this.state.page - 1,
      loading : false});
    // this.setState({page: this.state.page - 1 });
    // this.updateNews();

  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">KabTak :- Top Trending News!!!!!!!!!!</h2>
      {this.state.loading && <Spinner/>}
          <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col md-4" key={element.url}>
                <NewsItem
                  title={element.title?element.title.slice(0,35):""}
                  desc={element.description?element.description.slice(0,78):""}
                  imageurl={element.urlToImage?element.urlToImage:"https://redzonekickboxing.com/wp-content/uploads/2017/04/default-image-620x600.jpg"}
                  newsUrl = {element.url}
                  author  = {element.author}
                  publishedAt = {element.publishedAt}
                />
              </div>
            );
          })}
        </div>
          <div className="container d-flex justify-content-around">

          <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&laquo;Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next&raquo;</button> 



          </div>


      </div>
    );
  }
}
