import { connect } from "react-redux";

const Home = (props) => {
  console.log(">> data:", props.dataRedux);
  return (
    <div>
      <h1 style={{ fontSize: "26px", textTransform: "uppercase" }}>Home</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};

export default connect(mapStateToProps)(Home);
