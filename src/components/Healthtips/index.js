import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './index.css';

const MedicalEducation = () => {
  const navigate = useNavigate();
  const jwtToken = Cookies.get('jwt_token');
  
  const [openAccordion, setOpenAccordion] = useState(null);
  
  useEffect(() => {
    if (jwtToken === undefined) {
      navigate('/register');
    }
  }, [jwtToken, navigate]);

  if (jwtToken === undefined) {
    return null;
  }

  const videos = [
    {
      id: 1,
      title: 'Ensuring Safe Medication Use',
      description: 'Everyone, from patients to healthcare professionals, plays a crucial role in promoting medication safety. This video is a component of the WHOs initiative aimed at minimizing medication-related harm through enhanced practices and error reduction.',
      videoUrl: 'https://www.youtube.com/embed/ZRsB8HWYJcw?si=r9sbwDsdgXgkOf6i'
    },
    {
      id: 2,
      title: 'Understanding Pandemic Complexity',
      description: 'Complexity of Pandemics is the Speaker Series of the WHO Hub for Pandemic and Epidemic Intelligence. It takes place quarterly and seeks to highlight the complex, multidisciplinary landscape of preventing, predicting, preparing for, and responding to epidemics and pandemics.',
      videoUrl: 'https://www.youtube.com/embed/isrrSE_d9EM?si=_eNdyjeIR1wHZM0d'
    },
    {
      id: 3,
      title: 'How Medicine Works ?',
      description: 'Have you ever wondered what happens to a painkiller, like ibuprofen, after you swallow it? Medicine that slides down your throat can help treat a headache, a sore back, or a throbbing sprained ankle. But how does it get where it needs to go in the first place? Céline Valéry explains how your body processes medicine.',
      videoUrl: 'https://www.youtube.com/embed/1dtraWLEy38?si=TeZ4g_6k8kPZ1PWe'
    },
    {
      id: 4,
      title: 'Make a good diet',
      description: 'Today there is a new nutrition reality. It is a reality where undernutrition (such as micronutrient deficiencies, stunting and wasting), overweight, obesity and diet-related noncommunicable diseases (NCDs) like diabetes and cancer now coexist in the same countries, communities, households and even individuals.',
      videoUrl: 'https://www.youtube.com/embed/zV1k76BsDpA?si=FeAMnuI8zn9-sWKt'
    },
    {
      id: 5,
      title: 'Be fit',
      description: 'Discover the science behind our behaviours, and how to achieve successful behaviour change. Try our practical tips - small steps you can use to move towards a healthier lifestyle! Explore more materials on healthy living at www.eufic.org',
      videoUrl: 'https://www.youtube.com/embed/-_VhU5rqyko?si=30cxp6MuMEjG-_Bp'
    },
    {
      id: 6,
      title: 'Children Happiness',
      description: 'People are always telling us to be healthy–but what does that actually mean? This video follows Maya as she learns how to create healthy habits involving her diet, sleep, physical activity, spending less time on her devices, and the value of finding a balance.',
      videoUrl: 'https://www.youtube.com/embed/kVOjq9yCQ-k?si=0rxphVU5j8zJnzJ8'
    },
    {
      id: 7,
      title: 'Detox Your Mind',
      description: 'Chronic stress is devastating for your brain. It ruins your memory, your attention and concentration and your emotional resilience. The brain areas that help execute these functions literally deteriorate.',
      videoUrl: 'https://www.youtube.com/embed/WuyPuH9ojCE?si=Ms93Y6lgiuLKeJwj'
    }
  ];

 
  const handleAccordionClick = (id) => {
    if (openAccordion === id) {
      setOpenAccordion(null); // Close accordion if already open
    } else {
      setOpenAccordion(id); // Open accordion
    }
  };

  return (
    <>
      <Header />
      <div className="medication-container">
        <h1 className="medication-heading">HealthTube: Carefully Selected Health and Wellness Video Collection</h1>
        <div className="videos-container">
          {videos.map((video) => (
            <div className="accordion-item" key={video.id}>
              <div className="accordion-heading" onClick={() => handleAccordionClick(video.id)}>
                <h2 className="video-heading">{video.title}</h2>
              </div>
              {openAccordion === video.id && (
                <div className="accordion-content">
                  <iframe
                    width="853"
                    height="480"
                    src={video.videoUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="video-styles"
                  ></iframe>
                  <div className="content">
                    <p className="video-desc">{video.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MedicalEducation;
