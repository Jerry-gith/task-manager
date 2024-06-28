"use client";

import { SetStateAction, useState } from "react";

import { sections } from "@/constants/aboutSections";
import { Header } from "@/components";

const About = () => {
  const year = new Date().getFullYear();

  const [activeTab, setActiveTab] = useState<number | null>(null);

  const toggleTab = (index: SetStateAction<number | null>) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <main className="text-justify">
      <Header />
      <div className="mt-16">

        <span id="heading" className="mb-4">
          <h1 className="text-orange-500 text-xl font-bold mb-2">About Task Manager</h1>
          <hr className="w-1/6 border border-orange-500" />
        </span>

        <h2 className="my-4">
          Welcome to Task Manager, your ultimate productivity tool designed to
          help you manage your time, prioritize tasks, and achieve your goals
          efficiently. Whether you're a student, professional, or entrepreneur,
          Task Manager is here to streamline your workflow and keep you focused
          on what matters most.
        </h2>

        {sections.map((section, index) => (
          <div key={section.id} className="space-y-4 pt-8">
            <h2 className="font-bold text-orange-500 rounded-xl p-4 shadow-md border border-orange-100 bg-white">
              {section.title}
              <span
                onClick={() => toggleTab(index)}
                className="text-sm cursor-pointer float-right"
              >
                {activeTab === index ? "-" : "+"}
              </span>
            </h2>
            {activeTab === index && (
              <div className="shadow-md bg-white p-6 border-b border-b-orange-200 rounded-b-xl -mt-8 -pt-8 rounded-bl-xls">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>

      <footer className="text-center mt-24">
        <p>
          &copy; {year} <span className="text-orange-500">Task Manager</span> |
          All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default About;
