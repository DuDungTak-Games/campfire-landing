export interface Project {
  name: string;
  description: string;
  image?: string;
  github?: string;
  demo?: string;
  appStore?: string;
  playStore?: string;
  devLog?: string;
  status?: string;
}

export type ProjectCategory = 'web' | 'game';

export const projects: Record<ProjectCategory, Project[]> = {
  web: [
    {
      name: 'Constella',
      description: '우주 탐사 지식 플랫폼 - AI 기반 지식 탐사와 소셜 협업',
      image: '/images/constella-preview.png',
      github: 'https://github.com/team-campfire-dev/Constella',
      demo: 'https://constella.team-campfire.dev/ko/login',
      status: 'In Development',
    },
    {
      name: 'Daisy',
      description: '개발중인 웹 서비스',
      image: '/images/daisy-preview.png',
      github: 'https://github.com/team-campfire-dev/Daisy',
      demo: 'https://daisy.team-campfire.dev/',
      status: 'In Development',
    },
    {
      name: '서랍',
      description: '할 일과 루틴, 독서, 친구와 함께하는 소셜 투두 서비스',
      image: '/images/seorab-preview.png',
      demo: 'https://seorab.team-campfire.dev/',
      status: 'In Development',
    },
  ],
  game: [
    {
      name: '무한의 기둥 - Infinity Column',
      description: '전략과 순발력이 필요한 중독성 있는 블록 퍼즐 게임',
      image: '/images/infinity-column.png',
      appStore: 'https://apps.apple.com/us/app/infinity-column/id6743107597',
      playStore:
        'https://play.google.com/store/apps/details?id=com.TeamCampfire.InfinityColumn',
      devLog: 'https://dbsckdqja75.tistory.com/category/Unity',
      status: 'Live',
    },
  ],
};
