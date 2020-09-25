import React , {Component} from 'react'


import Add from './components/add/add'
import List from  './components/list/list'


import './bootstrap.css'


export default class App extends Component{

  state = {
    comments: [
    ]
  }

  addComment = (commentObj)=>{
        // comments不能直接修改,获取原状态
    let comments = [...this.state.comments]
      // 追加数组
      comments.unshift(commentObj)
      // 赋值
      this.setState({comments})
  }

  deleteComment = (id)=>{
    let comments = [...this.state.comments]
    comments= comments.filter((item)=>{
          return item.id !== id
    })
    this.setState({comments})
  }

 render(){

     let {comments} = this.state

     return (
      <div>
      <header className="site-header jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1>请发表对React的评论</h1>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <Add addComment={this.addComment} />
        <List comments={comments} deleteComment={this.deleteComment} />
      </div>
    </div>
     )
 }
}