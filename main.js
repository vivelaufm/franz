"use strict";
 

var BotName="Franz"

function getMessage (type) {

     var message = {
        'Despacito': function () {
          return "Comin over in my direction Dess pa cito . Quiero respirar tu cuello despacito. \
            Deja que te diga cosas al oído. Pasito a pasito, suave suavecito Nos vamos pegando, \
            poquito a poquito";
           
        },
        'AboutYourself': function () {
            let birthday = new Date();
            birthday= `${birthday}`.substring(0,`${birthday}`.indexOf("GMT"));
            return `Hello my name is ${BotName}. I'm your personal assistant. \
            I was born on ${birthday} at,  be ve la UFM  \
            which is an event by Universidad Francisco Marroquin `;
                
        },

        'default': function () {
          return 'you know I love you <3' ;
        }
      };
  


  return (message[type]() || message['default']());
}




//DO NOT TOUCH CODE BELOW
//----------------------------------------------------


// Close dialog with the customer, reporting fulfillmentState of Failed or Fulfilled ("Thanks, your pizza will arrive in 20 minutes")
function close(sessionAttributes, fulfillmentState, message) {
    return {
        sessionAttributes,
        dialogAction: {
            type: 'Close',
            fulfillmentState,
            message,
        },
    };
}
 
// --------------- Events -----------------------
 

function dispatch(intentRequest, callback) {
    console.log('request received for userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.intentName}');
    const sessionAttributes = intentRequest.sessionAttributes;
    const slots = intentRequest.currentIntent.slots;
    console.log(intentRequest)
    var intentName= intentRequest.currentIntent.name;
    //console.log(`Requeste received for IntentName = ${intentName}`);
    // var name = slots.name;
    // var summary = slots.summary;
    // console.log(`request received for Slots=${name}, ${summary}`);
    
    var msg = getMessage(intentName);
    console.log("Sending the following message: " + msg)

    callback(close(sessionAttributes, 'Fulfilled',
    {'contentType': 'PlainText', 'content': msg}));


}

// --------------- Main handler -----------------------
 
// Route the incoming request based on intent.
// The JSON body of the request is provided in the event slot.
exports.handler = (event, context, callback) => {
    try {
        dispatch(event,
            (response) => {
                callback(null, response);
            });
    } catch (err) {
        callback(err);
    }
};

