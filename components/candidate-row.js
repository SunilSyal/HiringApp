import Layout from "../components/MyLayout.js";
import Link from "next/link";
import { withRouter } from "next/router";
import { Button, Table } from "reactstrap";
import { FaEdit } from "react-icons/fa";
import fetch from "isomorphic-unfetch";

const CandidateRow = ({ post, index }) => (
  <tr>
    <th scope="row">{index + 1}</th>
    <td>
      <Link href={`/feedback?id=${post._id}`}>
        <Button color="link">{post.cName}</Button>
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

export default CandidateRow;
