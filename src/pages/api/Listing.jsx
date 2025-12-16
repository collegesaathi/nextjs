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

  async AdminCourseAdd(data) {
    return ApiallowFile.post("/admin/course/add", data);
  }

  async AdminUniversityUpdate(data) {
    return ApiallowFile.post("/admin/universities/update", data);
  }

  async Univeristy() {
    return Api.get("/all/universities",);
  }

  async AddApprovals(data) {
    return ApiallowFile.post("/approval/add", data);
  }

  async UpdateApprovals(data) {
    return ApiallowFile.post("/approval/edit", data);
  }

  async AddPlacementsall(data) {
    return ApiallowFile.post("/placement/add", data);
  }

  async UpdatePlacements(data) {
    return ApiallowFile.post("/placement/edit", data);
  }

  async PlacementDelete(id) {
    return Api.get(`/placement/delete/${id}`)
  }
  async PlacementApproval(data) {
    return Api.get("/placement/approval", data);
  }

  async ApprovalDelete(id) {
    return Api.get(`/approval/delete/${id}`)
  }
  async ContactAdd(data) {
    return Api.post("/leads/add", data);
  }

  async ContactGet() {
    return Api.get("/leads/get",);
  }
  async ContactUniversityGet() {
    return Api.get("/leads/university",);
  }

   async Listjsx() {
    return Api.get("/list",);
  }

  async AdminUniveristy(page) {
    return Api.get(`/admin/university?page=${page}`,);
  }

  async UniveristyDelete(id) {
    return Api.get(`/university/delete/${id}`)
  }

  async UniveristyGet(slug) {
    return Api.get(`/university/${slug}`)
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