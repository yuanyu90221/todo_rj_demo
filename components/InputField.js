class InputField extends React.Component{

	render(){
		let {placeholder} = this.props;
		return (<div>
					<input type="text" placeholder={placeholder}/>
				</div>);
	}
}

window.App.InputField = InputField;