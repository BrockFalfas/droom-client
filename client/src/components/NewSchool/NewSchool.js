import React from "react";
import axios from "axios";

// const newUserStyle = {
//   border: "pink solid 2px",
//   margin: "20px 0",
//   padding: "15px 10px"
//   // display: "flex"
// };

// const passwordReq = {
//   fontSize: "11px",
//   margin: "0px"
// };

class NewSchool extends React.Component {
  constructor() {
    super();
    this.state = {
      schoolName: "",
      state: "",
      zip: "",
      fundsNeeded: "",
    //   role: "admin"
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  addSchool = (school) => {
    axios
    // check api route
      .post(`https://luncher-backend.herokuapp.com/api/admin/school`, school)
      .then(response => {
        this.setState({state: response.data});
        // if (response.data.token) {
        //   return <Redirect to="/schools/schoolRoutes" />;
        // }
        // this.setState({ state: response.data });
      })
      .catch(err => console.log(err));
      this.setState({ 
        schoolName: "",
        state: "",
        zip: "",
        // maybe number
        fundsNeeded: "",
    });
  };

  render() {
    return (
      <div className="newUserStyle">
        <h1>Sign Your School Up for Luncher!</h1>
        <div className="form-container">
          <form>
            <p>School Name:</p>
            <input
              type="text"
              name="schoolName"
              placeholder="School Name"
              value={this.state.schoolName}
              onChange={this.handleChange}
            />
            <br />
            <p>State:</p>
            <input
              type="text"
              name="state"
              placeholder="state"
              value={this.state.state}
              onChange={this.handleChange}
            />
            <br />
            <p>Zip Code:</p>
            <input
              type="text"
              name="zip"
              placeholder="zip"
              value={this.state.zip}
              onChange={this.handleChange}
            />
            <br />
            <p>Funds Needed:</p>
            <input
              type="text"
              name="fundsNeeded"
              placeholder="funds needed"
              value={this.state.fundsNeeded}
              onChange={this.handleChange}
            />
            <br />
            <button type="button" onClick={this.addSchool}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewSchool;
