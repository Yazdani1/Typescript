interface IBase {
    userId?: number,
    userName?: string,
}

interface PostItem extends IBase {
    postTitle: string,
    postDes: string,
    postImg:string,
}


const newPost = (post:PostItem)=>{
    var result = (post.postTitle+ post.postDes+ post.userId+ post.postImg);
    console.log(result);
}

newPost({postTitle:"First post",postDes:"Description details",postImg:"Image url this is..",userId:50});


