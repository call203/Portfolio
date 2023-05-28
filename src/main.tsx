import { MainLayout } from 'components';
import { SectionContainer } from 'components/section-container/section-container.component';
import { IntroSection } from 'sections';
import { SectionIdEnum } from 'types';

const sections = [
  {
    sectionId: SectionIdEnum.intro,
    component: <IntroSection />,
  },
  {
    sectionId: SectionIdEnum.intro,
    component: <IntroSection />,
  },
  {
    sectionId: SectionIdEnum.intro,
    component: <IntroSection />,
  },
];

export const Main: React.FC = () => {
  return (
    <MainLayout>
      {sections.map(({ component, sectionId }) => {
        return (
          <SectionContainer sectionId={sectionId} key={sectionId}>
            {component}
          </SectionContainer>
        );
      })}
    </MainLayout>
  );
};
