import { Label, Input } from "reactstrap";

export default class Rating extends React.Component {
  render() {
    return (
      <>
        <Label for={this.props.id}>{this.props.title}</Label>
        <Input
          className="mb-3"
          type="select"
          name={this.props.id}
          id={this.props.id}
        >
          <option>Not discussed</option>
          <option>No Experience</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Proficient</option>
          <option>Expert</option>
        </Input>
        <Label for={`${this.props.id}-feedback`} className="sr-only">
          Feedback
        </Label>
        <Input
          type="textarea"
          name={`${this.props.id}-feedback`}
          id={`${this.props.id}-feedback`}
        />
      </>
    );
  }
}
