describe("AIG Call",()=>{

        let RegistrationToken=null; //First Create the RegistrationTokenID
        let LoginToken=null;  // Use RegistrationTokenID as Body for creating LoginTokenID
         //Use LoginTokenID as authKey for GetPaymentDetails and UpdatePaymentDetails

    before("Creating RegistrationTokenID",()=>{
        cy.fixture('Registration')
        .then((Data)=>{
          const requestBody=Data;
  
          cy.request({
            method:'POST',
            url:'https://aigdigitalplatform.aigci-sandbox.com/RegistrationAPI',
            headers:{
                'content-type':'application/json',
                'authkey':'fFUrueF5oPuk2tzzsEIA4myrzAx+SvG/LXNQb5X0h4I='
            },
            body:requestBody
            })
  
          .then((response)=>{
           expect(response.status).to.equal(200)
           RegistrationToken= response.body.RegistrationTokenID; //First Create the RegistrationTokenID
           console.log(RegistrationToken)
            })
        })
  
      })

      before("Creating LoginTokenID ",()=>{
          cy.request({
            method:'POST',
            url:'https://aigdigitalplatform.aigci-sandbox.com/LoginAPI',
            headers:{
                'content-type':'application/json',
                'authkey':'fFUrueF5oPuk2tzzsEIA4myrzAx+SvG/LXNQb5X0h4I='
            },
            body:RegistrationToken  // Use RegistrationTokenID as Body for creating LoginTokenID
            })
  
          .then((response)=>{
           expect(response.status).to.equal(200)
           LoginToken= response.body.LoginTokenID; // creating LoginTokenID
           cy.log(LoginToken)
            })
      })

      it("Get Payment Details",()=>{
        cy.fixture('GetPayment')
        .then((Data)=>{
          const requestBody=Data;
          
          cy.request({
          method:'POST',
          url:'https://aigdigitalplatform.aigci-sandbox.com/GetPaymentDetails',
          headers:{
              'content-type':'application/json',
              'authkey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InNhdHlhIiwiZmFtaWx5X25hbWUiOiJkd2l2ZWRpIiwiZW1haWwiOiJzYXR5ZW5kcmEuZHdpdmVkaUB0ZWNocmJtLmNvbSIsImdyb3Vwc2lkIjoiQ0ktQUlHLUxJRkVSQUZUIiwibmJmIjoxNzA1NDIwNzQxLCJleHAiOjE3MDU0MjQzNDEsImlhdCI6MTcwNTQyMDc0MSwiaXNzIjoiQ0lJZGVudGl0eVNlcnZpY2VzIiwiYXVkIjoiaWRlbnRpdHlTZXJ2aWNlc1JlcXVlc3RlciJ9.QyWtF6542T45UEDrFkhEdhStJeTJMAs9QFYy6OUDKAs'  //Use LoginTokenID as authKey for GetPaymentDetails
            //  'authkey': LoginToken
          },
          body:requestBody
          })

        .then((response)=>{
         expect(response.status).to.equal(200)
          })
        })
      })

        it("Update Payment Details",()=>{
          cy.fixture('UpdatePaymentDetail')
          .then((Data)=>{
            const requestBody=Data;
            
            cy.request({
            method:'POST',
            url:'https://aigdigitalplatform.aigci-sandbox.com/UpdatePaymentDetails',
            headers:{
                'content-type':'application/json',
                'authkey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InNhdHlhIiwiZmFtaWx5X25hbWUiOiJkd2l2ZWRpIiwiZW1haWwiOiJzYXR5ZW5kcmEuZHdpdmVkaUB0ZWNocmJtLmNvbSIsImdyb3Vwc2lkIjoiQ0ktQUlHLUxJRkVSQUZUIiwibmJmIjoxNzA1NDIwNzQxLCJleHAiOjE3MDU0MjQzNDEsImlhdCI6MTcwNTQyMDc0MSwiaXNzIjoiQ0lJZGVudGl0eVNlcnZpY2VzIiwiYXVkIjoiaWRlbnRpdHlTZXJ2aWNlc1JlcXVlc3RlciJ9.QyWtF6542T45UEDrFkhEdhStJeTJMAs9QFYy6OUDKAs'  //Use LoginTokenID as authKey for UpdatePaymentDetails
            },
            body:requestBody
            })
  
          .then((response)=>{
           expect(response.status).to.equal(200)
            })
          })

    })

})      

