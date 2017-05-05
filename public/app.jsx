var PrintMessage = React.createClass({
  render : function(){
    var name = this.props.name;
    return(
      <div>
        <h1>Hello {name}!!</h1>
        <p>{this.props.message}</p>
      </div>
    );
  }
});

var PrintForm = React.createClass({
  onFormSubmit : function(e){
    e.preventDefault();
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    var update = {};
    if(name.length > 0)
    {
     this.refs.name.value = "";
     update.name = name;

    }
    if(message.length > 0)
    {
     this.refs.message.value = "";
     update.message = message;
    }
    this.props.onNewUpdate(update);
  },

  render : function(){
    return(
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="name" placeholder="Enter Name"/><br/>
            <textarea ref="message" rows="4" cols="25"/><br/>
            <button>Set Name</button>
          </form>
        </div>
      );
    }
});

var PrintHello = React.createClass({
  getDefaultProps: function(){
    return {
      name : 'Name from Default',
      message : 'This is from Default'
    };
  },
  getInitialState: function(){
    return{
      name : this.props.name,
      message : this.props.message
    };
  },
  handleNewUpdate : function(update){
    this.setState(update);
  },
  // handleNewName : function(name){
  //  this.setState({
  //    name : name
  //  });
  // },
  // handleNewMessage : function(message){
  //  this.setState({
  //    message : message
  //  });
  // },
  render : function(){
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
      <PrintMessage name={name} message={message}/>
      <PrintForm  onNewName={this.handleNewName} onNewUpdate={this.handleNewUpdate}/>
      </div>
    );
  }
});

var firstname = 'Emmanuel';
ReactDOM.render(
   <PrintHello name={firstname} message="This is from props" />,
    document.getElementById('app')
  );
