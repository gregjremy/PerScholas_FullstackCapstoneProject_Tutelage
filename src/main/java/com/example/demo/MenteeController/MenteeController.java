package com.example.demo.MenteeController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.MenteeException.MenteeException;
import com.example.demo.MenteePost.MenteePost;
import com.example.demo.MenteeRepository.MenteeRepository;

@CrossOrigin (origins = "http://localhost:3000")
@RestController 
@RequestMapping ("/api/")


public class MenteeController {
	
	@Autowired
	private MenteeRepository menteeRepo; 
	 	
	// Show all posts
	@GetMapping ("/allmenteeposts")
	public List<MenteePost> getMenteePosts(){
		return menteeRepo.findAll();
	}
	
	// Show post by postID
	@GetMapping ("menteepost/{postID}")
	public List <MenteePost> getMenteePostByPostID(@PathVariable int postID ){
		List<MenteePost> posts = menteeRepo.getMenteePostByPostID(postID);
		return posts;
	}
	
	// Update post
	//originally: /updatementeepost/{postID}
	@PutMapping ("/menteepost/{postID}")
	public ResponseEntity <MenteePost> updateMenteePost(@PathVariable int postID, @RequestBody MenteePost menteepost) {
		MenteePost m = menteeRepo.findById(postID).orElseThrow(()-> new MenteeException());
		m.setUserName(menteepost.getUserName());
		m.setSubject(menteepost.getSubject());
		m.setLanguage(menteepost.getLanguage());
		m.setTypeOfSession(menteepost.getTypeOfSession());
		m.setDaysOfAvailability(menteepost.getDaysOfAvailability());
		m.setOfferAmount(menteepost.getOfferAmount());
		m.setBriefDescription(menteepost.getBriefDescription());
		MenteePost updatedMenteePost = menteeRepo.save(m);
		return ResponseEntity.ok(updatedMenteePost);
	}
	
	// create a new post
	@PostMapping ("/addmenteepost")
	public MenteePost newMenteePost(@RequestBody MenteePost menteepost) {
		return menteeRepo.save(menteepost);
	}
	
	// delete a post
	@DeleteMapping ("/menteepost/{postID}")
	public void deleteItem(@PathVariable int postID) {
//		Optional<MenteePost> post = menteeRepo.findById(postID);
		menteeRepo.deleteById(postID);	
	}
}	