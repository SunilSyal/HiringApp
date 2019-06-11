import { withRouter } from "next/router";
import Sample from "../templates/sample";
import Rating from "../templates/rating";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class FeedbackClass extends React.Component {
  constructor() {
    super();
    this.getFeedbackList = this.getFeedbackList.bind(this);
  }

  getFeedbackList() {
    return [
      {
        title: "HTML | RWD | Templating",
        id: "html"
      },
      {
        title: "CSS preprocessors",
        id: "CSS"
      },
      {
        title: "Javascript",
        id: "js"
      },
      {
        title: "OOPs",
        id: "oops"
      },
      {
        title: "Accessibility",
        id: "access"
      },
      {
        title: "Debugging",
        id: "debug"
      },
      {
        title: "Estimation / Planning",
        id: "est"
      },
      {
        title: "Communication",
        id: "comm"
      },
      {
        title: "Learning Agility",
        id: "learning"
      }
    ];
  }

  render() {
    return (
      <Form>
        <FormGroup className="row mb-3">
          <FormGroup className="col-md-3 col-sm-12">
            <Label for="cName">Name</Label>
            <Input
              type="text"
              name="name"
              id="cName"
              disabled={this.props.router.query.id}
              placeholder="with a placeholder"
              value={this.props.router.query.id}
              onChange={this.props.handleChange}
            />
          </FormGroup>

          <FormGroup className="col-md-3 col-sm-12">
            <Label for="designation">Interview for level</Label>
            <Input type="select" name="select" id="designation">
              <option>AL 1</option>
              <option>AL 2</option>
              <option>SAL 1</option>
              <option>SAL 2</option>
            </Input>
          </FormGroup>

          <FormGroup className="col-md-3 col-sm-12">
            <Label for="status">Status</Label>
            <Input type="select" name="status" id="status">
              <option>To be interviewed</option>
              <option>Feedback awaited</option>
              <option>Selected</option>
              <option>Rejected</option>
            </Input>
          </FormGroup>

          <FormGroup className="col-md-3 col-sm-12">
            <Label for="selectedTitle">Selected As</Label>
            <Input type="select" name="selectedTitle" id="selectedTitle">
              <option>AL 1</option>
              <option>AL 2</option>
              <option>SAL 1</option>
              <option>SAL 2</option>
            </Input>
          </FormGroup>
        </FormGroup>

        <FormGroup className="row mb-3">
          <FormGroup className="col-md-3 col-sm-12">
            <Label for="panel">Panel</Label>
            <Input
              type="select"
              name="panel"
              id="panel"
              disabled={this.props.router.query.id}
            >
              <option>Sailesh Raghvan</option>
              <option>Sunil Syal</option>
              <option>Ajay Singh</option>
            </Input>
          </FormGroup>

          <FormGroup className="col-md-3 col-sm-12">
            <Label for="panel">Framework</Label>
            <Input type="select" name="framework" id="framework">
              <option>Core XT</option>
              <option>Angular</option>
              <option>React</option>
            </Input>
          </FormGroup>
        </FormGroup>

        <FormGroup className="row">
          <FormGroup className="col-xs-12 col-sm-6 mb-3">
            <Label for="feedback">Domain Feedback</Label>
            <Input type="textarea" name="domain" id="domain" />
          </FormGroup>

          <FormGroup className="col-xs-12 col-sm-6 mb-3">
            <Label for="feedback">Framework experience</Label>
            <Input type="textarea" name="frame" id="frame" />
          </FormGroup>
        </FormGroup>

        <FormGroup className="row mb-3">
          {this.getFeedbackList().map((item, index) => (
            <FormGroup className="col-xs-12 col-sm-4">
              <Rating title={item.title} id={item.id} />
            </FormGroup>
          ))}
        </FormGroup>

        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>

        <Button>Submit</Button>
        {this.props.router.query.id ? <Sample {...this.props} /> : null}
      </Form>
    );
  }
}

const Feedback = withRouter(FeedbackClass);
export default Feedback;
