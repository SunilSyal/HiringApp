import Layout from "../components/MyLayout.js";
import Link from "next/link";
import { withRouter } from "next/router";
import { Button, Table } from "reactstrap";
import { FaEdit } from "react-icons/fa";

function getPosts() {
  return [
    {
      cId: "10001",
      cname: "Sunil Kumar",
      pId: "101",
      pName: "Sailesh",
      date: "25-Jun-2019",
      inFor: "SAL 1",
      framework: "Core XT",
      status: "selected",
      proposedTitle: "AL 2"
    },
    {
      cId: "1002",
      cname: "Ajay Singh",
      pId: "102",
      pName: "Sunil",
      date: "25-Jun-2019",
      inFor: "SAL 1",
      framework: "Core XT",
      status: "selected",
      proposedTitle: "AL 2"
    },
    {
      cId: "1003",
      cname: "Ruchika Bhatia",
      pId: "103",
      pName: "Shelly",
      date: "25-Jun-2019",
      inFor: "SAL 1",
      framework: "Core XT",
      status: "selected",
      proposedTitle: "AL 2"
    }
  ];
}

const PostLink = ({ post, index }) => (
  <tr>
    <th scope="row">{index + 1}</th>
    <td>
      <Link href={`/feedback?id=${post.cId}`}>
        <Button color="link">{post.cname}</Button>
      </Link>
    </td>
    <td>
      <p color="link">{post.pName}</p>
    </td>
    <td>
      <p color="link">{post.date}</p>
    </td>

    <td className="align-middle">
      <p color="link">{post.inFor}</p>
    </td>

    <td className="align-middle">
      <p color="link">{post.framework}</p>
    </td>

    <td className="align-middle">
      <p color="link">{post.status}</p>
    </td>
    <td className="align-middle">
      <p color="link">{post.proposedTitle}</p>
    </td>
    <td>
      <Link href={`/feedback?id=${post.cId}`}>
        <FaEdit />
      </Link>
    </td>
  </tr>
);

function Candidates() {
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

          {getPosts().map((post, index) => (
            <PostLink key={post.cId} post={post} index={index} />
          ))}
        </tbody>
      </Table>
    </Layout>
  );
}

export default withRouter(Candidates);
