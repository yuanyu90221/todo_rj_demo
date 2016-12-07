const {TodoHeader, InputField, TodoList} = window.App;

class TodoApp extends React.Component{
	constructor(props, context) {
		super(props, context);
		this.state = {
			todos : [{
					id: 0,
					title: "Item 0",
					completed : false
				},
				{
					id: 1,
					title: "Item 1",
					completed : false
				},
				{
					id: 3,
					title: "Item 3",
					completed : true
				},
				{
					id: 4,
					title: "Item 4",
					completed : true
				}
			]
		};
	}
	render(){
		let headerProps = {
			title:"我的待辦事項",
			username:"Json",
			todoCount:99
		};
		const { todos } = this.state;
		return (
		<div>
			<TodoHeader title="我的待辦事項" username="Json"
				todoCount={(todos.filter((todo)=>!todo.completed)).length}
			/>
			<InputField placeholder="新增待辦事項"/>
			<TodoList todos={todos.filter((todo)=>!todo.completed)}
				onDeleteTodo ={
					(id)=> this.setState({
						todos: _deleteTodo(todos, id)
					})
				}
			/>
		</div>);
	}
}

const _deleteTodo = (todos, id) =>{
	const idx = todos.findIndex((todo)=> todo.id === id);
	if(idx !== -1)
		todos.splice(idx, 1);
	return todos;
};
window.App.TodoApp =TodoApp;


