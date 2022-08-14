### Welcome!
My name is Matthew McArdle and I am a Software Engineering Student at the University of Guelph. On this page I will be going into great detail about my first co-op placement during my time at the amazing Waterloo company Magnet Forensics. I hope by the end of this you get a good idea about all the awesome experiences I had during my time at Magnet, and are as blown away as I am about how many different things I had the opportunity to learn.

---

### About Magnet Forensics
Magnet Forensics is a Waterloo-based company that develops tools used primarily by law enforcement or private investigators to uncover digital evidence left on suspects' or victims' devices. I joined Magnet in May of 2021, which just so happened to be at a very exciting time for the company. On April 28th they became the first Waterloo company to have an IPO in 15 years.

---

### AXIOM
Their flagship product is Magnet AXIOM, the desktop tool used to uncover and examine digital evidence from mobile, computer, or cloud sources. Many different teams work together to develop AXIOM. For example, there is a dedicated team to parse/extract artifacts (digital evidence that may come in many formats, ex: Skype Call Metadata), and another team to develop EXAMINE, the interface used to analyze and build cases from the data extracted.

---

### MDIS
While Magnet AXIOM certainly is the company's most successful product, there are some super exciting innovations earlier in their product lifecycle that are rapidly growing in popularity. The most mature of these innovations come as a trio of products that are marketed together as a part of the Magnet Digital Investigation Suite (MDIS). These three tools are Magnet AUTOMATE which automates workflows that forensic examiners might otherwise have to perform manually, Magnet ATLAS which provides collaborative and case management tools for investigators, and Magnet REVIEW which is a web application to enable non-technical examiners to review evidence and build cases remotely while interacting with a more user-friendly interface than more forensically intensive products such as AXIOM. Magnet REVIEW ended up being the team I joined for my co-op term and I will go into far more detail later on.

---

### Guest Speakers
One thing that I really came to appreciate about Magnet is its policy at each all-hands meetings to have a guest speaker from the field talk about their real-life experiences involving digital forensics. They would go over case after case of crimes that seemed straight out of a TV show, and hearing about the impact that Magnet was able to make on these cases was so powerful. When the stakes involve justice for the innocent it cannot be stressed enough how motivating it is to come into work with the right attitude and work ethic. I found it amazing how inspiring these detectives were. They were the real heros so to hear them talk about Magnet's products in such a good light made me so proud to be there (even as a co-op). During my time here we got the chance to hear from guest speakers from Nashville, Scotland, and even Germany. Each speaker came with their own amazing stories about how real crimes were solved using the tools that Magnet has provided.

---

### My Team / Introduction
As mentioned before I joined the Magnet REVIEW team. More specially I originally joined the Taco sub-team which specializes in deployment and infrastructure primarily. This came as very exciting but terrifying news to know I would be surrounded by super cool tech which I unfortunately had little to no experience with. I knew that this term would certainly give me more than enough opportunities to try out new technologies and immediately knew I was on a team that was more than happy to help me learn. I want to take some time now to go over some important themes/tasks I performed during my time at Magnet to demonstrate some of the awesome opportunities I had to learn.

---

### Bash Installer
During the early days of my term I found myself working quite frequently on our product's installer. It was written in Bash which I had some experience with during University, so I found it far more approachable than other parts of the product. I started off with small little quality of life improvements such as changing the name of the installer's folder from dist to review-VERSION, and slowly built up to adding configuration options into the installer such as allowing them to configure their company's logo that gets uploaded for use in the front-end.

---

### Jenkins Automation / Azure CLI
The next phase of my co-op involved entering the world of Jenkins. For the unfamiliar, Jenkins is a pipeline based automation and continuous integration tool to build, test, and deploy our product. I first worked on a ticket to address an issue that I saw arising involving what I would call orphaned clusters. There seemed to be an issue where one of our build jobs would be triggered to spin up an instance of our product to do some testing on, but after the testing was completed, the cluster was not being torn down. This can be quite a problem when these clusters can cost over $2000 a month. I decided to familiarize myself with the Jenkins pipeline used to build these clusters and the Azure CLI to interact with the resources being created. I ended up using Jenkins environment variables to determine who kicked off the job and then the Azure CLI to automatically tag the resources with the name of the person who started the build in order to maintain responsibility for the clusters. Because of this, it is now far easier to clean up these clusters and save ourselves from spending $2000 a month on a cluster we weren't even using.

---

### C# (CLI XML Parsing)
My next (and probably my favourite) project of my co-op involved pair-programming with another developer on the team to develop new parsers for our CLI. For context, our CLI is used to ingest evidence into REVIEW by parsing either JSON or XML files and extracting the needed information from elements to populate models used in REVIEW. Specifically we were tasked with supporting one of our competitor's data formats which came as an XML export. I should probably add that this was my first major involvement with one of our C# services, so this was an amazing learning experience for myself. This also was about the time where I really felt myself being able to contribute meaningfully to design discussions as I became more comfortable and familiar with our CLI's infrastructure. I remember this so fondly because it felt amazing to contribute to a customer requested Epic in such a meaningful way. It also was so enjoyable to work alongside such an amazing mentor who was so open to collaborate. I think I owe a lot of my growth during my co-op to Christian for being such a great mentor during the work on the project, and it remains one of my most fond memories during my work term.

---


### React.js Front-End Development
During the back half of my co-op there arose a concern about a large release we were supposed to deliver. However, it just so happened to involve almost entirely front-end and minor application level changes. This meant my Taco sub-team had very few priority items to deliver for this specific release. For this reason we came to the decision that it might be beneficial for me to switch over to the other sub-team (aka the Gadgeteers) to lend a hand. This gave me an amazing opportunity to get experience with front-end development. I learned how to develop using component driven design in React.js and found it super cool to work with one of these powerful frameworks. I also got experience with developing packages as we have an internal npm library which I had to work on. This gave me experience working with the Bootstrap library as our main packages are built on top of it.

---

### Refactoring a Microservice
When nearing the end of my co-op I discovered some inflexibility in one of our microservices when I was working on what should have been a small fix. I brought this to the attention of one of the team's Senior Developers, Rob. To my amazement, he suggested I should take on the tall task of refactoring the problematic areas of the microservice. He explained that it had become a bit of a mess due to some bad practices sneaking their way into production. For the next few weeks I took on this super exciting project, with Rob acting as somewhat of a project manager/mentor for concerns and questions I had while working on it. Through this experience I learned many fascinating concepts involving code completeness and best practices. I also of course learned the methodology involved with refactoring production code. I developed whitebox tests, blackbox tests, learned about what makes code hard to maintain, learned concepts of how to keep code flexible, and learned so much about how to not just write functional code, but maintainable and extendable code.
