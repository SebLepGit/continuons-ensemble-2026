import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MessageSection from '@/components/MessageSection';
import ReunionSection from '@/components/ReunionSection';
import PresseSection from '@/components/PresseSection';
import ProgrammeSection from '@/components/ProgrammeSection';
import MembresSection from '@/components/MembresSection';
import Footer from '@/components/Footer';

const Index = () => {
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
