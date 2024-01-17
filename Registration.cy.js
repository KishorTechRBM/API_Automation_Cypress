describe("AIG Call",()=>{

        let RegistrationToken=null; //First Create the RegistrationTokenID
        let LoginToken=null;  // Use RegistrationTokenID as Body for creating LoginTokenID
         //Use LoginTokenID as authKey for GetPaymentDetails and UpdatePaymentDetails

    before("Creating RegistrationTokenID",()=>{
      cy.fixture('All_URL')
        .then((URL)=>{
        cy.fixture('Registration')
        .then((Data)=>{
          const requestBody=Data;
  
          cy.request({
            method:'POST',
            url: URL.Registration_URL,
            headers:{
                'content-type':'application/json',
                'authkey':URL.Registration_authkey
            },
            body:requestBody
            })
  
          .then((response)=>{
           expect(response.status).to.equal(200)
           RegistrationToken= response.body.RegistrationTokenID; //First Create the RegistrationTokenID
            })
        })
      })
  })

      before("Creating LoginTokenID ",()=>{
        cy.fixture('All_URL')
        .then((URL)=>{
          cy.request({
            method:'POST',
            url:URL.Login_URL,
            headers:{
                'content-type':'application/json',
                'authkey':URL.Login_authkey
            },
            body:RegistrationToken  // Use RegistrationTokenID as Body for creating LoginTokenID
            })
  
          .then((response)=>{
           expect(response.status).to.equal(200)
           LoginToken= response.body.LoginTokenID; // creating LoginTokenID
            })
      })
  })

      it("Get Payment Details",()=>{
        cy.fixture('All_URL')
        .then((URL)=>{
          cy.fixture('GetPayment')
          .then((Data)=>{
          const requestBody=Data;
          
          cy.request({
          method:'POST',
          url:URL.GetPayment_URL,
          headers:{
              'content-type':'application/json',
              'authkey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InNhdHlhIiwiZmFtaWx5X25hbWUiOiJkd2l2ZWRpIiwiZW1haWwiOiJzYXR5ZW5kcmEuZHdpdmVkaUB0ZWNocmJtLmNvbSIsImdyb3Vwc2lkIjoiQ0ktQUlHLUxJRkVSQUZUIiwibmJmIjoxNzA1NTA0NDEwLCJleHAiOjE3MDU1MDgwMTAsImlhdCI6MTcwNTUwNDQxMCwiaXNzIjoiQ0lJZGVudGl0eVNlcnZpY2VzIiwiYXVkIjoiaWRlbnRpdHlTZXJ2aWNlc1JlcXVlc3RlciJ9.283dFoZCR_KuhxcOG7Roxk59Z5cz3psUIw8sukMq-9c'  //Use LoginTokenID as authKey for GetPaymentDetails
          //  'authkey': LoginToken
          },
          body:requestBody
          })

        .then((response)=>{
         expect(response.status).to.equal(200)
          })
        })
    })
  })

        it("Update Payment Details",()=>{
          cy.fixture('All_URL')
          .then((URL)=>{
              cy.fixture('UpdatePaymentDetail')
              .then((Data)=>{
            const requestBody=Data;
            
            cy.request({
            method:'POST',
            url:URL.UpdatePayment_URL,
            headers:{
                'content-type':'application/json',
                'authkey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InNhdHlhIiwiZmFtaWx5X25hbWUiOiJkd2l2ZWRpIiwiZW1haWwiOiJzYXR5ZW5kcmEuZHdpdmVkaUB0ZWNocmJtLmNvbSIsImdyb3Vwc2lkIjoiQ0ktQUlHLUxJRkVSQUZUIiwibmJmIjoxNzA1NTA0NDEwLCJleHAiOjE3MDU1MDgwMTAsImlhdCI6MTcwNTUwNDQxMCwiaXNzIjoiQ0lJZGVudGl0eVNlcnZpY2VzIiwiYXVkIjoiaWRlbnRpdHlTZXJ2aWNlc1JlcXVlc3RlciJ9.283dFoZCR_KuhxcOG7Roxk59Z5cz3psUIw8sukMq-9c'  //Use LoginTokenID as authKey for UpdatePaymentDetails
            //  'authkey': LoginToken
            },
            body:requestBody
            })
  
          .then((response)=>{
           expect(response.status).to.equal(200)
            })
          })
      })
  })

})      

