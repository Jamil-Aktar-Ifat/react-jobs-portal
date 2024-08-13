import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { PiSubtitlesBold } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../Utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("You've applied successfully!");
  };
  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-10">Job Details</h2>
      <div className="max-w-6xl mx-auto flex gap-4">
        <div className="w-full">
          <h2 className="mb-2">
            <span className="font-extrabold">Job Description: </span>
            {job.job_description}
          </h2>
          <h2 className="mb-2">
            <span className="font-extrabold">Job Responsibility: </span>
            {job.job_responsibility}
          </h2>
          <h2 className="mb-2">
            <span className="font-extrabold">Educational Requirements: </span>
            {job.educational_requirements}
          </h2>
          <h2>
            <span className="font-extrabold">Experiences: </span>
            {job.experiences}
          </h2>
        </div>
        <div>
          <div className="bg-[#7E90FE1A] p-6 rounded-md mb-5">
            <h2 className="font-extrabold text-start">Job Details</h2>
            <hr className="my-4" />
            <div className="mb-5">
              <h2 className="flex items-center gap-1">
                <AiOutlineDollarCircle className="text-[#7E90FE] "></AiOutlineDollarCircle>
                <span className="font-extrabold mr-0.5">Salary: </span>
                {job.salary}
              </h2>
              <h2 className="flex items-center gap-1">
                <PiSubtitlesBold className="text-[#7E90FE] "></PiSubtitlesBold>
                <span className="font-extrabold mr-0.5">Job Title: </span>
                {job.job_title}
              </h2>
            </div>
            <h2 className="font-extrabold text-start">Contact Information</h2>
            <hr className="my-4" />
            <div>
              <h2 className="flex items-center gap-1">
                <FiPhone className="text-[#7E90FE] "></FiPhone>
                <span className="font-extrabold mr-0.5">Phone: </span>
                {job.contact_information.phone}
              </h2>
              <h2 className="flex items-center gap-1">
                <TfiEmail className="text-[#7E90FE] "></TfiEmail>
                <span className="font-extrabold mr-0.5">Email: </span>
                {job.contact_information.email}
              </h2>
              <h2 className="flex ">
                <CiLocationOn className="text-4xl text-[#7E90FE] pb-3"></CiLocationOn>
                <span className="font-extrabold mr-0.5">Address: </span>
                {job.contact_information.address}
              </h2>
            </div>
          </div>
          <div>
            <button
              onClick={handleApplyJob}
              className="btn btn-primary w-full mb-4"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
