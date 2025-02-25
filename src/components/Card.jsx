import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Card = () => {
  // // Custom values
  // const stories = [
  //   {
  //     videoUrl: "https://www.youtube.com/watch?v=UdRza_PDCeU",
  //     title: "INTRODUCTION TO LMS"
  //   },
  //   {
  //     videoUrl: "https://www.youtube.com/watch?v=HHoSZ4S55Ws",
  //     title: "Interview Questions for LMS"
  //   },
  //   // Add more stories here
  // ];





  const stories = [
    {
      videoUrl: "https://www.youtube.com/watch?v=UdRza_PDCeU",
      title: "INTRODUCTION TO LMS"
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=HHoSZ4S55Ws",
      title: "Interview Questions for LMS"
    },
    // Add more stories here
  ];




  const reviews = [
    {
      name: "Maya Sharma",
      message: "I've been attending this university for the past three years, and I have never been disappointed with the level of education, support, and resources available. Each professor is brilliant and well-versed in their field.",
      rating: 5
    },
    {
      name: "Rohan Patel",
      message: "The care and attention I received at this university were exceptional. The professors and staff went above and beyond to ensure I was comfortable and well-supported.",
      rating: 5
    },
    {
      name: "Sarah Khan",
      message: "Studying here has been a fantastic experience. The faculty and staff are always ready to help, and the academic resources are top-notch. I couldn't have asked for a better place to learn.",
      rating: 5
    },
    {
      name: "Arjun Mehta",
      message: "I've learned so much from this university. The professors are passionate and knowledgeable, and the staff is incredibly supportive. It's a great environment for personal and academic growth.",
      rating: 5
    }
  ]
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ChevronRight className="w-6 h-6 text-gray-700" />,
    prevArrow: <ChevronLeft className="w-6 h-6 text-gray-700" />
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Section - Patient Experience Stories */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Student Experience Stories
          </h2>
          <p className="text-gray-600 text-center">
          Hear directly from our students at LMS
          </p>
          <Slider {...settings}>
            {stories.map((story, index) => (
              <div key={index} className="relative">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={story.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Right Section - Patient Speaks */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Student Speaks
          </h2>
          <p className="text-gray-600 text-center">
          Are you getting struggle to find your right course?
          </p>
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="relative bg-sky-50 p-8 rounded-xl">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-center">
                    {review.name}
                  </h3>
                  <p className="text-gray-700 text-center leading-relaxed">
                    {review.message}
                  </p>
                  <div className="flex justify-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
      </div>
    </div>
  );
};

export default Card;

