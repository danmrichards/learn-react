/**
 * @file
 * Contains an unordered task list component and the task application itself.
 */

/**
 * Task list component - An unordered list of tasks.
 */
var TaskList = React.createClass({

    render: function() {
        // Grab the click event passed from the parent component.
        var click = this.props.onClick;

        var displayTask = function(task, index) {
            // Bind the click event to this element, passing through the index.
            var deleteTaskClick = click.bind(null, index);

            return <li onClick={deleteTaskClick} key={index}>{task}</li>
        };

        return (
            <ul>
                { this.props.items.map(displayTask) }
            </ul>
        );
    }

});

/**
 * Task app component - Manage and display tasks.
 */
var TaskApp = React.createClass({

    getInitialState: function() {
        return {
            items: [],
            task: ''
        };
    },

    addTask: function(e) {
        this.setState({
            items: this.state.items.concat([this.state.task]),
            task: ''
        });

        e.preventDefault();
    },

    deleteTask: function(index) {
      // Remove the array item at the given index and update the state.
      this.state.items.splice(index, 1);
      this.setState({ items: this.state.items });
    },

    onChange: function(e) {
        this.setState({ task: e.target.value });
    },

    render: function() {
        return (
            <div>
                <h1>My Tasks</h1>
                <TaskList onClick={this.deleteTask} items={this.state.items} />

                <form onSubmit={this.addTask}>
                    <input type="text" value={this.state.task} onChange={this.onChange} />
                    <button>Add Task</button>
                </form>
            </div>
        );
    }

});

ReactDOM.render(<TaskApp />, document.body);
