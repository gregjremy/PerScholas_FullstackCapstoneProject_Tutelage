package com.example.demo.MenteeRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.MenteePost.MenteePost;

import java.util.List;

@Repository
public interface MenteeRepository extends JpaRepository <MenteePost, Integer> {	
	List <MenteePost> getMenteePostByPostID(int postID);


}
