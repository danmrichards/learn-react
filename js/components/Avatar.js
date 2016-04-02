var Avatar = React.createClass({
    getDefaultProps: function() {
        return {
            path: 'http://placehold.it/98x98',
        };
    },
    
    render: function() {
        return (
            <div>
                <a href={this.props.path}>
                    <img src={this.props.path} alt="Avatar"/>
                </a>
            </div>
        );
    }
});

ReactDOM.render(<Avatar path="http://lorempixel.com/98/98/" />, document.body);
