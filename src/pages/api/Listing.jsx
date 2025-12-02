import { Component } from "react";
import { Api, ApiallowFile } from "./Api";

class Listing extends Component {
  async Register(data) {
    return Api.post("/user/register", data);
  }


  async ApprovalandPartners() {
    return Api.get("/admin-universities",);
  }

  render() {
    return (
      <div>
        <></>
      </div>
    );
  }
}

export default Listing;