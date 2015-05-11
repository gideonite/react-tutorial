var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world. I am CommentList
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world. I am CommentForm
      </div>
    );
  }
});

React.render(<CommentBox />,
             document.getElementById('content'));
