import { Component } from "react";
import { Api, ApiallowFile } from "./Api";

class Listing extends Component {
  async Register(data) {
    return Api.post("/user/register", data);
  }

  async ApprovalandPartners() {
    return Api.get("/admin/approvalandpartners",);
  }
  async AdminUniversityAdd(data) {
    return ApiallowFile.post("/admin/universities/add", data);
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