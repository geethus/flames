class App extends React.Component {
	constructor(){
  	super();
    this.state = {
    		myName: "Charu latha",
     	  friendName: "Sasi",
        result: "",
        showResult: false
    }
    this.handleName = this.handleName.bind(this);
    this.calculate =	this.calculate.bind(this);
    this.reset =	this.reset.bind(this);
  }
  handleName(event) {
  	this.setState({[event.target.name]:event.target.value});
  }
  calculate() {
  	var mname = (this.state.myName.toLowerCase()).replace(/\ /g, "");
    var fname = (this.state.friendName.toLowerCase()).replace(/\ /g, "");
    var baseString = "FLAMES";
    
    for (var m=0; m<mname.length; m++) {
    	for (var n=0; n<fname.length; n++) {
      	if (mname.charAt(m) == fname.charAt(n)) { 
        	mname = mname.substr(0, m) + "*" + mname.substr(m+1, mname.length);
          fname = fname.substr(0, n) + "*" + fname.substr(n+1, fname.length);
          break;
        }
      }
    }

		var resname = (mname + fname).replace(/\*/g, "");
		var rescount = resname.length;
    var tmplen, temp, result, optn = '';
    
    if (rescount > 0) {
    	while (baseString.length > 1) {
    		  tmplen = rescount % baseString.length;
          if (tmplen != 0) {
          	temp = baseString.substr(tmplen) + baseString.substr(0, tmplen-1);
          }
          else {
          	temp = baseString.substr(0, baseString.length-1);
          }
          baseString = temp;
      }
      optn = baseString;
   }   
      switch (optn) {
        case 'F':
            result = "Friendship";
            break;
        case 'L':
            result = "Lovers";
            break;
        case 'A':
            result = "Affection";
            break;
        case 'M':
            result = "Marriage";
            break;
        case 'E':
            result = "Enemity";
            break;
        case 'S':
            result = "Siblings";
            break;
        default:
            result = "FLAME Test works only for different names";
            break;
    }
        
  	this.setState(prevState => ({result: result, showResult: !prevState.showResult}));
  }
  reset() {
  	this.setState(prevState => ({myName: "", friendName: "", showResult: !prevState.showResult}));
  }
  
  render(){
  	return(
    	<form name="flames">
      	<fieldset>
        	<legend>Flames</legend>
      		<p>
        		<label>Your Name : </label>
       			<input type="text" placeholder="Enter your Name" value={this.state.myName} onChange={this.handleName} name="myName" />
        	</p>
        	<p>
        		<label>Friend Name : </label>
        		<input type="text" placeholder="Enter Friend Name" value={this.state.friendName} onChange={this.handleName} name="friendName" />
        	</p>
        	<center>
        		<input type="button" value="Calculate" onClick={this.calculate} className={this.state.showResult ? "hide" : ""} disabled={!this.state.friendName || !this.state.myName} />
            <input type="button" value="Reset" onClick={this.reset} className={this.state.showResult ? "" : "hide"} />
      	  </center>
          <p className={this.state.showResult ? "" : "hide"}>
          	Result is <b>{this.state.result}</b>
          </p>
      	</fieldset>    
      </form>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('container'));

