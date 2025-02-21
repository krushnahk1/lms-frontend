// src/components/SectionContent.jsx
import React from 'react';

const SectionContent = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Classroom Training Column */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Classroom Training</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://javabykiran.com/java-classes-in-pune/" target="_blank" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                <i className="fas fa-chevron-circle-right"></i>
                <span>Java Training</span>
              </a>
            </li>
            <li>
              <a href="https://javabykiran.com/selenium-classes-in-pune/" target="_blank" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                <i className="fas fa-chevron-circle-right"></i>
                <span>Selenium Training</span>
              </a>
            </li>
            <li>
              <a href="https://javabykiran.com/python-classes-in-pune/" target="_blank" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                <i className="fas fa-chevron-circle-right"></i>
                <span>Python Training</span>
              </a>
            </li>
            <li>
              <a href="https://javabykiran.com/salesforce-training-in-pune/" target="_blank" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                <i className="fas fa-chevron-circle-right"></i>
                <span>Angular Training</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Student Resources Column */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Student Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://javabykiran.com/java-by-kiran-classes-batch-schedule/" target="_blank" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                <i className="fas fa-chevron-circle-right"></i>
                <span>Upcoming Batches</span>
              </a>
            </li>
            <li>
              <a href="https://javabykiran.com/java-by-kiran-videos/" target="_blank" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                <i className="fas fa-chevron-circle-right"></i>
                <span>Classroom Videos & Tutorials</span>
              </a>
            </li>
            <li>
              <a href="https://javabykiran.com/java-by-kiran-book/" target="_blank" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                <i className="fas fa-chevron-circle-right"></i>
                <span>Java & Selenium Book</span>
              </a>
            </li>
            <li>
              <a href="https://javabykiran.com/old-student-feedback-java-by-kiran/" target="_blank" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                <i className="fas fa-chevron-circle-right"></i>
                <span>Students Feedback</span>
              </a>
            </li>
            <li>
              <a href="https://javabykiran.com/corejava-j2ee-selenium-testing-interview-question-answer/" target="_blank" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                <i className="fas fa-chevron-circle-right"></i>
                <span>Job Interview Questions</span>
              </a>
            </li>
            <li>
              <a href="https://javabykiran.com/blog/" target="_blank" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                <i className="fas fa-blog"></i>
                <span>Blog</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us On Column */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Follow Us On</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/javabykiran" target="_blank" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCZoq1kylnMYP_c5WG9FV9XA" target="_blank" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/company/javabykirantraining/" target="_blank" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://wa.me/918482917903" target="_blank" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/javabykiran/" target="_blank" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContent;
