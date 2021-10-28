package com.example.demo.MenteePost;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "mentee_posts")

public class MenteePost {

	@Id
	private int postID;
	private String userName; 
	private String subject; 
	private String language; 
	private String typeOfSession;
	private String daysOfAvailability;
	private double offerAmount;
	private String briefDescription;
	
	public MenteePost() {
		
	}

	public MenteePost(int postID, String userName, String subject, String language,
String typeOfSession, String daysOfAvailability, double offerAmount, String briefDescription) {
		super();
		this.postID = postID;
		this.userName = userName;
		this.subject = subject;
		this.language = language;
		this.typeOfSession = typeOfSession;
		this.daysOfAvailability = daysOfAvailability;
		this.offerAmount = offerAmount;
		this.briefDescription = briefDescription;
	}

	public int getPostID() {
		return postID;
	}

	public void setPostID(int postID) {
		this.postID = postID;
	}

	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}	

	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}	
	
	public String getTypeOfSession() {
		return typeOfSession;
	}
	public void setTypeOfSession(String typeOfSession) {
		this.typeOfSession = typeOfSession;
	}

	public String getDaysOfAvailability() {
		return daysOfAvailability;
	}
	public void setDaysOfAvailability(String daysOfAvailability) {
		this.daysOfAvailability = daysOfAvailability;
	}

	public double getOfferAmount() {
		return offerAmount;
	}
	public void setOfferAmount(double offerAmount) {
		this.offerAmount = offerAmount;
	}
	
	public String getBriefDescription() {
		return briefDescription;
	}
	public void setBriefDescription(String briefDescription) {
		this.briefDescription = briefDescription;
	}	
}

