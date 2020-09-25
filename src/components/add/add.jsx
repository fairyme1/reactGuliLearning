import React , {Component} from 'react'
import UUID from 'uuid'

import './add.css'

export default class Add extends Component{
    add = ()=>{
        let {addComment} = this.props

        let {name} = this.refs
        let {content} = this

        if(!name.value.trim() || !content.value.trim()){
            alert('评论不能空！')
            return
        }

        addComment({ id: UUID(),name: name.value,content: content.value})
        this.refs.name.value =''
        this.content.value =''
    }

 render(){
     return (
        <div className="col-md-4">
          <form className="form-horizontal">
            <div className="form-group">
              <label>用户名</label>
              <input type="text" className="form-control" placeholder="用户名"  ref="name"/>
            </div>
            <div className="form-group">
              <label>评论内容</label>
              <textarea className="form-control" rows="6" placeholder="评论内容" ref={ (content)=>{this.content =content} }></textarea>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="button" className="btn btn-default pull-right" onClick={this.add}>提交</button>
              </div>
            </div>
          </form>
        </div>
       
     )
 }
}