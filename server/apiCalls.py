import os

import openai
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    # This is the default and can be omitted
    api_key=os.getenv('OPENAI_API_KEY')
)
prompt = """You are an AI Chatbot named PsReader. You are here to summarize video transcripts,provide a title, and provide key
insights as it relates to Strategy, Product, Experience, Engineering, and Data (SPEED) capabilities. Strategy identifies 
value pools and initial value proposition hypotheses. Product executes at pace and scale, connecting all our capabilities 
to learn and deliver value.Experience enables customer value with great interactions. Engineering delivers the underlying 
technology platforms with quality and velocity.Data uncovers insights to test hypotheses and constantly iterate. Limit summary
point to 4 paragraphs.

Use this format to answer:

Summary Title: "Create a title here"
Summary Points: "Summery in paragraph form here"
How it relates to SPEED: "How it relates to all speed capabilities here in bullet point format"
Relates to: "Speed Capability it relates to the most here"
Related courses: "Suggest other udemy courses based on content here in bullet point format"
"""

second_prompt = """You are an AI Chatbot named PsReader. You are here to summarize video transcripts and provide key

insights as it relates to Strategy, Product, Experience, Engineering, and Data (SPEED) capabilities. Strategy identifies 

value pools and initial value proposition hypotheses. Product executes at pace and scale, connecting all our capabilities 

to learn and deliver value.Experience enables customer value with great interactions. Engineering delivers the underlying 

technology platforms with quality and velocity.Data uncovers insights to test hypotheses and constantly iterate.
 
You have to classifying the teaching style from the transcripts using the following information
 
1. Lecturer

The lecturer style (sometimes called the formal authority style) is familiar to anyone who’s sat through long unidirectional lectures in giant university auditoriums.

This teaching style is often used with large groups of students, when a lot of interaction between the teacher and students is not feasible.

The subject matter in the lecturer style, most of the time, is singular and predetermined. Students are encouraged to take notes and ask questions at the end. There are usually no activities planned.
 
2. Demonstrator

Under the demonstrator style, the teacher still retains a lot of authority but is more open to trying a student-centered approach to teaching.

You can see the demonstrator encouraging students to come up with problem-solving strategies, ask questions and simulate what they’ve just learned.

The demonstrator often goes beyond lectures, showing presentations, images, films and experiments. As a result, it’s more applicable to more learning styles.
 
3. Hybrid

The hybrid (also known as blended) style strives to strike a balance between teacher- and student-centered approaches.

Most of the time, the teachers who follow the hybrid style bring their own knowledge and expertise into the class. They still have a structure for every lecture but are able to adjust their flow and come up with the right activities to keep the students engaged.

While the hybrid approach tends to be quite effective in a variety of settings, it can make covering information-heavy courses difficult due to its slower pace.
 
4. Facilitator

Shifting to an even more student-centered approach, there’s the facilitator style of teaching.

Instead of giving one-directional lectures, a facilitator encourages inquiry-based learning. Students learn by asking questions and discussing real-world case studies. Some other activities might be designed to improve problem-solving skills and help understand the subject matter better through practical challenges.
 
5. Delegator

The most student-centric teaching style of all is called the delegator style (also known as the group style). Here, the teacher is merely present as an observer, and it’s the group of students who are doing all the work.

Most of the learning in the delegator style happens peer-to-peer, through frequent collaborations and discussions. The instructor is practically removed from the position of authority and only facilitates the discussions instead.

The delegator style works best for lab-based experiments, group tutoring classes, creative writing, debates and other peer-to-peer activities.
 
Limit summary to 1-2 paragraphs.
 
Use this format:
 
Course Title: "Title Here"

Summary Points: "Summary in paragraph here"

Teaching Style: "Teaching style here "

How it relates to SPEED: "How it relates to any speed capabilities here"
 
Suggest other udemy courses based on content
"""

