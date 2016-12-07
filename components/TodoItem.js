class TodoItem extends React.Component{
	constructor(props, context){
		super(props, context);

		this.state = {editable: false};

		this.toggleEditMode = this.toggleEditMode.bind(this);
		// this.toggleViewMode = this.toggleViewMode.bind(this);
	}

	toggleEditMode(){
		this.setState({editable: !this.state.editable});
	}

	renderViewMode(){
		const {title, completed, onDelete} = this.props;

		return(
			<div>
				<input type="checkbox" checked={completed}/>
				<span onDoubleClick={this.toggleEditMode}>{title}</span>
				<button onClick={() => onDelete && onDelete()}>x</button>
			</div>
		);
	}

	renderEditMode(){
		// const {title} = this.props;
		return(
		<input
			autoFocus
			placeholder ="編輯待辦事項"
			value = {this.props.title}
			onBlur = {this.toggleEditMode}
			onKeyDown = {(e)=>{
					if(e.keyCode === 27)
				    {
				    	e.preventDefault();
				    	this.toggleEditMode();
					}
				}
			}
		/>
		);
	}

	render(){
		return this.state.editable? this.renderEditMode():this.renderViewMode();
	}
}

TodoItem.propTypes = {
	title: React.PropTypes.string,
	completed: React.PropTypes.bool
};
window.App.TodoItem = TodoItem;