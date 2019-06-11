import Layout from "../components/MyLayout.js";
import { withRouter } from "next/router";
import { Table, FormGroup, Label, Input } from "reactstrap";
import fetch from "isomorphic-unfetch";
import CandidateRow from "../components/candidate-row";

class Candidates extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };

    this.getPosts = this.getPosts.bind(this);
    this.filterRecords = this.filterRecords.bind(this);
    this.fetchRecords = this.fetchRecords.bind(this);
  }

  getPosts() {
    return this.state.data;
  }

  filterRecords(event) {
    var str = event.target.value;
    this.setState({ filter: str });
    this.fetchRecords(str);
  }

  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
    const params = {
      allRecords: true
    };
    const res = await fetch(baseUrl + "/api/pipeline", {
      method: "post",
      body: JSON.stringify(params),
      headers: { "Content-type": "application/json" }
    });
    var data = await res.json();
    data.req = req;
    return { data };
  }

  async fetchRecords(str) {
    const baseUrl = this.state.req
      ? `${this.state.req.protocol}://${this.state.req.get("Host")}`
      : "";
    const params = {
      query: str
    };
    const res = await fetch(baseUrl + "/api/pipeline", {
      method: "post",
      body: JSON.stringify(params),
      headers: { "Content-type": "application/json" }
    });

    var temp = await res.json();
    this.setState({ data: temp });
  }

  render() {
    return (
      <Layout>
        <h1>Scheduled Candidates</h1>
        <FormGroup className="col-xs-12 col-sm-6 row">
          <Label for="filter" className="sr-only">
            Filter
          </Label>
          <Input
            type="text"
            name="filter"
            id="filter"
            placeholder="Enter a search string"
            value={this.props.filter}
            onChange={this.filterRecords}
          />
        </FormGroup>
        <h2 className={!this.state.data.length ? "d-block" : "d-none"}>
          No record found for <b>{this.state.filter}</b>
        </h2>
        <Table
          size="sm"
          className={this.state.data.length ? "table" : "d-none"}
        >
          <tbody>
            <tr>
              <th className="align-top" scope="row">
                ID
              </th>
              <td className="align-top">
                <p color="link">Candidate Name</p>
              </td>
              <td className="align-top">
                <p color="link">Panel Name</p>
              </td>
              <td className="align-top">
                <p color="link">Date</p>
              </td>
              <td className="align-top">
                <p color="link">Interviewed for</p>
              </td>
              <td className="align-top">
                <p color="link">Framework</p>
              </td>
              <td className="align-top">
                <p color="link">Status</p>
              </td>
              <td className="align-top">
                <p color="link">Proposed Title</p>
              </td>
              <td className="align-top">
                <p color="link">Edit</p>
              </td>
            </tr>

            {this.getPosts().map((post, index) => (
              <CandidateRow key={post._id} post={post} index={index} />
            ))}
          </tbody>
        </Table>
      </Layout>
    );
  }
}

export default withRouter(Candidates);
