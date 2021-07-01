<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Post;

class APIController extends Controller
{
    public function postList()
    {
       return $getAllPost = Post::orderBy('id','desc')->get();
}

    public function createPost(Request $request)
    {
       
            $data = [
                'image' => $request->image,
                'title' => $request->title,
                'description' => $request->description,
            ];

           return $postData = Post::create($data);

    }

    public function removePost(Request $request)
    {
            $removePost = $request->id;
            $getAllPost = Post::find($removePost);
            if($getAllPost){
                $getAllPost->delete();
            }   
    }

    public function postDetail(Request $request)
    {
       
            $postID = $request->id;
           return $getPostData = Post::find($postID);
    }

}
