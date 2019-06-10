import Layout from "../components/MyLayout.js";
import Link from "next/link";
import { withRouter } from "next/router";
import { Button, Table } from "reactstrap";

function getPosts() {
  return [
    {
      cId: "10001",
      cname: "Sunil Kumar",
      pId: "101",
      pName: "Sailesh",
      date: "25-Jun-2019",
      inFor: "SAL 1",
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
      <Link href={`/panel?id=${post.pId}`}>
        <Button color="link">{post.pName}</Button>
      </Link>
    </td>
    <td>
      <Button color="link">{post.date}</Button>
    </td>

    <td className="align-middle">
      <p color="link">{post.inFor}</p>
    </td>
    <td className="align-middle">
      <p color="link">{post.status}</p>
    </td>
    <td className="align-middle">
      <p color="link">{post.proposedTitle}</p>
    </td>
  </tr>
);

function Blog() {
  return (
    <Layout>
      <h1>Schedules Candidates List</h1>
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
              <p color="link">Status</p>
            </td>
            <td className="align-top">
              <p color="link">Proposed Title</p>
            </td>
          </tr>

          {getPosts().map((post, index) => (
            <PostLink key={post.cId} post={post} index={index} />
          ))}
        </tbody>
      </Table>
      <style jsx>{`
        h1,
        a {
          font-family: "Arial";
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  );
}

export default withRouter(Blog);
