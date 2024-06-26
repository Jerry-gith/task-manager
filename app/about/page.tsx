"use client";

import { SetStateAction, useState } from "react";

import Link from "next/link";
import { FaTasks } from "react-icons/fa";

import { sections } from "./sections";

const About = () => {
  const year = new Date().getFullYear();

  const [activeTab, setActiveTab] = useState<number | null>(null);

  const toggleTab = (index: SetStateAction<number | null>) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <main className="text-justify">
      <header className="flex justify-between items-center">
        <Link
          href={"/"}
          className="font-mono font-bold text-xl flex items-center gap-3"
        >
          <span className="text-orange-500 inline">
            <FaTasks />
          </span>
          Task Manager
        </Link>

        <Link className="hover:text-orange-500" href={"about"}>
          About
        </Link>
      </header>

      <div className="mt-16">
        <h2 className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
          vitae quam et condimentum. Ut vel justo nulla. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Vivamus pellentesque sem gravida nisl hendrerit dignissim.
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
