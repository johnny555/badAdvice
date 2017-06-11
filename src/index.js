'use strict';

var Alexa = require('alexa-sdk');



//=========================================================================================================================================

//TODO: The items below this comment need your attention.

//=========================================================================================================================================



//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.

//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";

var APP_ID = undefined;



var SKILL_NAME = "Bad Deep Learning Advice";

var GET_FACT_MESSAGE = "Here's some advice: ";

var HELP_MESSAGE = "You can say give me advice, or, you can say exit... What can I help you with?";

var HELP_REPROMPT = "What can I help you with?";

var STOP_MESSAGE = "Goodbye!";



//=========================================================================================================================================

//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data

//=========================================================================================================================================

var data = [
    "Don't start until you have a PhD in Applied Statistics.",
    "It's best to constantly switch programming languages, Lua, Python, Haskell, it's all good!",

    "You will be far more productive if you use a new deep learning framework every week.",
    "Validation is only for people who do Kaggle competitions.",

    "If you are doing computer vision, you should probably just use Conditional Random Fields instead of Deep Learning.",
    "Deep Learning can't possibly work because it has so too many parameters and is not a convex problem.",
    "Generative Adversarial Models will never work in practise.",
    "You can't use Deep Learning because you don't have enough data.",
    "Deep Learning can find patterns even when you don't know what you are looking for.",
    "You should use Batch Normalization for everything.",
    "There is no reason why you should innovate away from Convolutional Neural Networks.",
    "There is no way you could train a Recurrent Neural Network.",
    "If you don't work for a startup you can't do deep learning.",
  "Deep Learning models are best trained on a CPU.",
  "K-Means clustering will probably work better than deep learning",
  "When you train an embedding, the network will actually learn meaning.",
  "Rectified Linear Unit is a medical condition effecting the bowel.",
  "The best activation function you could use is Linear.",
  "For Deep Learning, data quality does not matter"
];



//=========================================================================================================================================

//Editing anything below this line might break your skill.

//=========================================================================================================================================

exports.handler = function(event, context, callback) {

    var alexa = Alexa.handler(event, context);

    alexa.APP_ID = APP_ID;

    alexa.registerHandlers(handlers);

    alexa.execute();

};



var handlers = {

    'LaunchRequest': function () {

        this.emit('GetNewFactIntent');

    },

    'GetNewFactIntent': function () {

        var factArr = data;

        var factIndex = Math.floor(Math.random() * factArr.length);

        var randomFact = factArr[factIndex];

        var speechOutput = GET_FACT_MESSAGE + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)

    },

    'AMAZON.HelpIntent': function () {

        var speechOutput = HELP_MESSAGE;

        var reprompt = HELP_REPROMPT;

        this.emit(':ask', speechOutput, reprompt);

    },

    'AMAZON.CancelIntent': function () {

        this.emit(':tell', STOP_MESSAGE);

    },

    'AMAZON.StopIntent': function () {

        this.emit(':tell', STOP_MESSAGE);

    }

};
