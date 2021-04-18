
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
        name: "Writing Tutoring and Coaching",
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
    "I am an editor, writer, and teacher with nearly two decades of experience across a wide variety of editorial projects.",
    "I have worked with self-published authors, print & web publications, textbook publishers, undergraduate and graduate students, career academics, and working professionals."
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