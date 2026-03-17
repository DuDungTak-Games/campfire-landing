import HeroSection from '@/components/landing/HeroSection';
import ProjectCards from '@/components/landing/ProjectCards';
import MemberGrid from '@/components/landing/MemberGrid';
import Footer from '@/components/shared/Footer';

export default function Home() {
  return (
    <div className="landing">
      <HeroSection />

      <section className="about-section">
        <div className="intro-text">
          <p>
            <strong>Team Campfire</strong>는 게임 개발과 소셜 네트워크 서비스 등
            <br />
            다양한 방식으로 창의력을 소모할 수 있는 개발자들의 모임입니다.
          </p>
          <p>불꽃처럼 뜨겁게, 함께 만들어가는 이야기</p>
        </div>

        <ProjectCards />
        <MemberGrid />
      </section>

      <Footer />
    </div>
  );
}
