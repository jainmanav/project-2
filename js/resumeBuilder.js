/*
The code to build the resume will go here.
 */
var bio = {
	"name": "Manav Jain",
	"role": "Front-End Developer Apprentice",
	"contacts": {
		"mobile": "07715895364",
		"email": "jain.manav97@gmail.com",
		"github": "jainmanav",
		"location": "Mumbai,IN",
		"twitter": "_manavjain_"
	},
	"welcomeMessage": "Howdie people",
	"skills": ["html&css", "javascript", "english", "project management", "guitarist", "bilingual"],
	"biopic": "images/man.jpg"
};
var education = {
	"schools": [{
		"name": "Lucknow Public School",
		"location": "Lucknow,IN",
		"degree": "Intermediate",
		"majors": ["Science","Maths","English"],
		"dates": "2008-2010",
		"url": "http://www.lucknowpublicschoolsandcolleges.com/Home.aspx"
	}, {
		"name": "JSS Academy of Technical Education",
		"location": "Bengaluru,IN",
		"degree": "Bachelor in Engineering",
		"majors": ["Six Sigma","CAD/CAM","Supply Chain Management"],
		"dates": "2011-2015",
		"url": "http://www.jssateb.ac.in/"
	}],
	"onlineCourses": [{
		"title": "udacity's front-end web developer program",
		"school": "Udacity",
		"date": "2014",
		"url": "https://www.udacity.com/nanodegree"
	}]
};
var work = {
	"jobs": [{
		"employer": "Udacity",
		"title": "Learning",
		"location": "Mumbai,IN",
		"dates": "2015-2016",
		"description": "course on web development"
	}]
};
var projects = {
	"projects": [{
		"title": "Portfolio Site",
		"dates": "2015",
		"description": "A proffesional porfolio regarding my work experience",
		"images": "images/portfolio.jpg"
	}]
};
bio.display = function() {
	"use strict";
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	//display content
	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);
	$("#header:last").append(HTMLskillsStart);
	if (bio.skills.length > 0) {
		for (var skill in bio.skills) {
			if (bio.skills.hasOwnProperty(skill)) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}
	}
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%contact%", "Github").replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
	$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
};
education.display = function() {
	"use strict";
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		var formattedURL = HTMLonlineURL.replace("%data%", education.schools[school].url);
		$(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor, formattedURL);
	}
	$("#education").append(HTMLonlineClasses);
	for (var course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool, formattedonlineDate, formattedURL);
	}
};
work.display = function() {
	"use strict";
	//var i = 0;
	//for (i = 0; i < work.jobs.length; i++) {
	//console.log(work.jobs[i].employer);}
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle,formattedWorkDates,formattedWorkDescription);
		$(".work-entry:last").append(formattedWorkLocation);
	}
};
projects.display = function() {
	"use strict";
	$("#projects").append(HTMLprojectStart);
	for (var item in projects.projects) {
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[item].description);
		$(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
		//for (var image in projects.project[item].images) {}
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[item].images);
		$(".project-entry:last").append(formattedImage);
	}
};

function inName(name) {
	console.log(name);
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1, newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();
	return newName;
};

var menu = {
   "menu": [
      { 
         "title": "work",
         "link": "#workH2"
      },
      {
         "title": "education",
         "link": "#educationH2"
      },
      {
         "title": "projects",
         "link": "#projectsH2"
      },
      {
         "title": "map",
         "link": "#mapDiv"
      }
   ]
};

menu.display = function () {
    'use strict';
    var i=0, entry="", toptitle="", y=0;
    $("nav").append("<ul id=\"navmenu\">");
    //alert(menu.menu.length);
    for (i=0; i<menu.menu.length; i=i+1) {
       //alert(menu.menu[i].type);
       entry = '<li><a href="'+menu.menu[i].link+'">'+menu.menu[i].title+'</a></li>';
          // console.log(entry);
          $("#navmenu:last").append(entry);
    }
};

//main stuff//
menu.display();
work.display();
projects.display();
education.display();
bio.display();
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);