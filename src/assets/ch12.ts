import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class ch12 {
  content = {meta: 
     [
        {name: "", color: "white", buttons: [{value: "Next", nextC: 12, nextEN: 1}]},                     
        {name: "Leon:", color: "yellow", buttons: [{value: "Next", nextC: 12, nextEN: 2}]},
        {name: "Taurin:", color: "#4da6ff", buttons: [{value: "Next", nextC: 12, nextEN: 3}]},
        {name: "Leon:", color: "yellow", buttons: [{value: "Say Nothing", nextC: 12, nextEN: 6}, {value: "Persuade to come to Trial", nextC: 12, nextEN: 4}]},
        {name: "Taurin:", color: "#4da6ff", buttons: [{value: "Next", nextC: 12, nextEN: 5}]},
        {name: "Leon:", color: "yellow", buttons: [{value: "Next", nextC: 12, nextEN: 6}]},
        {name: "", color: "white", buttons: [{value: "Next", nextC: 12, nextEN: 7}]},                     
        {name: "Martha:", color: "yellow", buttons: [{value: "Next", nextC: 12, nextEN: 8}]},
        {name: "Taurin:", color: "#4da6ff", buttons: [{value: "Next", nextC: 12, nextEN: 9}]},
        {name: "Martha:", color: "yellow", buttons: [{value: "Next", nextC: 12, nextEN: 10}]},
        {name: "Taurin:", color: "#4da6ff", buttons: [{value: "Next", nextC: 12, nextEN: 11}]},
        {name: "", color: "white", buttons: [{value: "Next", nextC: 12, nextEN: 12}]},                     
        {name: "Taurin:", color: "#4da6ff", buttons: [{value: "Next", nextC: 12, nextEN: 13}]},
        {name: "", color: "white", buttons: [{value: "Next", nextC: 12, nextEN: 14}]},                     
        {name: "Tarik:", color: "yellow", buttons: [{value: "Next", nextC: 12, nextEN: 15}]},
        {name: "", color: "white", buttons: [{value: "Go Away", nextC: 12, nextEN: 19}, {value: "Ask him to come to Trial", nextC: 12, nextEN: 16}]},                     
        {name: "Taurin:", color: "#4da6ff", buttons: [{value: "Next", nextC: 12, nextEN: 17}]},
        {name: "Tarik:", color: "yellow", buttons: [{value: "Next", nextC: 12, nextEN: 18}]},
        {name: "Taurin:", color: "#4da6ff", buttons: [{value: "Next", nextC: 12, nextEN: 19}]},
        {name: "", color: "white", buttons: [{value: "Next", nextC: 13, nextEN: 0}]},                     

      ],
  

text:    [
        "The bakery is closer and the smell of fresh bread sounds very alluring, so you decide to go there first. You move inbetween the small houses of the North-Eastern quarter to get back to the central square. Since the sun is standing so high now, there is barely any shade and you feel your skin happily taking in the light. Oh, how you love lying around in the sun in the summer. Sadly, since your father had become overseer of Eric's fields, your family now also has to help with the harvest. This means that every summer now is filled with hard work and your time spent relaxing in the sun has been significantly limited. Such a drag. The village bakery is located right at the big central square on the side of the North-Western quarter. It is one of the few stone houses in the village, but considering that there is a gigantic oven burning inside every day, it makes sense to have a bit more fire resistant material. You do not really like the baker. He is neither a Greenwood nor a Mountainspring and has so far never taken any sides in the hostilities between your honorable clan and those dirty Greenwoods. He just sells bread to anybody who can pay. Can't he see that these Greenwoods were nothing but disgusting runts? Well, you are sure that if he hears what happened last night, he will change his mind. Except it didn't. The attack was not unprovoked...    Forget that, Taurin. Just forget, Peter never told you about that. Junior was unprovokedly attacked by a dirty Greenwood bastard and that was it. You have arrived at the central square and turn towards the bakery. As you open the door, the smell of fresh bread hits you. Wonderful. The baker looks at you with a slightly annoyed face, as though you have disturbed his peace, sitting behind the counter. Isn't he supposed to be happy to have a customer?",
        "Ahhhhh, Taurin. What can I do for you today? Just one loaf of bread as usual?",
        "Yes, one loaf of bread, that's all for today. Have you heard what happened? Oscar is being put on trial for unprovokedly attacking Junior last night.",
        "Of course, I have heard. But if you think you can pull me into your dirty game of politics, then you are dead wrong. You Mountainsprings out there have your little witch hunt. I will stay right here, where I am.",
	"But we are going to punish the Greenwoods for what they have done to us. Everybody has to come and watch the Mountainsprings show that they will not be played like that. Maybe Paul might otherwise think that you are not loyal to the right clan...",
	"Woah, little one you better not start wielding threats around me. Now, I will let it slide this time, because I know you have no idea what you are talking about, but if you try to do something like that again, then you might find yourself on the ground with a smashed in face just like your friend Junior.",
        "You had expected something like that, but not willing to risk any further confrontation, take the loaf, put some money on the counter, soak in the smell of fresh bread one last time and leave the bakery. Back out on the main square you already see people moving in and out of the small town hall, building up something like a podium on the big square. They really must want everybody to come, if they do not think that the town hall itself will be big enough. Well, if you have a spectacle, then at least get as many people as possible to see it. And the more people realize how dirty and disgusting the Greenwoods are the better. Unprovokedly attacking a Mountainspring, everybody has to learn what consequences that has. You wait for resistance in your brain to tell you that the attack was not unprovoked, but none comes. Seems like the new story you have been telling others has taken hold of your brain already as well. Who cares about the truth, this makes more sense. Greenwoods are miserable creatures. It fits perfectly for them to do something as stupid and offending as this. With the loaf of bread in your hand you start walking toward Tarik's workshop again. With the sun in your face as you walk toward the South-Western quarter, you start to smile and whistle a small tune. You walk back into the shade of the small streets and kick up dustclouds from the tiny alleyway. Some of that gets on your shirt and makes it dirty, so you stop again, getting annoyed. As you arrive at Tarik's house, your good mood is already gone again. Tarik is not outside smithing, even though the fire is still crackling away. You go up to the door and knock. After a few seconds, his wife Martha opens the door and looks at you with a disgruntled face. You know that has not necessarily something to do with you, Martha is just always upset about something and holds nothing back in letting her dissatisfaction out on anybody who comes along. ",
        "What do you want? I don't have time for you kids' shennanigans.",
        "I am not a kid anymore! I was sent by my father to collect an order from your husband. Is he home?",
        "Of course he is home. Do you really think that that lazy bugger would ever move his ass further than the porch. He's on the other side of the house, being lazy as usual.",
        "Thank...",
        "Before you can finish your sentence, Martha has already slammed the door closed again. You don't like her. In fact, nobody in the entire village likes her, but what can you do. Now more than slightly annoyed, you walk around the house. The fire is still very hot as you pass it, to the point where you feel uncomfortable and try to get away as quickly as possible. There is about one to two meters of space between the backside of Tarik's house and the rotting wall of wooden pikes that had been built even before you were born. You never found out what this village had to protect itself from to build a two meter high fence of 40cm thick trunks, pointed at their tops. Nothing exciting, let alone dangerous ever happened here unless caused by the victims own stupidity and lack of carefulness. Now the wall is rotting away and it looks like the logs will break on their own at any time, even without any intervention from outside attackers. Inbetween his house and the wall, Tarik has built a small podium that lets him see beyond the fence and has equipped it with a chair. On that chair he sits, lounging in the sun while drinking a beer from an enormous wooden mug. It looks quite comfortable. ",
        "Tarik, have you finished my father's order now?",
        "Tarik slowly turns toward you, takes a sip from his mug and looks at you annoyed. ",
        "Have you once again come to pester me? Yes I have finished, otherwise I would not be relaxing here. I've wrapped it and put it on the small table next to the fire. You can get it yourself.",
        "He turns his face to the sun again, closing his eyes.",
        "Have you heard what happened? They arrested Oscar for unprovokedly attacking Junior last night. They are gonna put him on trial this afternoon. We're gonna get back at them for what they have done to one of us. Miserable Greenwoods.",
        "Is that so? ... Mhhh, now that sounds interesting. Maybe I will come as well. Curious to see what they will do to that bugger. Always pretending to be better than anybody else. Seems like this time it got him into pretty deep trouble. Well, if what you say is true, he more than deserves whatever his punishment will be. ",
        "And his punishment will be bad. We can not forgive someone who unprovokedly attacks another villager, especially not the son of the great Mountainspring clan's leader himself.",
        "Tarik looks away as if in deep thought. You stand there for a few more seconds, unsure what to do, but then turn away and go back to the fire. Indeed, there is a bundle of dirty cloth and as you lift it with something quite heavy inside. Metal pieces seem to clink against each other as you throw it over your shoulder. Bread in one hand, mysterious metal construction in the other, you start going back home once more. The life of an errant boy: a lot of walking combined with a lot of boredom. Well, at least today, for the first time in your life something exciting is about to happen."
      ]
}
}
