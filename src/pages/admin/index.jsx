import React, { useEffect, useState } from 'react'
import AdminLayout from './common/AdminLayout'
import Listing from '../api/Listing';
import { MdReviews } from 'react-icons/md';
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { TbBrandBooking } from "react-icons/tb";
import { AiFillStar } from 'react-icons/ai';
import moment from 'moment';
import Link from 'next/link';
import { ReviewLoader, TableLoader } from '@/common/Loader';
import Image from 'next/image';
import { IoMdEye } from 'react-icons/io';
import NoData from '../../components/NoData';


export default function Index() {
  // const [listing, setListing] = useState(null); // Fix typo in setListing
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   const main = new Listing();
  //   main
  //     .AdminDashboard()
  //     .then((r) => {
  //       setListing(r?.data?.data); // ✅ Update state with data
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("API Error:", err);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <AdminLayout page={"Dashboard"}>
      <div className="min-h-screen p-5 lg:p-[30px]">
        <h2>Admin Dashboard </h2>
      </div>
    </AdminLayout >
  );
}
