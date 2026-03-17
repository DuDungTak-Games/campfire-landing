import Link from 'next/link';
import type { ProjectCategory } from '@/data/projects';

interface CategoryCard {
  key: ProjectCategory;
  emoji: string;
  title: string;
  description: string;
}

const categories: CategoryCard[] = [
  {
    key: 'game',
    emoji: '🎮',
    title: '인디 게임',
    description: '창의적인 아이디어로 만드는\n우리만의 즐거움',
  },
  {
    key: 'web',
    emoji: '🌐',
    title: '웹 서비스',
    description: '사람과 사람을 잇는\n새로운 소통의 공간',
  },
];

export default function ProjectCards() {
  return (
    <div className="card-container">
      {categories.map((cat) => (
        <Link
          key={cat.key}
          href={`/projects/${cat.key}`}
          className="card"
          style={{ cursor: 'pointer' }}
        >
          <h3>
            {cat.emoji} {cat.title}
          </h3>
          <p>
            {cat.description.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < cat.description.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
        </Link>
      ))}
    </div>
  );
}
