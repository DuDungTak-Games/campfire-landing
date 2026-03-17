import Image from 'next/image';
import { members } from '@/data/members';

export default function MemberGrid() {
  return (
    <div className="members-section">
      <h2>Members</h2>
      <div className="members-grid">
        {members.map((member, index) => (
          <a
            key={index}
            href={member.url}
            target="_blank"
            rel="noopener noreferrer"
            className="member-card"
          >
            <Image
              src={member.avatar}
              alt={member.name}
              width={80}
              height={80}
              className="member-avatar"
            />
            <span className="member-name">{member.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
