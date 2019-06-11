import Layout from "../components/MyLayout.js";
import Link from "next/link";
import { withRouter } from "next/router";
import { Button, Table } from "reactstrap";
import { FaEdit } from "react-icons/fa";
import fetch from "isomorphic-unfetch";
import CandidateRow from "../components/candidate-row";

class Candidates extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };

    this.getPosts = this.getPosts.bind(this);
  }

  getPosts() {
    return this.state.data;
  }

  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
    const params = {
      query: "Ajay"
    };
    const res = await fetch(baseUrl + "/api/pipeline", {
      method: "post",
      body: JSON.stringify(params),
      headers: { "Content-type": "application/json" }
    });
    const data = await res.json();
    return { data };
  }

  render() {
    return (
      <Layout>
        <h1>Scheduled Candidates</h1>
        <Table size="sm">
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
