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








