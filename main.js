var React = require('react')
var ReactDom = require('react-dom')

var Parent = React.createClass({
    getInitialState:function(){
        return {data:'Hello'}
    },
    changeMe: function(){
        this.setState({data:'World'})
    },
    render: function() {
        return(<div>Parent state - {this.state.data} <Child passeddata = {this.state.data} triggerfunction ={this.changeMe} /></div>)
    }
});


var Child = React.createClass({
    render: function() {
        return(<button onClick={this.props.triggerfunction}>Change parent state</button>)
    }
});

ReactDom.render(<Parent/>, document.getElementById('app'))