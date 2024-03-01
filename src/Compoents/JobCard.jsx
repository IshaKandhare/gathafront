/* eslint-disable react/prop-types */
import { BiWorld, BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";

function JobCard(props) {
  const item = props.data;
  let date = item.job_posted_at_datetime_utc;
  date = date !== undefined ? date.split("T") : "no date";

  return (
    <Link to={"/job-info"} state={{ page: item, pagination: props.pagination }} style={{textDecoration:'None'}}>
      <div className="mb-6 w-full d-flex align-items-center gap-2 rounded-md bg-white  shadow  sm:gap-4 hover:shadow-lg" style={{marginBottom: '20px',  width:"100%" }}>

      <div  style={{display:'flex', padding:'0px', margin:'0px'}}>

        
        <img
          src={
            item.employer_logo !== null
              ? item.employer_logo
              : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
          }
          alt="company img"
          className="h-28 w-32 border-1 rounded"
          style={{height:'100px', width:'100px', marginRight:'15px'}}
        />
      
        
<div>



        <div className="text-secondary d-flex flex-column justify-content-between w-full h-28 overflow-hidden">
          <p className="text-xs font-bold text-truncate" style={{color:'black'}}>
            <b>
            {item.employer_name ? item.employer_name : "Company name not found"}
            </b>
          </p>
          
          <p className="text-base text-truncate">
            {item.job_title ? item.job_title : "Job title not found"}
          </p>
          <div className="d-flex justify-content-between gap-2 text-xs w-full flex-wrap ">
            <div className="border-2 text-truncate border-secondary" style={{border:'solid black', padding:'2px'}}>
              {item.job_employment_type
                ? item.job_employment_type
                : "Job type not found"}
            </div>
            <div className="d-flex justify-content-between gap-1 flex-wrap flex-nowrap" style={{marginLeft:'500px'}}>
              <div className="text-gray-400 text-truncate d-flex align-items-center gap-2">
                <BiWorld className="inline" />
                <span className="">{item.job_country}</span>
              </div>
              <div className="text-gray-400 text-truncate justify-self-end d-flex align-items-center gap-2">
                <BiTimeFive className="inline" />
                <span className="">{date[0]}</span>
              </div>
            </div>
          </div>
        </div>

        </div>
        </div>
      </div>
    </Link>
  );
}

export default JobCard;
