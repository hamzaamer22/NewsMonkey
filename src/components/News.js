import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'us',
        pageSize: 8,
        category:"general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props){
        super(props);
        console.log("hello i am constructor from news component");
        this.state={
            articles: [],
            loading: false,
            page:1
        }
        document.title=`${this.props.category} - News Monkey`;
    }

    async updateNews(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3ac98a2865d54546830627af26e2edcf&page=${this.state.page}&PageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.setState({loading:true});
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            totalResults: parsedData.totalResults,
            articles: parsedData.articles,
            loading: false
        })
    }

    async componentDidMount(){
        this.updateNews();
    }


    handlePrevClick= async ()=>{
        console.log("prev");
        this.setState({page:this.state.page-1});
        this.updateNews();
    }

    handleNextClick=async ()=>{
        console.log("next");
        this.setState({page:this.state.page+1});
        this.updateNews();
    }

  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{margin:'35px 0px'}}>News Monkey - Top headlines</h1>
        <h4 className="text-center">{this.props.category}</h4>
        {this.state.loading && <Spinner/>}
        <div className='row'>
            {!this.state.loading && this.state.articles.map((element)=> {   // ? before .map fixes it partially
                return  <div className='col-md-4' key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,90):""} imageUrl={element.urlToImage} newsUrl={element.url}  author={element.author} date={element.publishedAt} />
                        </div>
            })}
            
        </div>
        <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" rel="noreferer" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
      
    )
  }
}

export default News