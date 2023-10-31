I wrote the RateMyProfessorComparisonTool program with the goal of being able to compare two professors in mind.
When picking professors for my classes, I always use RateMyProfessor to give insight into who the best option is. 
I was planning my schedule for next semester today and thought, "I wish there was a way to compare professors side by side."
Then I thought, "I wonder if there is a RateMyProfessor API for that purpose!". To my slight surprise, although there wasn't an official API,
there was a pip package that scraped the website for reviews. I immediately got to work, and am proud to present the tool in all its (simple) glory.

Feel free to use this program! I created a requirements.txt file for others to be able to quickly install the pip dependencies and use the program
I also have a .env file with my university's name that I gitignored. You can either hardcode the value for "school_name", or create a .env file with the variable as shown below:
SCHOOL_NAME="Your School Name Here"

I hope you'll find this simple program useful!