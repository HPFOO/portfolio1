import React from "react";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import Project from "@/components/Project";
import EmailSection from "@/components/EmailSection";

export default function Home(){
  return(
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <Project />
      <EmailSection/>
    </div>
  );
}



