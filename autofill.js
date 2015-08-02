      var fName           = document.getElementById('fname'),
          lName           = document.getElementById('lname'),
          email           = document.getElementById('email'),
          headLine        = document.getElementById('headline'),
          NoOfConnections = document.getElementById('numConnections'),
          siteLink        = document.getElementById('siteProfileRequest'),
          mySummary       = document.getElementById('summary'),
          profileImgEl    = document.getElementById('profileimage'),
          profileImage    = document.createElement('img');

			var loadLinkedin = function(){
				IN.Event.on(IN, "auth", OnLinkedInAuth);
			}

			var OnLinkedInAuth = function() {
			    //IN.API.Profile("me").result(ShowProfileData);
			    IN.API.Profile("me")
			          .fields(["siteStandardProfileRequest", "firstName", "lastName", "headline", "summary", "num-connections", "picture-url", 'id','email-address','date-of-birth','phone-numbers','positions'])
			          .result(function(result) {
			            console.log('test result ', JSON.stringify(result));
                  bindFormData(result);
			          });
			}
		
    var bindFormData = function(profileDetails){
      if(typeof profileDetails === 'object'){
        console.log(profileDetails.values[0].firstName);

        /*binding */
        fName.value            = profileDetails.values[0].firstName;          
        lName.value            = profileDetails.values[0].lastName;                               
        email.value            = profileDetails.values[0].emailAddress;                               
        headLine.value         = profileDetails.values[0].headline;                               
        NoOfConnections.value  = profileDetails.values[0].numConnections;                               
        siteLink.value         = profileDetails.values[0].siteStandardProfileRequest.url;
        mySummary.value        = profileDetails.values[0].summary;    
        profileImage.src       = profileDetails.values[0].pictureUrl;    
        profileImgEl.appendChild(profileImage);
      }
	 }