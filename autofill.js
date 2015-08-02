
      var fName           = document.getElementById('fname');
      var lName           = document.getElementById('lname');
      var email           = document.getElementById('email');
      var headLine        = document.getElementById('headline');
      var NoOfConnections = document.getElementById('numConnections');
      var siteLink        = document.getElementById('siteProfileRequest');
      var mySummary       = document.getElementById('summary');
      var profileImgEl    = document.getElementById('profileimage');
      var profileImage    = document.createElement('img');

			var loadLinkedin = function(){
				IN.Event.on(IN, "auth", OnLinkedInAuth);
			}

			var OnLinkedInAuth = function() {
			    //IN.API.Profile("me").result(ShowProfileData);
			    IN.API.Profile("me")
			          .fields(["siteStandardProfileRequest", "firstName", "lastName", "headline", "summary", "num-connections", "picture-url", 'id','email-address','date-of-birth','phone-numbers','positions'])
			          .result(function(result) {
			            console.log('test result ', JSON.stringify(result));
			          });
			}


			var ShowProfileData = function(profiles) {
			    var member = profiles.values[0];
			    var id=member.id;
			    var firstName=member.firstName; 
			    var lastName=member.lastName; 
			    var photo=member.pictureUrl; 
			    var headline=member.headline; 


			    console.log('profiles', profiles);
			    //use information captured above
			}
		var xyz    = {
                    "_total": 1,
                    "values": [{
                      "_key": "~",
                      "emailAddress": "k.pavankumaar@gmail.com",
                      "firstName": "Pavan",
                      "headline": "Front End Developer",
                      "id": "Pv30EVPeqt",
                      "lastName": "Kumar",
                      "numConnections": 1,
                      "pictureUrl": "https://media.licdn.com/mpr/mprx/0__ow4ipSvQevq6xhcdUl9ImuvGu8eh78o7UP46HWvie5dhxOoFH0nwwFvLEBehxuEiajMF4kzfmEW_wEb2MmXIH5JEmEH_wsIoMmRhdKqT7xkWgTBQH4v8gYLoRK4owDV_VoqbUlN_xF",
                      "positions": {"_total": 0},
                      "siteStandardProfileRequest": {"url": "https://www.linkedin.com/profile/view?id=241840088&authType=name&authToken=5uTv&trk=api*a4562121*s4878891*"},
                      "summary": "Front End Developer . .."
                    }]
                  }
    console.log(xyz.values[0].firstName);

    /*binding */
    fName.value            = xyz.values[0].firstName;          
    lName.value            = xyz.values[0].lastName;                               
    email.value            = xyz.values[0].emailAddress;                               
    headLine.value         = xyz.values[0].headline;                               
    NoOfConnections.value  = xyz.values[0].numConnections;                               
    siteLink.value         = xyz.values[0].siteStandardProfileRequest.url;
    mySummary.value        = xyz.values[0].summary;    
    profileImage.src       = xyz.values[0].pictureUrl;    
    profileImgEl.appendChild(profileImage);
	