test_content = """Yeah.

So let's see where we can get better than this.

We needed a project so this can build a standard template where all of us can stick to one common standard

of defining test cases.

Now.

Does that the in the human genome project with the fate of six members.

So each person will have his own style of defining discusses some uses of business terminology in writing

it this is like make a credit card payment processing and some say click on submit button and then I

want indexed to take then take box.

He must be all the same.

You ain't done that language again which might be or sometimes to go back and read that this is why

so people have you know their own perspectives and I think that's OK.

So there should be a common practice.

Common complaint where all the.

Q So stick to that and follow that particular procedure so you can use a really an approach best guess

format could define this case.

So tomorrow if someone Johnson to the project assume that I think is for the Ennius you have done six

years of work and you are sort of functionally we have Bellah.

It's like some hundred pages or better and the UK joined the team of the CCS and if you want to get

to the application the best one is going to just guess if there should be brought up on a farm and a

proper understanding of those so that you'll be able to follow the functionality.

So if you can go on by adding a different format like each user have the data in his own style of writing

test cases.

So newbies are a new users cannot get sticking to that and cannot understand the format of it because

he might try to get them based on his own convenience and may not understand it.

OK.

So the other game and he didn't so specific saying you know what they won't go on because most of them

in one guy feels that OK I just do the business value and make the payment.

And then that is the end of the radius.

And that is you know becoming a major problem in these days especially Nazem products.

So people will go and come you know it's cross-functional right.

So you cannot say that this security will stick and I predict that spring is happening on every business

.

People may switch to other teams of this may step into development so there should be a proper template

.

So people should stick to that best guess.

So in that Bumpass No people will go for BTD so that they can use a common reference to write their

best guesses.

And here when you write this in audio it's not your place of business man.

Right.

I agree.

So if you go out and see that maybe you have written the scenario this scenario reflects a business

value of correct government.

So if you have hundreds of projects you can only say that there are 100 business values.

We have developed and tested for our product gave you pay some hundred scenarios that means you also

enhance their business value requirements.

That is the most important one.

Right.

And next you can estimate the best coverage happen for either business done by goal or best Arias case

it does.

Yeah.

So you're going to make the discoveries.

Right.

So this is my scenario where is that correct.

And here you are defending any number of test cases to satisfy that scenario right.

So now you can actually if someone ask you what's set test coverage for this credit card payments.

And you can bring on all these kind of Vasquez's which you have written to support that the scenario

that you are following improper and under the scenario we're simply defining the different kind of test

cases.

You can go ahead and watch these and you can estimate how much test is worth collates happen.

For this single scenario.

You don't have a single track what's happening in home it's testing you're doing that for that particular

credit card payments.

And one more interesting and excellent tool to have and one of the most reason why people are using

BDD.

You can actually drag this out additions to selenium web driver and you can take security on our commission

test just by taking these as you were ask is OK if something has failed in the open you will see this

as read by seeing output file of selenium automation.

We can come to the conclusion that OK this was in the back room we consider OK this way.

You need not have the board being you know how has damaged the parking lot and are just fine just fine

.

Complete fine with this gets us to your mission project and it will interbred and it will not complete

execution if you write a proper coding you need to record.

Just in our what with just passing this by.

And finally we'll get a report in this with a fine with complete green background.

If everything is passed if you feel that script failed here why not can get a message uncomplete greenback

don't feel justified.

You will see in this latest Greg just making them do it all within seconds.

You can just find out that this is only system fail in my observations and some over that when we're

talking when I talk about the lectures I can see that if you're part of my selenium or mission or happy

I'm a a mission boss fight.

So.

And also Tharman stands as a template for both man and the mission testing because most of the projects

that people will have their own best guess is in operation people will have their own this is because

it cannot go hand in each and every man task is going to have some separate art.

This gives us for you designed by man we've been arguing whether we should be able to reason our own

selves but with this behavior.

I misspoke just now.

You can actually bank data on our patients and you can connect to our mission ISS so you can make a

comment then play.

Management Manimal people can use these.

And even our mission team can use this Vasquez's legs and you know that our mission best suits but because

we are actually tagging these missions to other mission annotations in selenium.

OK I'm speaking of selenium.

So there's a proper integration for you that's typical but you'll which provider indignation for us

when it gets to selenium so that you can actually count on these.

OK.

So you need to break this case and into these just get it back.

So I'm speaking directly about my other mission testing them or whatever.

Do you understand what I speak about with your brain so that they can be calm and standardized and clear

.

The main reason people are proposing for abilities that they can integrate these foods or find them

and they can see a problem with us and then at the same time you can stick to common Blair.

So every man can have the common perception that inventing the old terminals is.

That's a that's pretty much evil behavior driven approach in software project.

OK thank you"""


completion = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": second_prompt},
    {"role": "user", "content": test_content}
  ]
)

print(completion.choices[0].message.content)


def summarize_transcript(text):
    try:
        completion = client.chat.completions.create(
            messages=[
                {"role": "system", "content": prompt},
                {"role": "user", "content": text}
            ],
            model="gpt-3.5-turbo",
        )
    except openai.APIError as e:
        # Handle API error here, e.g. retry or log
        return f"OpenAI API returned an API Error: {e}"
    except openai.APIConnectionError as e:
        # Handle connection error here
        return f"Failed to connect to OpenAI API: {e}"
    except openai.RateLimitError as e:
        # Handle rate limit error (we recommend using exponential backoff)
        return f"OpenAI API request exceeded rate limit: {e}"
    return completion.choices[0].message.content
