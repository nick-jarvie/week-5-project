import React from 'react'
import request from 'superagent'

class App extends React.Component {
  state = {
    quote: ''
  }

  componentDidMount() {
    this.getMyQuote()
  }

  handleClick = () => {
    this.getMyQuote()
  }

  getMyQuote = () => {
    request.get('https://api.kanye.rest')
      .then(res => {
        this.setState({
          quote: res.body.quote
        })
      })
  }

  render() {
    return (
      <>
      <div className='body'>
        <h1>
            {/* <pre className='body'> */}
              KANYE
              QUOTE
              GENER
              -ATOR
               
              
            {/* </pre> */}
          </h1>
        {/* <button className='button' onClick={this.handleClick}>Click here!</button> */}
        <p className='quote' onClick={this.handleClick}>{this.state.quote}</p>
      </div>
      </>
    )
  }
}

export default App
