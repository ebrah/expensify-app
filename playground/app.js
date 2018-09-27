

class Counter extends React.Component{
    constructor(props){
        super(props);
        
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinuzOne = this.handleMinuzOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
           count:0
        };
    }
 
    handleAddOne(){
       this.setState((prevState) => {
           return {
               count: prevState.count +1
           }
       });
    }
    handleMinuzOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            }
        });
    }
    handleReset(){
        this.setState(() => {
            return {
                count: 0
            }
        });
    }
    render(){
        return (
         <div>
           <h1> Count:{this.state.count} </h1>
           <button onClick={this.handleAddOne}> +1 </button>
           <button onClick={this.handleMinuzOne}> -1 </button>
           <button onClick={this.handleReset}> reset All </button>
         </div>
        );
    }
}

 ReactDOM.render(<Counter />, document.getElementById('container'));