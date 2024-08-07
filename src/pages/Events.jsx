import React from "react";
import Event1 from "../assets/Events/event1.webp";
import EventCard from "../components/EventCard";

function Events() {
  return (
    <div>
      <h1 className="m-[4vh] inline-block bg-gradient-to-r from-[#3b9aff] to-[#16CF10] bg-clip-text text-transparent text-[4vh] font-[Red_Hat_Display_Bold] ">
        See What We're Up To.
      </h1>

      {/* cont for all events */}
      <div className="m-auto">
        <EventCard
          heading="AKT Web Development Competition"
          date="{Date here}"
          img={Event1}
          description="Sponsored by tech consulting company AKT, the AKT web development challenge asked competitors to create a debt and budget tracking website based on an open ended situational prompt. Competitors were given 10 days to create their website and a demo presentation showing off its design and features. All 39 contestants were judged with a standard rubric that evaluated their functionality, design, creativity and even security with the team that won first place being given a 100 dollar prize."
        />
        <EventCard
          heading="AP CSA Review Session"
          date="{Date here}"
          img={Event1}
          description="Hosted a week before the AP exam, the AP computer science A review course was designed and taught exclusively by CSC officers who scored a 5 on the AP test. It was created to be the guide that our officers wished they had before the AP test. The course covered the hardest units and topics with examples of both FRQ and MCQ questions."
        />
        <EventCard
          heading="Basics of Java Course:"
          date="{Date here}"
          img={Event1}
          description="Taught by our talented high school officer team, The crash course revised and taught the topics listed in Ap Computer Science A semester 1.  The course was intended to teach middle schoolers looking to gain programming knowledge for high school computer science."
        />
        <EventCard
          heading="ADC Hackathon"
          date="{Date here}"
          img={Event1}
          description="The first competition ever hosted by CSC! Created to challenge contestants abilities to design and write algorithms under pressure, the contest contained 6 questions with topics ranging from String manipulation to 2 dimensional arrays. The contest saw 20 teams of 1-3 contestants each answer questions in python, java or C++."
        />
        <EventCard
          heading="Raising Awareness About Neurodiversity with Our First Competition"
          date="Feb 3-10, 2024"
          img={Event1}
          description="For a full week, CSC held a two-part competition as part of a collaboration with local organization Art4Neurodiversity, a student-led organization focused on increasing awareness about neurodiversity.

                        The first part of the competition tested competitors' logical reasoning with several programming problems, while the second part tested their innovation with a neurodiversity-themed hackathon."
        />
      </div>
    </div>
  );
}

export default Events;
