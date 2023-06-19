import React from "react";
import "../styles/Home.css";
import gita from "../assets/gita.jpg";


const Home = () => {
  return (
    <div className="home-c">
        <h1 style={{margin:"2rem"}}>About me</h1>
        <div className="about">
        <div >
          <img src={gita} alt="" className="gita-img" />
        </div>
        <div className="about-text">
        
          At my practice, I am dedicated to providing effective psychotherapy
          services based on the principles of Cognitive Behavioral Therapy. Our
          skilled and compassionate psychotherapist utilizes CBT techniques to
          help individuals overcome challenges, improve their mental well-being,
          and achieve their personal goals. Here, we create a safe and
          supportive environment where clients can openly express their
          thoughts, emotions, and concerns. Our psychotherapist works
          collaboratively with each client, tailoring the therapy to their
          unique needs and circumstances. Our CBT approach is grounded in the
          understanding that our thoughts, emotions, and behaviors are
          interconnected. By identifying and challenging unhelpful thought
          patterns and beliefs, we can gain new insights and develop healthier
          coping strategies. Through CBT, our psychotherapist assists clients in
          recognizing and modifying negative thinking, managing stress, and
          cultivating positive behavioral changes. What sets us apart is our
          commitment to evidence-based practice. CBT has a substantial body of
          scientific research supporting its effectiveness in treating a wide
          range of mental health issues, such as anxiety, depression, phobias,
          obsessive-compulsive disorder, and more. Our psychotherapist stays
          up-to-date with the latest advancements in CBT techniques and
          integrates them into the therapy process. When you choose our
          services, you can expect a warm and non-judgmental atmosphere, where
          your concerns are taken seriously. Our psychotherapist fosters a
          collaborative therapeutic relationship built on empathy, trust, and
          respect. Whether you are seeking therapy for personal growth, managing
          stress, or addressing specific mental health challenges, we are here
          to support you on your journey. Take the first step towards positive
          change and contact us today to schedule an appointment. Please note
          that this description is a general template and can be customized to
          reflect the specific expertise, experience, and approach of your
          psychotherapist and practice.
      
        </div></div>
  
    </div>
  );
};

export default Home;
