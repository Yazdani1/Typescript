let post: {
  title: string;
  des: string;
};

post = {
  title: "This is a post",
  des: "This is a des",
};

const result = post.title + post.des;

console.log(result);

type User = {
  name: string;
  email: string;
  password: string;
};

const userInfo: User = {
  name: "Yaz",
  email: "y@gmail.com",
  password: "123456",
};

const userResult = userInfo.name + userInfo.email + userInfo.password;

console.log(userResult);


const userProfile:User = {
    name: "Dani",
    email: "d@gmail.com",
    password: "12gdfg45",  
}


const profileResult = userProfile.name;

console.log(profileResult);

type Profile = {
  name: string;
  email?: string;
  password?: string;
  updateDate?: string;
  
}


const userProfileInfo = (profile:Profile)=>{

  const profileValue = profile.name + profile.email + profile.password

}


userProfileInfo({name:"name"});



type JobDetails = {
  
  _id: string;
  title: string;
  des: string;
  date: string;
  location: string

}


const createJob = (jobs:JobDetails)=>{

  const jobdetails = jobs._id + jobs.title + jobs.des + jobs.location + jobs.date

}

const jobinfo:JobDetails = {

  _id:"2",
  title:"Job title",
  des:"Job description",
  date:"dfgd",
  location:"Dormtund"


} 



const jobobj = jobinfo._id + jobinfo.title + jobinfo.des + jobinfo.location

console.log(jobobj)


const jobinfoobdj = jobinfo._id + jobinfo.title + jobinfo.des + jobinfo.location

console.log(jobinfoobdj)

const jobinfodetails = jobinfo._id + jobinfo.title + jobinfo.des + jobinfo.location

console.log(jobinfodetails)


const jobportalinfo = jobinfo._id + jobinfo.title + jobinfo.des + jobinfo.location

console.log(jobportalinfo)



