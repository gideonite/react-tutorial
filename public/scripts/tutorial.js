var Comment = React.createClass({
  render: function() {
    var raw_markup = marked(this.props.children.toString(), {santize: true});
    return (
      <div className="comment">
        <h2 className="commentAuthor">
            {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html:raw_markup}} />
      </div>
    );
  }
});

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
      <div className="commentList">
        <Comment author="Pete Hunt"> This is one comment </Comment>
        <Comment author="Jordan Walke"> This is another comment </Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
      </div>
    );
  }
});

React.render(<CommentBox />,
             document.getElementById('content'));
