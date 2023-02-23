
// (Q1)Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
// Handle of author
// content, 
// An image link posted by the author of the post
// Number of views, 
// Number of likes, 

function instagramPost (handleOfAuthor, content, imageLink, numOfViews, numOfLikes){
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imageLink = imageLink;
    this.numOfViews = numOfViews;
    this.numOfLikes = numOfLikes;

}
// (Q2)    Create 2 Instagram post objects from the constructor function you created above

const solatTelecoms = new instagramPost("@solattelecoms", "Prize presentation", "https://www.instagram.com/p/Co9suGQIOnC/?hl=en", 17, 150);
console.log(solatTelecoms);

const channelsTelevision = new instagramPost('@channelstelevision', 'News', 'https://www.instagram.com/p/CUpMH4tqS2KXzpc91Cy8r_YyihzJpAYcpj9s_Q0/?hl=en', 3338, 3679 );
console.log(channelsTelevision);

// (Q3)    
// Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:
// ENG - 70
// GOVT - 85
// LIT - 82
// CRK - 94

// (Q3.a)  
// Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function. 

function createPersonal (name, age, location){
    return{
        candidateName : name,
        candidateAge : age,
        candidateLocation : location
    }
}

const Musa = new createPersonal("Musa Dawodu", 19 +" years", "Lekki, Lagos state")
console.log(Musa);

// (Q3.b.i)
// Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above


function createJambScores( ENG, GOVT, LIT, CRK){
    return{
        eng : ENG,
        govt : GOVT,
        lit : LIT,
        crk : CRK,
    }
}

const MusaJambScore = new createJambScores(70, 85, 82, 94);
console.log({MusaJambScore});

// (Q3.b.ii)
Object.assign(Musa, MusaJambScore);
console.log(Musa);

// object.assign method
Object.assign(Musa, MusaJambScore);
console.log(Musa);

// using spread operator

const MusaDetails = {...Musa, ...MusaJambScore}
console.log({MusaDetails});

// (Q5)As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:



const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
   APC: 'Bola Ahmed Tinubu',
   LP: 'Peter Obi',
   NNPP: 'Rabiu Kwankwaso',
   PDP: 'Atiku Abubakar',
}

for (const party in presidentialCandidates) {
    const candidateName = presidentialCandidates[party];
    console.log(candidateName + " is the presidential candidate of " + party );
    
}
