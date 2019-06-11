import Layout from "../components/MyLayout";
import Feedback from "../components/feedback";
import fetch from "isomorphic-unfetch";

class FeedbackPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ cId: event.target.value });
  }

  // static async getInitialProps(context) {
  //   const { id } = context.query;
  //   const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  //   const show = await res.json();
  //   return { show };
  // }

  render() {
    return (
      <Layout>
        <Feedback {...this.props} handleChange={this.handleChange} />
      </Layout>
    );
  }
}

export default FeedbackPage;
