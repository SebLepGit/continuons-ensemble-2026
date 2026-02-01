import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MessageSection from '@/components/MessageSection';
import ReunionSection from '@/components/ReunionSection';
import PresseSection from '@/components/PresseSection';
import ProgrammeSection from '@/components/ProgrammeSection';
import MembresSection from '@/components/MembresSection';
import Footer from '@/components/Footer';
import {useEffect} from "react";
import { track } from "@/lib/mixpanel";

const Index = () => {

    useEffect(() => {
        track("Site Visited");
    }, []);

    return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <MessageSection />
        <ReunionSection />
        <PresseSection />
        <ProgrammeSection />
        <MembresSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
