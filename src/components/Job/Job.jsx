import "./Job.css";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl ">
      <figure>
        <img className="img" src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p className=" flex justify-start">{company_name}</p>
        <div className="flex justify-start">
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="flex ">
          <h2 className="flex items-center gap-1 mr-4">
            <SlLocationPin></SlLocationPin>
            {location}
          </h2>
          <h2 className="flex items-center gap-1">
            <HiOutlineCurrencyDollar></HiOutlineCurrencyDollar>
            {salary}
          </h2>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
