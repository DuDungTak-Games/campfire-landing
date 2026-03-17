export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="contact-links">
        <a
          href="https://github.com/team-campfire-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          🔗 GitHub
        </a>
        <a
          href="https://teamcampfire.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          📰 블로그
        </a>
        <a
          href="https://discord.gg/Q4zCBrw75X"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          💬 Discord
        </a>
        <span className="contact-link">📧 Contact (TBD)</span>
      </div>
      <div className="copyright">
        <p>서울특별시 강북구 도봉로 336-1</p>
        <p>Copyright © 2025 Team.Campfire - All Rights Reserved.</p>
      </div>
    </footer>
  );
}
