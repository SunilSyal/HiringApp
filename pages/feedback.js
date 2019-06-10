import Layout from "../components/MyLayout.js";
import { withRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import Sample from "../templates/sample";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class FeedbackClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cId: this.props.router.query.id,
      cIdDisabled: this.props.router.query.id
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ cId: event.target.value });
  }

  static async getInitialProps(context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);
    show.disabled = false;

    return { show };
  }

  render() {
    return (
      <Layout>
        <Form>
          <FormGroup className="row mb-3">
            <FormGroup className="col-md-3 col-sm-12">
              <Label for="cName">Name</Label>
              <Input
                type="text"
                name="name"
                id="cName"
                disabled={this.state.cIdDisabled}
                placeholder="with a placeholder"
                value={this.state.cId}
                onChange={this.handleChange}
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

          <FormGroup className="col-xs-12 mb-3">
            <Label for="feedback">Feedback</Label>
            <Input type="textarea" name="feedback" id="feedback" />
          </FormGroup>

          <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above
              input. It's a bit lighter and easily wraps to a new line.
            </FormText>
          </FormGroup>

          <Button>Submit</Button>
        </Form>
        {this.state.cId ? <Sample {...this.props} /> : null}
      </Layout>
    );
  }
}

const Feedback = withRouter(FeedbackClass);
export default Feedback;
