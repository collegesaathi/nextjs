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

  async AdminSpecializationAdd(data) {
    return ApiallowFile.post("/admin/specialisation/add", data);
  }

  async AdminUniversityUpdate(data) {
    return ApiallowFile.post("/admin/universities/update", data);
  }

  async AdminCourseUpdate(data) {
    return ApiallowFile.post("/admin/course/update", data);
  }


  async AdminSpecializationUpdate(data) {
    return ApiallowFile.post("/admin/specialisation/update", data);
  }
  async Univeristy() {
    return Api.get("/universities",);
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

  async CourseDelete(id) {
    return Api.get(`/course/delete/${id}`)
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

  async CourseAll() {
    return Api.get("/all/course",);
  }
  async AdminUniveristy(page) {
    return Api.get(`/admin/university?page=${page}`,);
  }

  async AdminSpecialisation(page) {
    return Api.get(`/all/specialisation?page=${page}`,);
  }
  async UniveristyDelete(id) {
    return Api.get(`/university/delete/${id}`)
  }
  async SpecialisationDelete(id) {
    return Api.get(`/specialisation/delete/${id}`)
  }
  async UniveristyGet(slug) {
    return Api.get(`/university/${slug}`)
  }


  async UniveristyCourseList(id) {
    return Api.get(`/course/university/${id}`)
  }

  async CourseGet(slug) {
    return Api.get(`/course/${slug}`)
  }

  async CoursenameGet(id) {
    return Api.get(`/course_name/${id}`)
  }

  async SpecializationGet(slug) {
    return Api.get(`/specialisations/${slug}`)
  }

  async UniveristyCourseGet(id) {
    return Api.get(`/course/university/${id}`)
  }

  async CourseSpecialisationGet(uni, cui) {
    return Api.get(`/course/specialisation/${uni}/${cui}`)
  }

  async UniversitySearch(query) {
    // This produces: /all/university?search=manipal (CORRECT)
    return Api.get(`/all/university?search=${query}`);
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