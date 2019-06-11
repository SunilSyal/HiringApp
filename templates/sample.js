export default class Sample extends React.Component {
  render() {
    if (!this.props.router.query.id) {
      return null;
    }
    return (
      <div>
        <h1>{this.props.router.query.id}</h1>
      </div>
    );
  }
}
