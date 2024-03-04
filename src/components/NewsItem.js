import React, {Component} from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date} = this.props;
    
    return (
             <div className='my-3'>
                    <div className="card">
                    <img className="card-img-top" src={!imageUrl?"https://lh3.googleusercontent.com/Ryg5ih-fOWbpEGDpbJYJz5RTq3_28Tvo2h3JQRCdiz16lw5ghitDMN6hcWA57g0d6_8VOqQYcCemRBOfZGQA64ZKkFOn71zuF1LDsXwCh4ywF-_z6VqxbBqmbQvK_-PWfZcztxDd1WDTEEUHX6GdP60":imageUrl} alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text">Published by {!author?"Unknown Author":author}, on {new Date(date).toGMTString()}.</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Go somewhere</a>
                    </div>
                    </div>
            </div>
    )
  }
}

export default NewsItem