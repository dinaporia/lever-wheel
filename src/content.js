
/* 
Edit any text inside quotation marks as needed. Make sure no other text is altered! 
*/

const headerContent = {
    title: "Lever & Wheel",
    subtitle: "Writing and Editorial Services",
}; 

const homeContent = {
    tagline: "Expert Editing with a Teacher's Touch",
    description: "Good writing takes a lot of hard work. Writers have always looked for tools to make that work easier. Many of these tools are mechanical: a stylus and wax tablet, pen and paper, a printing press, a typewriter, a laptop. Other tools address the mental work of writing—the lonely, decision-making work that happens mostly or entirely in your own head. At Lever & Wheel, I offer this kind of tool."
};

/* TO ADD/EDIT TEXT TO EXISTING SERVICE, ENTER EACH PARAGRAPH IN QUOTATION MARKS, SEPARATED BY COMMA FROM PREVIOUS PARAGRAPH  */
/* TO ADD AN ADDITIONAL SERVICE, COPY PASTE AN EXISTING SERVICE INCLUDING CURLY BRACES FOLLOWED BY COMMA, THEN EDIT TEXT */
const servicesContent = [
    {
        name: "Copyediting",
        price: "$225",
        description: [
            "Do you have a complete (or nearly complete) piece of writing that you want to ensure is clear, coherent, and error-free? Copyediting identifies and corrects grammatical and syntactical errors, typos, misspellings, formatting mistakes, and other confusions or inconsistencies in documents that are final drafts, close to being submitted.",

            "In writing classes, this stage is often called “polishing” your work. When the quality of your ideas is already there, copyediting makes your writing shine."
        ]
    },
    {
        name: "Developmental editing",
        price: "$225",
        description: [
            "Are you working on a draft (or drafts) of a document that you want to improve substantially before your writing reaches its final form?",

            "Developmental editing provides deeper layers of guidance and feedback throughout the writing process. It is the best form of editing for writers who are still looking to clarify their ideas, make decisions about structure and organization, or for writers who are seeking a breakthrough that can take their work to a new level of sophistication, intelligence, or depth.",

            "Developmental editing is more collaborative than copyediting. My feedback is more substantial and more individual. Developmental editing can be especially helpful for writers who feel stuck or stagnant, trapped in a negative space with their work."
        ]   
    },
    {
        name: "Tutoring or Writing Coaching",
        price: "$225",
        description: [
            ""
        ]
    },
    {
        name: "Editing packages",
        content: [
            {   
                name: "Application Essay Package",
                price: "$225",
                description: [
                    "A 30-minute one-on-one consultation",
                    "Initial developmental edit of an application essay or essays (up to 1500 words)",
                    "Final copyedit of application essay or essays (up to 1500 words)"
                ]
            },
        ]
    }

];

/*  TO EDIT ABOUT CONTENT, INDIVIDUAL PARAGRAPHS MUST BE WRAPPED IN QUOTES AND SEPARATED WITH COMMA */
const aboutContent = [
    "Margaret Bostrom, PhD (she/her)",
   
   " I am a professional college writing instructor with writing program administration experience, over seven years of university-level classroom teaching experience, and more than a decade of experience working as freelance editor, writing coach, and writing tutor.",

    "In 2019, I received my PhD in English with a graduate certificate in Women’s, Gender, and Sexuality Studies from the University of Oregon. As an instructor at UO, I taught a variety of writing courses, including introductory college-level writing classes and courses in interdisciplinary research-based college writing. I also taught literature courses and courses in Women’s, Gender, and Sexuality Studies.",

    "For two years, I served as an Assistant Director for UO’s Composition Program. In that role, I trained incoming writing instructors, led efforts to integrate principals of Universal Design for Learning (UDL) and Project-Based Learning (PBL) into our writing curricula and policies, and worked on our program’s initiatives related to Diversity, Equity, and Inclusion.",
    
    "In my early twenties, around 2010-2012, I worked as a bookseller and supervisor at The Harvard Bookstore (HBS) in Cambridge, Massachusetts. HBS was one of the first independent bookstores to have its own Print-on-Demand book machine (we call her Paige M. Gutenborg). I began working with authors looking to self-publish using HBS's press, providing services I later learned are called developmental editing, copyediting, and writing coaching. Through these experiences, I found out that I love working with people who do NOT think of themselves as writers—a group that, in my experience, includes many authors looking to self-publish, most incoming college students, and a large number of professionals and graduate students. I also enjoy working with writers who are stuck, struggling, or dealing with writer's block, writers who are experiencing a lot of self-doubt or frustration, and/or writers who have undergone some kind of life change (for example, illness or injury, changes in living situation or life responsibilities, etc.) and are trying to re-establish a positive, efficient relationship with their writing life.",

    "In my free time, I love being outdoors, especially on water. I keep my inflatable kayak in the trunk of my car. I love reading and writing poetry, learning new things (I’m learning to play the guitar right now, on an instrument loaned to me by the friend who designed this website!), and being deeply committed to television melodramas like Grey’s Anatomy.",

    "I currently live in Tacoma, WA, with my girlfriend, Candice, her daughter, Sophie, and their cats, Josephine Lovelace March and Tobias Slughorn Fiddlesticks III.",

];

/* TO ADD SOCIAL MEDIA BUTTON, ADD URL BETWEEN QUOTES BELOW
    TO REMOVE SOCIAL MEDIA BUTTON, REMOVE URL LEAVING ""    */
const socialContent = [
    { name: "linkedin", url: "http://linkedin.com" },
    { name: "facebook", url: "http://facebook.com" },
    { name: "instagram", url: "http://facebook.com" },
    { name: "twitter", url: "http://facebook.com" }
];



export { headerContent, aboutContent, homeContent, servicesContent, socialContent };