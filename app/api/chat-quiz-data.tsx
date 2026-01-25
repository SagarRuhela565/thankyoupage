const ChatAPI = {
  "config": {
    "agent": {
      "name": "Mary",
      "profileImage": "/images/avatar.png"
    },
    "user": {
      "name": "User",
      "profileImage": "/images/user-avatar.png"
    },
    "messageTimeInterval": 1000,
    "trackdriveOfferToken": "#",
    "ageThreshold": 65
  },
  "chats": [
    {
      "role": "agent",
      "text": "Hello 👋",
      "messageTimeInterval": 800
    },   
    {
      "role": "agent",
      "text": "I'm Mary. This will only take a minute.",
      "messageTimeInterval": 1500
    },
    {
      "role": "agent",
      "text": "Want to find out if you qualify to receive a Spending Allowance Card and other benefits? Tap Yes!",
      "messageTimeInterval": 800
    },
    {
      "role": "agent",
      "button": {
        "text": "Yes",
        "loadTrackdrive": true
      }
    },
    {
      "role": "user",
      "text": "Yes",
      "name": "cta"
    },
    {
      "role": "agent",
      "text": "Great, let me ask you two quick questions",
      "messageTimeInterval": 1200
    },
    {
      "role": "agent",
      "text": "What year were you born?",
      "messageTimeInterval": 800
    },
    {
      "role": "agent",
      "input": {
        "id": 1,
        "buttonText": "Confirm",
        "name": "age",
        "placeholder": "Year",
        "fixedValue": "19"
      }
    },
    {
      "role": "agent",
      "text": "Are you on Medicaid or Medicare?",
      "messageTimeInterval": 1000,
      "condition": {
        "field": "userAge",
        "value": 65,
        "operator": "lt"
      }
    },
    {
      "role": "agent",
      "optionsData": {
        "id": 2,
        "name": "hasMedicaid",
        "options": [
          {
            "label": "Yes",
            "value": "yes",
            "type": "positive"
          },
          {
            "label": "No",
            "value": "no",
            "type": "negative"
          }
        ]
      },
      "condition": {
        "field": "userAge",
        "value": 65,
        "operator": "lt"
      }
    },
    {
      "role": "agent",
      "text": "Whats your email?",
      "messageTimeInterval": 800,
      // "condition": [{
      //   "field": "userAge",
      //   "value": 65,
      //   "operator": "lt"
      // },{
      //   "field": "hasMedicaid",
      //   "value": "no",
      //   "operator": "equals"
      // }]
    },
    {
      "role": "agent",
      "input": {
        "id": 3,
        "buttonText": "Enter your email",
        "name": "email",
        "placeholder": "Email"
      },
      //  "condition": [{
      //   "field": "userAge",
      //   "value": 65,
      //   "operator": "lt"
      // },{
      //   "field": "hasMedicaid",
      //   "value": "no",
      //   "operator": "equals"
      // }]
    },
     {
      "role": "agent",
      "text": "What is your Name?",
      "messageTimeInterval": 800,
      // "condition": [{
      //   "field": "userAge",
      //   "value": 65,
      //   "operator": "lt"
      // },{
      //   "field": "hasMedicaid",
      //   "value": "no",
      //   "operator": "equals"
      // }]
    },
    {
      "role": "agent",
      "input": {
        "id": 4,
        "buttonText": "Enter your name",
        "name": "name",
        "placeholder": "name"
      },
      //  "condition": [{
      //   "field": "userAge",
      //   "value": 65,
      //   "operator": "lt"
      // },{
      //   "field": "hasMedicaid",
      //   "value": "no",
      //   "operator": "equals"
      // }]
    },
     {
      "role": "agent",
      "text": "What is your phone number?",
      "messageTimeInterval": 800,
      "condition": [{
        "field": "userAge",
        "value": 65,
        "operator": "lt"
      },{
        "field": "hasMedicaid",
        "value": "no",
        "operator": "equals"
      }]
    },
    
    {
      "role": "agent",
      "input": {
        "id": 5,
        "buttonText": "Enter your phone number ?",
        "name": "phone",
        "placeholder": "phone"
      },
      //  "condition": [{
      //   "field": "userAge",
      //   "value": 65,
      //   "operator": "lt"
      // },{
      //   "field": "hasMedicaid",
      //   "value": "no",
      //   "operator": "equals"
      // }]
    },
        {
      "role": "agent",
      "text": "Thanks for your response",
      "messageTimeInterval": 1000,
      // "condition": {
      //   "field": "userAge",
      //   "value": 65,
      //   "operator": "gte"
      // }
    },
    {
      "role": "agent",
      "optionsData": {
        "id": 6,
        "name": "submit",
        "isFinalQue": true,
        "options": [
          {
            "label": "No",
            "value": "no",
            "type": "positive",
            "redirectUrl": "#"
          },
          {
            "label": "Yes",
            "value": "yes",
            "type": "positive",
            "redirectUrl": "#"
          }
        ]
      }
    },
    {
      "role": "agent",
      "text": "Last question:",
      "messageTimeInterval": 800,
      // "condition": {
      //   "field": "userAge",
      //   "value": 65,
      //   "operator": "gte"
      // }
    },
    {
      "role": "agent",
      "text": "Do you take any special medications for a chronic or rare medical condition?",
      "messageTimeInterval": 1800,
      // "condition": {
      //   "field": "userAge",
      //   "value": 65,
      //   "operator": "gte"
      // }
    },
    {
      "role": "agent",
      "text": "Either way, you can still qualify",
      "messageTimeInterval": 1000,
      // "condition": {
      //   "field": "userAge",
      //   "value": 65,
      //   "operator": "gte"
      // }
    },
    {
      "role": "agent",
      "optionsData": {
        "id": 2,
        "name": "anyMedicalCondition",
        "isFinalQue": true,
        "options": [
          {
            "label": "No",
            "value": "no",
            "type": "positive"
          },
          {
            "label": "Yes",
            "value": "yes",
            "type": "positive"
          }
        ]
      },
      // "condition": {
      //   "field": "userAge",
      //   "value": 65,
      //   "operator": "gte"
      // }
    },
    {
      "role": "agent",
      "text": "🎉 Congratulations! 🎁",
      "messageTimeInterval": 800
    },
    {
      "role": "agent",
      "text": "Calculating your benefits...",
      "messageTimeInterval": 1500
    },
    {
      "role": "agent",
      "text": "It looks like you may qualify for a Spending Allowance Card!",
      "messageTimeInterval": 1500
    },
    {
      "role": "agent",
      "text": "You can use it for groceries and other expenses",
      "messageTimeInterval": 1200
    },
    {
      "role": "agent",
      "text": "Tap the number below to confirm your eligibility and claim your benefits",
      "messageTimeInterval": 1800
    },
    {
      "role": "agent",
      "text": "Make sure to mention you are calling about the updated 2026 Medicare Benefits",
      "messageTimeInterval": 1000
    },
    {
      "role": "agent",
      "image": "/images/cc.png",
      "messageTimeInterval": 800
    },
    {
      "role": "agent",
      "text": "Your spot is being held for <span style=\"color:red;\">{{timer}}</span>",
      "messageTimeInterval": 1000,
      "timer": {
        "count": 120
      }
    },
    {
      "role": "agent",
      "text": "(844) 452-7711",
      "messageTimeInterval": 600,
      "type": "trackdrive"
    },
    {
      "role": "agent",
      "button": {
        "text": "Call Now!",
        "type": "trackdrive",
        "href": "tel:+18444527711"
      }
    }
  ]
}

export default ChatAPI;