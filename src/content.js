
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

/* TO ADD AN ADDITIONAL SERVICE, COPY PASTE AN EXISTING SERVICE INCLUDING CURLY BRACES FOLLOWED BY COMMA, THEN EDIT TEXT */
const servicesContent = [
    {
        name: "Copyediting",
        description: ""
    },
    {
        name: "Developmental editing",
        description: ""
    },
    {
        name: "Writing Tutoring and Coaching",
        description: ""
    },
    {
        name: "Editing packages",
        description: ""
    },
    {
        name: "Other",
        description: ""
    },
];

/*  TO EDIT ABOUT CONTENT, INDIVIDUAL PARAGRAPHS MUST BE WRAPPED IN QUOTES AND SEPARATED WITH COMMA */
const aboutContent = [
    "Margaret Bostrom, PhD (she/her",
    "I am an editor, writer, and teacher with nearly two decades of experience across a wide variety of editorial projects.",
    "I have worked with self-published authors, print & web publications, textbook publishers, undergraduate and graduate students, career academics, and working professionals."
];

/* TO ADD SOCIAL MEDIA BUTTON, ADD URL BETWEEN QUOTES BELOW
    TO REMOVE SOCIAL MEDIA BUTTON, REMOVE URL LEAVING ""    */
const socialContent = [
    { name: "linkedin", url: "" },
    { name: "facebook", url: "" },
    { name: "instagram", url: "" },
    { name: "twitter", url: "" }
];



export { headerContent, aboutContent, homeContent, servicesContent, socialContent };